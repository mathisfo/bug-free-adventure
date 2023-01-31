import { api } from "../utils/api";

export const useActivityResource = (moduleId: string) => {
  const activityresourcequery =
    api.courseRouter.getActivityResourcesOnModuleId.useQuery({
      moduleId: moduleId,
    });

  return activityresourcequery;
};
