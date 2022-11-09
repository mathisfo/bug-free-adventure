import { Input } from "postcss";
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
      return await ctx.prisma.module.findMany({
        where: {
          relation: {
            courseName: input.courseNameInput,
          },
        },
      });
    },
  })
  .query("getActivityResourcesOnModuleName", {
    input: z.object({
      moduleName: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.activityResource.findMany({
        where: {
          name: input.moduleName,
        },
      });
    },
  });
