import { z } from "zod";
import {
  onboardingSchema,
  selectedCompsEnum,
  toDoSchema,
} from "../../schema/UserSchema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getLeaderBoard: publicProcedure.query(async ({ ctx }) => {
    const leaderboardUsers = await ctx.prisma.user.findMany({
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

  submitOnboarding: protectedProcedure
    .input(onboardingSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        include: {
          preferences: true,
        },
        data: {
          name: input.name,
          USNEmail: input.USNEmail,
          protusId: "norway" + input.protusId,
          leaderboard: input.leaderboard,
          onBoarded: true,
          preferences: {
            create: {
              selectedComponents: {
                set: input.selectedComponents as selectedCompsEnum[],
              },
              leaderboard: input.leaderboard,
            },
          },
        },
      });
    }),

  getUserPreferences: protectedProcedure.query(async ({ ctx }) => {
    const preferences = await ctx.prisma.userPreference.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
      take: 1,
    });
    return preferences[0]!;
  }),

  getExerciseHistoryOnUser: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const history = await ctx.prisma.exerciseHistory.findMany({
        where: {
          userId: input.userId,
          NOT: {
            completedAt: null,
          },
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
      return await ctx.prisma.exerciseHistory.upsert({
        where: {
          userExerciseHistoryOnActivityResource: {
            userId: ctx.session.user.id,
            activityResourceId: input.activityId,
          },
        },
        create: {
          userId: ctx.session.user.id,
          activityResourceId: input.activityId,
          visitedAt: new Date(),
        },
        update: {},
      });
    }),
  updateExerciseHistory: protectedProcedure
    .input(z.object({ activityId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.exerciseHistory.update({
        where: {
          userExerciseHistoryOnActivityResource: {
            userId: ctx.session.user.id,
            activityResourceId: input.activityId,
          },
        },
        data: {
          completedAt: new Date(),
        },
      });
    }),
  getToDosOnUser: protectedProcedure
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
  deleteTodo: protectedProcedure
    .input(z.object({ todoId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.toDo.delete({
        where: {
          todoId: input.todoId,
        },
      });
    }),
});
