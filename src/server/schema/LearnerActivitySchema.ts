import { z } from "zod";

export const topicProgressSchema = z.object({
  examples: z.number(),
  challenges: z.number(),
  coding: z.number(),
});

export const topicAnalyticsSchema = z.object({
  topic: z.string(),
  progress: topicProgressSchema,
  sequencing: z.object({
    examples: z.number(),
    challenges: z.number(),
    coding: z.number(),
  }),
  overallProgress: z.number(),
});

export const learnerActivitySchema = z.object({
  learner: z.object({
    id: z.string(),
    name: z.string(),
    lastActivityId: z.string(),
  }),
  analytics: z.array(topicAnalyticsSchema),
});

export type TopicProgress = z.infer<typeof topicProgressSchema>;
export type TopicAnalytics = z.infer<typeof topicAnalyticsSchema>;
export type LearnerAnalyticsAPIResponse = z.infer<typeof learnerActivitySchema>;
