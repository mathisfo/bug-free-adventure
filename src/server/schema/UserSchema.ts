import { SelectedEnum } from "@prisma/client";
import { z } from "zod";

const selectedComps = z.nativeEnum(SelectedEnum);
export type selectedCompsEnum = z.infer<typeof selectedComps>;

export const onboardingSchema = z.object({
  name: z.string(),
  USNEmail: z.string().email(),
  protusId: z
    .number({ invalid_type_error: "Your ID is between 22101 and 22200" })
    .gt(22101)
    .lt(22200)
    .int(),
  selectedComponents: z.array(z.string()),
  leaderboard: z.boolean(),
});

export const toDoSchema = z.object({
  dueDate: z.date(),
  name: z.string(),
  userId: z.string(),
});

export type ToDoForm = z.infer<typeof toDoSchema>;
export type OnboardingForm = z.infer<typeof onboardingSchema>;
