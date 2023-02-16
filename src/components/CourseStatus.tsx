import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { api } from "../utils/api";

const CourseStatus = () => {
  const [clickedIndex, setClickedIndex] = useState<any>({});

  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  if (!isSuccess || isLoading) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const activites = learnerAnalytics.activityAnalytics;

  const handleClick = (index: number) => {
    setClickedIndex((state: any[]) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const ActivityProgressWithType = (
    type: string,
    module: string
  ): { success: number; total: number; asPercentage: number } => {
    if (type === "challenges") {
      const success = activites.challenges
        .filter((act) => act.relatedTopic === module)
        .filter((act) => act.successRate > 0).length;

      const total = activites.challenges.filter(
        (act) => act.relatedTopic === module
      ).length;
      return {
        success: success,
        total: total,
        asPercentage: (success / total) * 100,
      };
    }

    if (type === "examples") {
      const success = activites.examples
        .filter((act) => act.relatedTopic === module)
        .filter((act) => act.attempts > 0).length;

      const total = activites.examples.filter(
        (act) => act.relatedTopic === module
      ).length;

      return {
        success: success,
        total: total,
        asPercentage: (success / total) * 100,
      };
    }

    if (type === "coding") {
      const success = activites.coding
        .filter((act) => act.relatedTopic === module)
        .filter((act) => act.successRate > 0).length;

      const total = activites.coding.filter(
        (act) => act.relatedTopic === module
      ).length;
      return {
        success: success,
        total: total,
        asPercentage: (success / total) * 100,
      };
    }

    return { success: 0, total: 0, asPercentage: 0 };
  };

  return (
    <div className="background-color relative w-full  overflow-x-auto rounded-lg">
      <table className="text-color w-full table-fixed text-left text-sm">
        <thead className="bg-[#eaeaea] uppercase dark:bg-[#212124] dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Module</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Progress</th>
          </tr>
        </thead>
        <tbody>
          {learnerAnalytics?.moduleAnalytics.map((module, index) => {
            return (
              <>
                <tr
                  key={module.name}
                  className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-zinc-700 hover:dark:bg-[#242427]"
                  onClick={() => handleClick(index)}
                >
                  <th className="flex flex-row py-4 px-6 uppercase">
                    {clickedIndex[index] ? (
                      <ChevronDownIcon className="text-color mr-2 h-4 w-4" />
                    ) : (
                      <ChevronRightIcon className="text-color mr-2 h-4 w-4" />
                    )}
                    <Link href={`Java/${module.name}`}>{module.name}</Link>
                  </th>

                  <td className="py-4 px-6">
                    {module.overallProgress == 100 ? (
                      <div className="flex flex-row items-center gap-1">
                        <CheckCircleIcon className="text-green-color h-5 w-5"></CheckCircleIcon>
                        <p className="font-semibold uppercase opacity-75">
                          Done
                        </p>
                      </div>
                    ) : module.overallProgress > 0 ? (
                      <div className="flex flex-row items-center gap-1">
                        <EllipsisHorizontalCircleIcon className="text-blue-color h-5 w-5"></EllipsisHorizontalCircleIcon>
                        <p className="font-semibold uppercase opacity-75">
                          In progress
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-row items-center gap-1">
                        <XCircleIcon className="text-pink-color h-5 w-5"></XCircleIcon>
                        <p className="font-semibold uppercase opacity-75">
                          Not started
                        </p>
                      </div>
                    )}
                  </td>
                  <td className="flex flex-row py-4 px-6">
                    <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                      <div
                        className={`green-color h-2 rounded`}
                        style={{ width: module.overallProgress * 100 + "%" }}
                      ></div>
                    </div>
                    <div className="text-xs">
                      {Math.ceil(module.overallProgress * 100)} %
                    </div>
                  </td>
                </tr>
                {clickedIndex[index] && (
                  <>
                    {Object.keys(learnerAnalytics.activityAnalytics).map(
                      (activityType, index) => (
                        <tr
                          key={index}
                          className="text-md cursor-pointer border-b bg-[#F5F5F5] hover:bg-gray-50 dark:border-zinc-700 dark:bg-[#303335] hover:dark:bg-[#242427]"
                        >
                          <th className="py-4 px-12">
                            <Link
                              href={{
                                pathname: `Java/${module.name}`,
                                query: {
                                  type: activityType,
                                },
                              }}
                            >
                              {activityType.charAt(0).toUpperCase() +
                                activityType.slice(1)}
                            </Link>
                          </th>
                          <td className="py-4 px-12">
                            <div className="text-color flex flex-row font-bold">
                              {
                                ActivityProgressWithType(
                                  activityType,
                                  module.name
                                ).success
                              }
                              /
                              <div className="font-normal">
                                {
                                  ActivityProgressWithType(
                                    activityType,
                                    module.name
                                  ).total
                                }{" "}
                                tasks done{" "}
                              </div>
                            </div>
                          </td>
                          <td className="flex flex-row py-4 px-6 ">
                            <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                              <div
                                className={`lighter-green-color h-2 rounded`}
                                style={{
                                  width:
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).asPercentage + "%",
                                }}
                              ></div>
                            </div>
                            <div className="text-xs">
                              {Math.ceil(
                                (ActivityProgressWithType(
                                  activityType,
                                  module.name
                                ).success /
                                  ActivityProgressWithType(
                                    activityType,
                                    module.name
                                  ).total) *
                                  100
                              )}{" "}
                              %
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseStatus;
