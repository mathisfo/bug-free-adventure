import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("bopsi", {
    input: z
      .object({
        text: z.string().nullish(),
      }).nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "bopsi!"}`,
      };
    }
      
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
