import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "../context";

export const courseRouter = createRouter()
  .query("getCourses", {
    async resolve({ ctx }) {
      return await ctx.prisma.course.findMany();
    },
  })
  .query("getModuleOnCourseName", {
    input: z.object({
      courseNameInput: z.string(),
    }),
    async resolve({ ctx, input }) {
      const modules = ctx.prisma.module.findMany({
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
    },
  })
  .query("getActivityResourcesOnModuleId", {
    input: z.object({
      moduleId: z.number(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.activityResource.findMany({
        where: {
          moduleId: input.moduleId,
        },
      });
    },
  })
  .query("getActivityResourceNamesAndActivityId", {
    async resolve({ ctx }) {
      return await ctx.prisma.activityResource.findMany({
        //TODO where course = courseInput

        select: {
          name: true,
          activityId: true,
        },
      });
    },
  });
