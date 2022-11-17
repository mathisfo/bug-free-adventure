import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { appRouter } from "../../server/router";
import { trpc } from "../../utils/trpc";
import superjson from "superjson";
import { type as typeEnum } from "@prisma/client";
import {
  Activity,
  ActivityAnalytics,
  LearnerAnalyticsAPIResponse,
} from "../../server/schema/LearnerActivitySchema";
import Timeline from "../../components/Timeline";

const ModuleStatistics = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
    isIdle,
    isError,
    error,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  const {
    data: nameAndIds,
    isSuccess: nameAndIdsSuccess,
    isLoading: nameAndIdsLoading,
  } = trpc.useQuery(["course.getActivityResourceNamesAndActivityId"]);
  const router = useRouter();

  const { module } = router.query;
  const { type } = router.query;

  console.log("module", module);
  console.log("type", type);

  if (isLoading || nameAndIdsLoading || !nameAndIdsSuccess || isIdle) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const activities = learnerAnalytics.activityAnalytics;

  const typeofActivity = (): Activity[] => {
    switch (type) {
      case typeEnum.CHALLENGE: {
        return learnerAnalytics.activityAnalytics.challenges;
      }

      case typeEnum.EXAMPLE: {
        return learnerAnalytics.activityAnalytics.examples;
      }

      case typeEnum.CODING: {
        return learnerAnalytics.activityAnalytics.coding;
      }

      default: {
        return [];
      }
    }
  };

  return (
    <>     
      <div> {module ? module[1] : "404"}</div>
      <div>{type + "S"}</div>
      <Timeline
        recommendedActivities={[
          ...activities.challenges,
          ...activities.coding,
          ...activities.examples,
        ].filter((e) => e.sequencing > 0 && e.relatedTopic === module![1])}
      />
      <div className="background-color absolute w-full overflow-x-auto  rounded-lg">
        <table className="text-color w-full table-fixed text-left text-sm">
          <thead className="dark:course-card-dark bg-[#F5F5F5] uppercase dark:text-gray-400">
            <tr>
              <th className="py-3 px-6">Activity</th>
              <th className="py-3 px-6">Attempts</th>
              <th className="py-3 px-6">Success</th>
              <th className="py-3 px-6">Module</th>
              <th className="py-3 px-6">Type</th>
            </tr>
          </thead>
          <tbody>
            {module
              ? typeofActivity()
                  .filter((activity) => activity.relatedTopic == module[1])
                  .map((activity) => {
                    console.log("NAME ", activity.activityName)
                    return (
                      <tr
                        key={activity.activityId}
                        className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
                      >
                        <th className="py-4 px-6">{activity.activityName}</th>
                        <td className="py-4 px-6">{activity.attempts}</td>
                        <td className="flex flex-row py-4 px-6">
                          <div>{activity.successRate}</div>
                        </td>
                        <td>{activity.relatedTopic}</td>
                        <td>{activity.type}</td>
                        <td>{activity.sequencing}</td>
                      </tr>
                    );
                  })
              : "404"}
          </tbody>
        </table>
      </div>
      );
    </>
  );
};

export default ModuleStatistics;
