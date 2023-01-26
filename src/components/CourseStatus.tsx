import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { Activity } from "../server/schema/LearnerActivitySchema";
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

  return (
    <div className="background-color relative w-full  overflow-x-auto rounded-lg">
      <table className="text-color w-full table-fixed text-left text-sm">
        <thead className="dark:course-card-dark bg-[#F5F5F5] uppercase dark:text-gray-400">
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
                  className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
                  // onClick={() => setOpen(!open)}
                  onClick={() => handleClick(index)}
                >
                  <th className="flex flex-row py-4 px-6">
                    {clickedIndex[index] ? (
                      <ChevronDownIcon className="text-color mr-2 h-4 w-4"></ChevronDownIcon>
                    ) : (
                      <ChevronRightIcon className="text-color mr-2 h-4 w-4"></ChevronRightIcon>
                    )}
                    <Link href={`Java/${module.name}`}>{module.name}</Link>
                  </th>

                  <td className="py-4 px-6">
                    {module.overallProgress == 100 ? (
                      <div className="flex flex-row items-center gap-1">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-400 dark:text-green-400"></CheckCircleIcon>
                        Done
                      </div>
                    ) : module.overallProgress > 0 ? (
                      <div className="flex flex-row items-center gap-1">
                        <EllipsisHorizontalCircleIcon className="h-5 w-5 text-blue-400 dark:text-[#6f69ee]"></EllipsisHorizontalCircleIcon>
                        In progress
                      </div>
                    ) : (
                      <div className="flex flex-row items-center gap-1">
                        <XCircleIcon className="dark:test-rose-500 h-5 w-5 text-rose-400"></XCircleIcon>
                        Not started
                      </div>
                    )}
                  </td>
                  <td className="flex flex-row py-4 px-6">
                    <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                      <div
                        className={`h-2 rounded bg-blue-400 dark:bg-[#11E64A]`}
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
                          className="text-md cursor-pointer border-b bg-[#F5F5F5] hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1c1f37] hover:dark:bg-[#3F485F] "
                        >
                          <th className="py-4 px-12">
                            <Link
                              href={{
                                pathname: `Java/${module.name}`,
                                query: {
                                  type:
                                    activityType == "coding"
                                      ? activityType.toUpperCase()
                                      : activityType
                                          .toUpperCase()
                                          .slice(0, activityType.length - 1),
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
                                [
                                  ...activites.challenges,
                                  ...activites.coding,
                                  ...activites.examples,
                                ]
                                  .filter((act) =>
                                    act.type === "CODING"
                                      ? act.type === activityType.toUpperCase()
                                      : act.type + "S" ===
                                        activityType.toUpperCase()
                                  )
                                  .filter(
                                    (act: Activity) =>
                                      act.relatedTopic === module.name
                                  )
                                  .filter((act) =>
                                    act.type == "EXAMPLE"
                                      ? act.attempts > 0
                                      : act.successRate > 0
                                  ).length
                              }
                              /
                              <div className="font-normal">
                                {
                                  [
                                    ...activites.challenges,
                                    ...activites.coding,
                                    ...activites.examples,
                                  ]
                                    .filter((act) =>
                                      act.type === "CODING"
                                        ? act.type ===
                                          activityType.toUpperCase()
                                        : act.type + "S" ===
                                          activityType.toUpperCase()
                                    )
                                    .filter(
                                      (e: Activity) =>
                                        e.relatedTopic === module.name
                                    ).length
                                }{" "}
                                tasks done{" "}
                              </div>
                            </div>
                          </td>
                          <td className="flex flex-row py-4 px-6 ">
                            <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                              <div
                                className={`h-2 rounded bg-rose-400 dark:bg-[#6BFF93]`}
                                style={{
                                  width:
                                    ([
                                      ...activites.challenges,
                                      ...activites.coding,
                                      ...activites.examples,
                                    ]
                                      .filter((act) =>
                                        act.type === "CODING"
                                          ? act.type ===
                                            activityType.toUpperCase()
                                          : act.type + "S" ===
                                            activityType.toUpperCase()
                                      )
                                      .filter(
                                        (e: Activity) =>
                                          e.relatedTopic === module.name
                                      )
                                      .filter((e) =>
                                        e.type == "EXAMPLE"
                                          ? e.attempts > 0
                                          : e.successRate > 0
                                      ).length /
                                      [
                                        ...activites.challenges,
                                        ...activites.coding,
                                        ...activites.examples,
                                      ].filter(
                                        (e: Activity) =>
                                          e.relatedTopic === module.name
                                      ).length) *
                                      100 +
                                    "%",
                                }}
                              ></div>
                            </div>
                            <div className="text-xs">
                              {Math.ceil(
                                ([
                                  ...activites.challenges,
                                  ...activites.coding,
                                  ...activites.examples,
                                ]
                                  .filter((act) =>
                                    act.type === "CODING"
                                      ? act.type === activityType.toUpperCase()
                                      : act.type + "S" ===
                                        activityType.toUpperCase()
                                  )
                                  .filter(
                                    (act: Activity) =>
                                      act.relatedTopic === module.name
                                  )
                                  .filter((act) =>
                                    act.type == "EXAMPLE"
                                      ? act.attempts > 0
                                      : act.successRate > 0
                                  ).length /
                                  [
                                    ...activites.challenges,
                                    ...activites.coding,
                                    ...activites.examples,
                                  ]
                                    .filter((act) =>
                                      act.type === "CODING"
                                        ? act.type ===
                                          activityType.toUpperCase()
                                        : act.type + "S" ===
                                          activityType.toUpperCase()
                                    )
                                    .filter(
                                      (e: Activity) =>
                                        e.relatedTopic === module.name
                                    ).length) *
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
