import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import {
  createUserSchema,
  requestOtpSchema,
} from "../../../schema/user.schema";
import { createRouter } from "../context";
import * as trpc from "@trpc/server";
import { sendLoginEmail } from "../../../utils/mailer";
import { getBaseUrl } from "../../../pages/_app";
import { encode } from "punycode";

export const userRouter = createRouter()
  .mutation("register-user", {
    input: createUserSchema,

    resolve: async ({ ctx, input }) => {
      const { name, email } = input;

      try {
        const user = ctx.prisma.user.create({
          data: {
            name,
            email,
          },
        });

        return user;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: "User already exists",
            });
          }
        }

        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    },
  })
  .mutation("request-otp", {
    input: requestOtpSchema,
    async resolve({ input, ctx }) {
      const { email, redirect } = input;
      const user = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "user not found",
        });
      }

      const token = await ctx.prisma.loginToken.create({
        data: {
          redirect,
          userId: user.id,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      await sendLoginEmail({
        token: encode(`${token.id}:${user.email}`),
        url: getBaseUrl + "/api/trpc",
        email: user.email!,
      });

      return true;
    },
  });
