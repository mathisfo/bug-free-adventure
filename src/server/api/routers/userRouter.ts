import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { onboardingSchema, toDoSchema } from "../../schema/UserSchema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getLeaderBoard: publicProcedure.query(async ({ ctx }) => {
    const leaderboardUsers = await ctx.prisma.user.findMany({
      take: 10,
      where: {
        leaderboard: true,
      },
      include: {
        history: true,
      },
    });

    return leaderboardUsers
      .map((user) => {
        return {
          name: user.name,
          userId: user.id,
          score: user.history.length,
        };
      })
      .sort((a, b) => b.score - a.score);
  }),
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
      const history = await ctx.prisma.exerciseHistory.findMany({
        where: {
          userId: input.userId,
        },
        include: {
          ActivityResource: true,
        },
      });

      return history;
    }),
  addExerciseHistoryToUser: protectedProcedure
    .input(z.object({ activityId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.exerciseHistory.create({
        data: {
          userId: ctx.session.user.id,
          activityResourceId: input.activityId,
          visitedAt: new Date(),
          completedAt: new Date(),
        },
      });
    }),
  getToDoOnUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const todo = await ctx.prisma.toDo.findMany({
        where: {
          userId: input.userId,
        },
        select: {
          todoId: true,
          dueDate: true,
          completed: true,
          name: true,
          userId: true,
        },
      });

      if (todo.length > 0) {
        return todo
          .sort(
            (a, b) =>
              new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
          )
          .sort((a, b) =>
            a.completed === b.completed ? 0 : b.completed ? -1 : 1
          );
      }

      return [];
    }),
  addToDoToUser: protectedProcedure
    .input(z.object({ toDo: toDoSchema }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.toDo.create({
        data: {
          userId: input.toDo.userId,
          dueDate: input.toDo.dueDate,
          completed: false,
          name: input.toDo.name,
        },
      });
    }),
  setToDoCompleted: protectedProcedure
    .input(z.object({ todoId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.toDo.update({
        where: {
          todoId: input.todoId,
        },
        data: {
          completed: true,
        },
      });
    }),
});
