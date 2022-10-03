import { createRouter } from "./context";
import { z } from "zod";
import { useQuery } from "react-query";

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
  .query("external-api", {
    async resolve() {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any").then((res) =>
        res.json()
      );
      return res;
    },
  });
