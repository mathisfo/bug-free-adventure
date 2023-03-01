import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Stats = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const {
    data: history,
    isLoading,
    isSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery({
    userId: session.user.id,
  });

  if (isLoading || !isSuccess) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
  const today = new Date(Date.now());

  const exercisesDoneLast7Days = history.filter(
    (e) =>
      e.completedAt !== null &&
      e.completedAt > sevenDaysAgo &&
      e.completedAt < today
  );
  const exercisesDone7DaysBefore = history.filter(
    (e) =>
      e.completedAt !== null &&
      e.completedAt > fourteenDaysAgo &&
      e.completedAt < sevenDaysAgo
  );

  const StatsWithType = (
    type: string
  ): {
    doneLast7Days: number;
    done7DaysBefore: number;
    changeInPercentage: number;
  } => {
    const doneLast7Days = exercisesDoneLast7Days.filter(
      (e) => e.ActivityResource.type == type
    ).length;
    const done7DaysBefore = exercisesDone7DaysBefore.filter(
      (e) => e.ActivityResource.type == type
    ).length;
    const changeInPercentage =
      (doneLast7Days === 0 && done7DaysBefore === 0) || doneLast7Days === 0
        ? 0
        : done7DaysBefore === 0
        ? 100
        : Math.round(done7DaysBefore / doneLast7Days);

    return {
      doneLast7Days: doneLast7Days,
      done7DaysBefore: done7DaysBefore,
      changeInPercentage: changeInPercentage,
    };
  };

  return (
    <div className="text-color m-8 w-1/2 cursor-pointer rounded-lg">
      <div className="mb-8 mt-4">
        <p className="text-md font-semibold uppercase">
          Average exercises done
        </p>
        <p className="text-color-light text-sm font-semibold uppercase ">
          Last 7 days compared to the 7 days before
        </p>
        <div className="course-card mt-2 grid grid-cols-3 divide-x rounded px-2 py-4 dark:divide-gray-400">
          <div className="grid grid-cols-2 justify-items-stretch">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Examples
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">
                {StatsWithType("EXAMPLE").doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {StatsWithType("EXAMPLE").done7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType("EXAMPLE").changeInPercentage > 0
                    ? "bg-[#0de890]"
                    : "bg-[#DE5B7E]",
                  "flex flex-row items-center rounded  text-white",
                  StatsWithType("EXAMPLE").changeInPercentage === 100
                    ? "w-15"
                    : "w-13"
                )}
              >
                {StatsWithType("EXAMPLE").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                )}
                <p className="text-sm font-semibold">
                  {StatsWithType("EXAMPLE").changeInPercentage}%
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Challenges
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">
                {StatsWithType("CHALLENGE").doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {StatsWithType("CHALLENGE").done7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType("CHALLENGE").changeInPercentage > 0
                    ? "bg-[#0de890]"
                    : "bg-[#DE5B7E]",
                  "flex flex-row items-center rounded  text-white",
                  StatsWithType("CHALLENGE").changeInPercentage === 100
                    ? "w-15"
                    : "w-13"
                )}
              >
                {StatsWithType("CHALLENGE").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                )}
                <p className="text-sm font-semibold">
                  {StatsWithType("CHALLENGE").changeInPercentage}%
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Coding Ex.
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">
                {StatsWithType("CODING").doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {StatsWithType("CODING").done7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType("CODING").changeInPercentage > 0
                    ? "bg-[#0de890]"
                    : "bg-[#DE5B7E]",
                  "flex flex-row items-center rounded  text-white",
                  StatsWithType("CODING").changeInPercentage === 100
                    ? "w-15"
                    : "w-13"
                )}
              >
                {StatsWithType("CODING").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                )}
                <p className="text-sm font-semibold">
                  {StatsWithType("CODING").changeInPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-md font-semibold uppercase">
          Average time spent on exercises
        </p>
        <p className="text-color-light text-sm font-semibold uppercase ">
          Last 7 days compared to the 7 days before
        </p>
        <div className="course-card mt-2 grid grid-cols-3 divide-x rounded px-2 py-4 dark:divide-gray-400">
          <div className="grid grid-cols-2 justify-items-stretch">
            <p className="col-start-1 row-start-1  text-sm font-semibold">
              Examples
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">2</p>{" "}
              <p className="text-color-light "> from 1</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#0de890] text-white">
                <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">50%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Challenges
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">3</p>{" "}
              <p className="text-color-light ">from 4</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#0de890] text-white">
                <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">4%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1  text-sm font-semibold">
              Coding Ex.
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">1</p>{" "}
              <p className="text-color-light ">from 2</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#DE5B7E] text-white">
                <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-row justify-center text-sm uppercase">
        <div className="flex flex-row justify-self-center">
          <p>Current streak</p>
          <p className="ml-2 font-semibold uppercase">2 days 🔥</p>
        </div>
        {/* <div className="flex flex-row justify-self-center"><p>Longest streak</p><p className="ml-2 uppercase font-semibold"> 6 days 🔥</p></div> */}
      </div>
      <div className="my-4 flex flex-row justify-center font-semibold uppercase">
        <p>You did</p>
        <div className="mx-1 w-12 rounded bg-[#0de890]">
          <p className="text-center text-white">10%</p>
        </div>
        <p>more than last week 📈</p>
      </div>
    </div>
  );
};

export default Stats;
