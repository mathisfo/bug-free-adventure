import { z } from "zod";
import { createRouter } from "../context";

export const courseRouter = createRouter()
  .query("getCourse", {
    async resolve({ ctx }) {
      return await ctx.prisma.course.findFirst();
    },
  })
  .query("getModuleOnCourseName", {
    input: z
      .object({
        courseNameInput: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.module.findMany({
        where: {
          relation: {
            courseName: input.courseNameInput
          }
        }
      });
    },
  });
