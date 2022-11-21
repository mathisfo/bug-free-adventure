import { type as typeEnum } from "@prisma/client";
import Link from 'next/link';
import { useRouter } from "next/router";
import ActivityCard from "../../components/ActivityCard";
import Timeline from "../../components/Timeline";
import { Activity } from "../../server/schema/LearnerActivitySchema";
import { trpc } from "../../utils/trpc";

const ModuleStatistics = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
    isIdle,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  const router = useRouter();

  const { module } = router.query;
  const { type } = router.query;

  if (isLoading || isIdle || !isSuccess) {
    return <div>Loading...</div>;
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

  if (!type) {
    return (
      <div className='m-4 grid grid-cols-2'>
        {/* <h1 className='m-2 text-4xl'>{module![1]}</h1> */}
        <Timeline
          recommendedActivities={[
            ...activities.challenges,
            ...activities.coding,
            ...activities.examples,
          ].filter((e) => e.sequencing > 0 && e.relatedTopic === module![1])}
        />
        <div className="p-14 space-y-4 col-start-2">
          <ActivityCard type="Example" bg="bg-gradient-to-r from-[#3c3b95] via-[#44439f] to-[#3c3b95] " boxColor="bg-[#4c4aa2]" fillColor="#ED3695" fillColorDark="#E54799"/>
          <ActivityCard type="Coding" bg="bg-gradient-to-r from-[#5f80f4] via-[#6c8af3] to-[#5f80f4]" boxColor="bg-[#7795f6]" fillColor="#ED3695" fillColorDark="#6BFF93"/>
          <ActivityCard type="Challenge" bg="bg-gradient-to-r from-[#9293cf] via-[#9a9bd0] to-[#9293cf]" boxColor="bg-[#A3a6d8]" fillColor="#ED3695" fillColorDark="#7759EB"/>
        </div>
      </div>
    );
  }

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
              <th className="py-3 px-6">Sequencing</th>
            </tr>
          </thead>
          <tbody>
            {module
              ? typeofActivity()
                  .filter((activity) => activity.relatedTopic == module[1])
                  .map((activity) => {
                    return (
                      <tr
                        key={activity.activityId}
                        className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
                      >
                        <th className="py-4 px-6"><a target="_blank" href={activity.url} rel="noreferrer">{activity.activityName}</a></th>
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
