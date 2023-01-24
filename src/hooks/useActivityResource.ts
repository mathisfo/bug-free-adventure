import { api } from "../utils/api";

export const useActivityResource = (moduleId: number) => {
  const activityresourcequery =
    api.courseRouter.getActivityResourcesOnModuleId.useQuery({
      moduleId: moduleId,
    });

  return activityresourcequery;
};
