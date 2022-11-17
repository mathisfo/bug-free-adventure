export {}
/* import { Activity, ActivityAnalytics } from '../server/schema/LearnerActivitySchema';
import { trpc } from "../utils/trpc";
import { useActivityResource } from "./useActivityResource";

type ActivityResource = Activity & {activityName: string | undefined}

export const useLearnerAnalytics = (moduleId: number) => {
  const activityResourcesHook = useActivityResource(moduleId);
  const activityResourcesPrisma = activityResourcesHook.data;

  const activityAnalyticsquery = trpc.useQuery([
    "learneractivity.getLearnerActivity",
  ]);
  const activityAnalytics = activityAnalyticsquery?.data;

  const challenges = activityAnalytics?.activityAnalytics.challenges;
  const examples = activityAnalytics?.activityAnalytics.examples;
  const coding = activityAnalytics?.activityAnalytics.coding;

  const allActivityAnalytics = [challenges, examples, coding];

  allActivityAnalytics.forEach((activity) => {
    activity?.forEach((activity) => {
      const activityResourceName = activityResourcesPrisma?.find(
        (activityResource) =>
          activityResource.activityId === activity.activityId
      )?.name;
      const newActivity: ActivityResource= {
        activityName: activityResourceName,
        activityId: activity.activityId,
        relatedTopic: activity.relatedTopic,
        type: activity.type,
        sequencing: activity.sequencing,
        attempts: activity.attempts,
        t: activity.t,
        aSeq: activity.aSeq,
        visited: activity.visited,
        successRate: activity.successRate,
      };

      activities.push(newActivity);
    });
  });
  return activities;
};
 */