import { type } from "@prisma/client";
import { z } from "zod";

export const topicProgressSchema = z.object({
  examples: z.number(),
  challenges: z.number(),
  coding: z.number(),
});

export const topicAnalyticsSchema = z.object({
  name: z.string(),
  progress: topicProgressSchema,
  sequencing: z.object({
    examples: z.number(),
    challenges: z.number(),
    coding: z.number(),
  }),
  overallProgress: z.number(),
});

export const activitySchema = z.object({
  relatedTopic: z.string(),
  activityName: z.string(),
  activityId: z.string(),
  url: z.string(),
  visited: z.boolean(),
  attempts: z.number(),
  successRate: z.number(),
  t: z.number(),
  aSeq: z.string(),
  sequencing: z.number(),
  type: z.enum([type.EXAMPLE, type.CODING, type.CHALLENGE]),
});

export const activityAnalyticsSchema = z.object({
  examples: z.array(activitySchema),
  challenges: z.array(activitySchema),
  coding: z.array(activitySchema),
});

export const learnerActivitySchema = z.object({
  learner: z.object({
    id: z.string(),
    name: z.string(),
    lastActivityId: z.string(),
  }),
  moduleAnalytics: z.array(topicAnalyticsSchema),
  activityAnalytics: activityAnalyticsSchema,
});

export type ActivityAnalytics = z.infer<typeof activityAnalyticsSchema>;
export type Activity = z.infer<typeof activitySchema>;

export type TopicProgress = z.infer<typeof topicProgressSchema>;
export type ModuleAnalytics = z.infer<typeof topicAnalyticsSchema>;
export type LearnerAnalyticsAPIResponse = z.infer<typeof learnerActivitySchema>;
