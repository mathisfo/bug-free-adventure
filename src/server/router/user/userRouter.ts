import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "../context";

export const userRouter = createRouter().query("loginUser", {
  input: z
    .object({
      email: z.string().email(),
    })
    .nullish(),
  async resolve({ input, ctx }) {
    return await ctx.prisma.user
      .findUniqueOrThrow({
        where: {
          email: input?.email,
        },
      })
      .catch((err) => {
        if (err instanceof Prisma.NotFoundError) {
          throw new TRPCError({
            message:
              "The email you provided was not found among the list of enrolled USN emails. Please contact Boban",
            code: "NOT_FOUND",
          });
        } else
          throw new TRPCError({
            message: "Internal Server Error",
            code: "INTERNAL_SERVER_ERROR",
          });
      });
  },
});
