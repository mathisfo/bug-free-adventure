import { SelectedEnum } from "@prisma/client";
import { z } from "zod";

export const selectedComps = z.nativeEnum(SelectedEnum);
export type selectedCompsEnum = z.infer<typeof selectedComps>;

export const onboardingSchema = z
  .object({
    name: z.string().optional(),
    USNEmail: z.string().email().endsWith("@usn.no", {
      message: "Your email must be an USN email.",
    }),
    protusId: z
      .number({
        invalid_type_error: "Your ID should be between 22101 and 22200",
      })
      .gt(22100, { message: "Your ID must be greater than 22100" })
      .lt(22201, { message: "Your ID must be lower than 22201" })
      .int(),
    selectedComponents: z.array(z.string()),
    leaderboard: z.boolean(),
  })
  .transform((data) => ({
    ...data,
    name: data.leaderboard ? data.name : undefined,
  }))
  .refine(
    (data) => !data.leaderboard || (data.name ? data.name.length > 2 : false),
    {
      message: "Name must be at least three characters long",
      path: ["name"],
    }
  )
  .refine(
    (data) => !data.leaderboard || (data.name ? data.name.length < 15 : false),
    {
      message: "Name must be fewer than 15 characters",
      path: ["name"],
    }
  );

export const userPreferenceSchema = z.object({
  newSelectedComponents: z.array(selectedComps),
  leaderboard: z.boolean(),
  name: z.string().optional(),
});

export const toDoSchema = z.object({
  dueDate: z.date(),
  name: z.string(),
  userId: z.string(),
});

export type ToDoForm = z.infer<typeof toDoSchema>;
export type OnboardingForm = z.infer<typeof onboardingSchema>;
export type UserPreferenceForm = z.infer<typeof userPreferenceSchema>;
