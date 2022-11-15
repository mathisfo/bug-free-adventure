import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { appRouter } from "../../server/router";
import { trpc } from "../../utils/trpc";
import superjson from "superjson";

const ModuleStatistics = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);
  const router = useRouter();

  const { module } = router.query;

  const path = module?.toString().split(",")[1];

  if (!isSuccess) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div> hei {module?.toString().split(",")[1]}</div>
      <div className="background-color absolute w-full overflow-x-auto  rounded-lg">
        <table className="text-color w-full table-fixed text-left text-sm">
          <thead className="dark:course-card-dark bg-[#F5F5F5] uppercase dark:text-gray-400">
            <tr>
              <th className="py-3 px-6">Activity</th>
              <th className="py-3 px-6">Attempts</th>
              <th className="py-3 px-6">Success</th>
            </tr>
          </thead>
          <tbody>
            {learnerAnalytics.activityAnalytics.challenges
              .filter((module) => path === module.relatedTopic)
              .map((challenge) => {
                return (
                  <tr
                    key={challenge.activityName}
                    className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
                  >
                    <th className="py-4 px-6">{challenge.activityName}</th>
                    <td className="py-4 px-6">{challenge.attempts}</td>
                    <td className="flex flex-row py-4 px-6">
                      <div>{challenge.successRate}</div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      );
    </>
  );
};

export default ModuleStatistics;
