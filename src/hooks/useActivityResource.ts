import { trpc } from "../utils/trpc";

export const useActivityResource = (moduleId: number) => {
  const activityresourcequery = trpc.useQuery([
    "course.getActivityResourcesOnModuleId",
    { moduleId: moduleId },
  ]);

  return activityresourcequery;
};
