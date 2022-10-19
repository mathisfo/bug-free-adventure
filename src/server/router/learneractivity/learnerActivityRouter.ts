import { z } from "zod";
import { createRouter } from "../context";
import { toJson } from "really-relaxed-json";

const mockAPISchema = z.object({
  lastActivityId: z.string(),
  lastActivityRes: z.number(),
  learner: z.object({
    id: z.string(),
    name: z.string(),
    state: z.object({
      topics: z.record(
        z.string(),
        z.object({
          values: z.object({
            Examples: z.object({ k: z.number(), p: z.number() }),
            Challenges: z.object({ k: z.number(), p: z.number() }),
            Coding: z.object({ k: z.number(), p: z.number() }),
          }),
        })
      ),
    }),
  }),
});

export type mockAPI = z.infer<typeof mockAPISchema>;

const externalAPIURL =
  "http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=norway22169&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1";

export const learnerActivityRouter = createRouter()
  .query("getLearnerActivity", {
    async resolve() {
      const res = await fetch("http://localhost:4000/api").then((response) =>
        response.json()
      );
    },
  })
  .query("getMockAPI", {
    async resolve() {
      const res = await fetch("http://localhost:4000/mockAPI").then(
        (response) => response.json()
      );

      return mockAPISchema.parse(res);
    },
  });
