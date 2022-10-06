
import { z } from "zod";
import { createRouter } from '../context';

const LearnerActivitySchema = z.object({
    lastActivityId: z.string(),
    lastActivityRes: z.number(),
    learner: z.object({
      id: z.string(),
      name: z.string(),
      state: z.object({
        topics: z.any(),
        activities: z.object({}),
      }),
    }),
    groups: z.array(z.string()),
    recommendation: z.array(z.string()),
    recommendationKC: z.array(z.string()),
    feedback: z.object({}),
    logs: z.array(z.string()),
    ownBadges: z.array(z.string()),
    rmcCount: z.object({}),
  });

export type LearnerActivity = z.infer<typeof LearnerActivitySchema>;


export const learnerActivityRouter = createRouter().query("getLearnerActivity", {
    async resolve() {
      const res = await fetch(
        "http:localhost:4000/api"
      ).then((res) => res.json());

      return LearnerActivitySchema.parse(res);
    },
  });