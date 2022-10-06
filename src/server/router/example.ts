import { createRouter } from "./context";
import { z } from "zod";
import { resolve } from "path";

const jokeSchema = z.object({
  error: z.boolean(),
  category: z.string(),
  type: z.string(),
  joke: z.string(),
  flags: z.object({
    nsfw: z.boolean(),
    religious: z.boolean(),
    political: z.boolean(),
    racist: z.boolean(),
    sexist: z.boolean(),
    explicit: z.boolean(),
  }),
  id: z.number(),
  safe: z.boolean(),
  lang: z.string(),
});

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
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  })
  .query("joke", {
    async resolve() {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      ).then((res) => res.json());

      return jokeSchema.parse(res);
    },
  })