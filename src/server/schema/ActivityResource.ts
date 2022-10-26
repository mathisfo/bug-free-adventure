import { z } from "zod";

export const activityResourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
});
export const activitiesSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    activities: z.object({
      Examples: z.array(activityResourceSchema),
      Challenges: z.array(activityResourceSchema),
      Coding: z.array(activityResourceSchema),
    }),
  })
);

export type Activities = z.infer<typeof activitiesSchema>;
export type ActivityResource = z.infer<typeof activityResourceSchema>;
