import { z } from "zod";

export const onboardingSchema = z.object({
  name: z.string(),
  USNEmail: z.string().email(),
  protusId: z
    .number({ invalid_type_error: "Your ID is between 22101 and 22200" })
    .gt(22101)
    .lt(22200)
    .int(),
  leaderboard: z.boolean(),
});

export type OnboardingForm = z.infer<typeof onboardingSchema>;
