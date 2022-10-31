import { createRouter } from "../context";

export const courseRouter = createRouter()
  .query("getCourse", {
    async resolve({ ctx }) {
      return await ctx.prisma.course.findFirst();
    },
  })
  .query("getModuleOnCourseName", {
    async resolve({ ctx }) {
      return await ctx.prisma.module.findMany();
    },
  });
