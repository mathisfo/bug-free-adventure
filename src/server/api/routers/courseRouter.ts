import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const courseRouter = createTRPCRouter({
  getCourses: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.course.findMany();
  }),
  getModuleOnCourseName: publicProcedure
    .input(
      z.object({
        courseNameInput: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const modules = await ctx.prisma.module.findMany({
        where: {
          relation: {
            courseName: input.courseNameInput,
          },
        },
      });

      if (!modules) {
        throw new TRPCError({ message: "No modules found", code: "NOT_FOUND" });
      }

      return modules;
    }),
  getActivityResourcesOnModuleId: publicProcedure
    .input(
      z.object({
        moduleId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activityResource.findMany({
        where: {
          moduleId: input.moduleId,
        },
      });
    }),
});
