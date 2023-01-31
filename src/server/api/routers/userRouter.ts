import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { onboardingSchema } from "../../schema/UserSchema";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUserInfo: protectedProcedure
    .input(
      z.object({
        id: z.string().email(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.user
        .findUniqueOrThrow({
          where: {
            id: input?.id,
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
    }),
  getLoggedInUser: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),

  setNameForUser: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: { name: input.name },
      });
    }),
  finishOnboarding: protectedProcedure.mutation(async ({ ctx }) => {
    return await ctx.prisma.user.update({
      where: {
        id: ctx.session.user.id,
      },
      data: { onBoarded: true },
    });
  }),

  submitOnboarding: protectedProcedure
    .input(onboardingSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          name: input.name,
          USNEmail: input.USNEmail,
          protusId: "norway" + input.protusId,
          leaderboard: input.leaderboard,
          onBoarded: true,
        },
      });
    }),
  getExerciseHistoryOnUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.exerciseHistory.findMany({
        where: {
          userId: input.userId,
        },
        include: {
          ActivityResource: true,
        },
      });
    }),
});
