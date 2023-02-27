import {
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { api } from "../utils/api";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CourseStatus2 = () => {
  const [clickedIndex, setClickedIndex] = useState<number>();

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

  const lengthOfArray = learnerAnalytics?.moduleAnalytics.length;

  return (
    <div className="text-color grid grid-cols-2 gap-x-4">
      <div className="col-start-1 grid auto-rows-max gap-y-7">
        {learnerAnalytics?.moduleAnalytics
          .slice(0, lengthOfArray / 2)
          .map((module, index) => {
            return (
              <div key={module.name}>
                <div
                  onClick={() =>
                    clickedIndex == index
                      ? setClickedIndex(-1)
                      : setClickedIndex(index)
                  }
                  className="course-card relative -mb-4 h-16 w-full cursor-pointer items-center rounded-xl"
                >
                  <p className="pl-4 pt-2 font-semibold uppercase">
                    {module.name}
                  </p>
                  <div className="mt-2 flex flex-row items-center font-semibold">
                    <div className="fill-color-light mx-4 h-2 w-1/2 rounded">
                      <div
                        className={`green-color h-2 rounded`}
                        style={{ width: module.overallProgress * 100 + "%" }}
                      ></div>
                    </div>
                    <div className="text-xs">
                      {Math.ceil(module.overallProgress * 100)} %
                    </div>
                  </div>
                  {clickedIndex == index ? (
                    <ChevronDownIcon className="absolute right-4 top-4 h-6 w-6" />
                  ) : (
                    <ChevronRightIcon className="absolute right-4 top-5 h-6 w-6" />
                  )}
                </div>
                {clickedIndex == index && (
                  <div className="fill-color-light rounded-xl pl-4">
                    <div className="grid grid-cols-3 pt-8 pb-4  text-sm font-semibold uppercase">
                      {Object.keys(learnerAnalytics.activityAnalytics).map(
                        (activityType, index) => (
                          <Link
                            key={activityType}
                            href={{
                              pathname: `Java/${module.name}`,
                              query: {
                                type: activityType,
                              },
                            }}
                          >
                            <div
                              className={`col-start-${
                                index + 1
                              } flex cursor-pointer flex-row items-baseline gap-3`}
                            >
                              {activityType}
                              <div
                                className={classNames(
                                  ActivityProgressWithType(
                                    activityType,
                                    module.name
                                  ).success /
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).total ===
                                    1
                                    ? "green-color"
                                    : ActivityProgressWithType(
                                        activityType,
                                        module.name
                                      ).success /
                                        ActivityProgressWithType(
                                          activityType,
                                          module.name
                                        ).total >
                                      0
                                    ? "bg-[#fecd66] text-gray-700"
                                    : "background-color",
                                  "flex h-6 w-10 items-center rounded"
                                )}
                              >
                                <p className="mx-auto">
                                  {
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).success
                                  }
                                  /
                                  {
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).total
                                  }
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                    <p className="pb-4 text-sm">{module.description}</p>
                    <Link href={`Java/${module.name}`}>
                      <div className="text-md flex cursor-pointer flex-row items-end pb-4 font-semibold uppercase ">
                        Show all{" "}
                        <p className="mx-1 text-[#988efe]">{module.name}</p>{" "}
                        exercises{" "}
                        <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="col-start-2 grid auto-rows-max gap-y-7">
        {learnerAnalytics?.moduleAnalytics
          .slice(lengthOfArray / 2, lengthOfArray)
          .map((module, index) => {
            return (
              <div key={module.name}>
                <div
                  onClick={() =>
                    clickedIndex == index + lengthOfArray / 2
                      ? setClickedIndex(-1)
                      : setClickedIndex(index + lengthOfArray / 2)
                  }
                  className="course-card relative -mb-4 h-16 w-full cursor-pointer items-center rounded-xl"
                >
                  <p className="pl-4 pt-2 font-semibold uppercase">
                    {module.name}
                  </p>
                  <div className="mt-2 flex flex-row items-center font-semibold">
                    <div className="fill-color-light mx-4 h-2 w-1/2 rounded">
                      <div
                        className={`green-color h-2 rounded`}
                        style={{ width: module.overallProgress * 100 + "%" }}
                      ></div>
                    </div>
                    <div className="text-xs">
                      {Math.ceil(module.overallProgress * 100)} %
                    </div>
                  </div>
                  {clickedIndex == index + lengthOfArray / 2 ? (
                    <ChevronDownIcon className="absolute right-4 top-4 h-6 w-6" />
                  ) : (
                    <ChevronRightIcon className="absolute right-4 top-5 h-6 w-6" />
                  )}
                </div>
                {clickedIndex == index + lengthOfArray / 2 && (
                  <div className="fill-color-light rounded-xl  pl-4">
                    <div className="grid grid-cols-3 pt-8 pb-4  text-sm font-semibold uppercase">
                      {Object.keys(learnerAnalytics.activityAnalytics).map(
                        (activityType, index) => (
                          <Link
                            key={activityType}
                            href={{
                              pathname: `Java/${module.name}`,
                              query: {
                                type: activityType,
                              },
                            }}
                          >
                            <div
                              className={`col-start-${
                                index + 1
                              } flex cursor-pointer flex-row items-baseline gap-3`}
                            >
                              {activityType.charAt(0).toUpperCase() +
                                activityType.slice(1)}
                              <div
                                className={classNames(
                                  ActivityProgressWithType(
                                    activityType,
                                    module.name
                                  ).success /
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).total ===
                                    1
                                    ? "green-color"
                                    : ActivityProgressWithType(
                                        activityType,
                                        module.name
                                      ).success /
                                        ActivityProgressWithType(
                                          activityType,
                                          module.name
                                        ).total >
                                      0
                                    ? "bg-[#fecd66] text-gray-700"
                                    : "background-color",
                                  "flex h-6 w-10 items-center rounded"
                                )}
                              >
                                <p className="mx-auto">
                                  {
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).success
                                  }
                                  /
                                  {
                                    ActivityProgressWithType(
                                      activityType,
                                      module.name
                                    ).total
                                  }
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                    <p className="pb-4 text-sm">{module.description}</p>
                    <Link href={`Java/${module.name}`}>
                      <div className="text-md flex cursor-pointer flex-row items-end pb-4 font-semibold uppercase ">
                        Show all{" "}
                        <p className="mx-1 text-[#988efe]">{module.name}</p>{" "}
                        exercises{" "}
                        <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CourseStatus2;
