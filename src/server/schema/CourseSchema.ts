import { z } from "zod";

export const ActivityResourceSchema = z.object({
  id: z.number(),
  type: z.enum(["EXAMPLE", "CHALLENGE", "CODING"]),
  name: z.string(),
  url: z.string(),
});

export const ModuleSchema = z.object({
  id: z.number(),
  moduleName: z.string(),
  ActivityResource: z.array(ActivityResourceSchema),
});

export const CourseSchema = z.object({
  id: z.number(),
  courseName: z.string(),
  modules: z.array(ModuleSchema),
});

export type Course = z.infer<typeof CourseSchema>;
export type Module = z.infer<typeof ModuleSchema>;
export type ActivityResource = z.infer<typeof ActivityResourceSchema>;
