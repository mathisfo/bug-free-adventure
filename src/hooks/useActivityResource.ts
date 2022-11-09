import { trpc } from '../utils/trpc'

export const useActivityResource = (moduleName: string) => {
    const activityresourcequery = trpc.useQuery(["course.getActivityResourcesOnModuleName", {moduleName: moduleName} ])

    return activityresourcequery
}