import { z } from "zod";

import { createRouter } from "../context";
import * as trpc from "@trpc/server";

export const courseRouter = createRouter()
  .query("getCourse", {
    async resolve({ ctx }) {
      return await ctx.prisma.course.findFirst();
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
  .query("getActivityResourcesOnCourseId", {
    input: z.object({
      courseIdInput: z.number(),
    }),
    async resolve({ ctx, input }) {
      const activityResource = await ctx.prisma.activityResource.findMany({
        where: {
          relation: {
            courseId: input.courseIdInput,
          },
        },
      });

      if (!activityResource) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: `No resources found with courseId ${input.courseIdInput}`,
        });
      }

      return activityResource
    },
  });
