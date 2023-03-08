import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { type } from "@prisma/client";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";
import { summary } from "date-streaks";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Stats = () => {
  const { data: session, status } = useSession({ required: true });

  const {
    data: learnerAnalytics,
    isSuccess: learnerIsSuccess,
    isLoading: learnerIsLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

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
    isLoading: historyIsLoading,
    isSuccess: historyIsSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery();

  if (historyIsLoading || !historyIsSuccess) {
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

  if (learnerIsLoading || !learnerIsSuccess) {
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

  const exerciseAttemptsLast7Days = (type: type) => {
    const attempts = history
      .filter(
        (e) =>
          e.ActivityResource.type == type &&
          e.completedAt !== null &&
          e.completedAt > sevenDaysAgo &&
          e.completedAt < today
      )
      .map((e) => e.attempts);

    const sum = attempts.reduce((a, b) => a! + b!, 0);

    return Math.round(sum ? sum / attempts.length : 0);
  };

  const exercisesAttempts7DaysBefore = (type: type) => {
    const attempts = history
      .filter(
        (e) =>
          e.ActivityResource.type == type &&
          e.completedAt !== null &&
          e.completedAt > fourteenDaysAgo &&
          e.completedAt < sevenDaysAgo
      )
      .map((e) => e.attempts);
    const sum = attempts.reduce((a, b) => a! + b!, 0);

    return Math.round(sum ? sum / attempts.length : 0);
  };

  const exerciseAttempts = (type: type) => {
    const attemptsLast7Days = exerciseAttemptsLast7Days(type);
    const attempts7DaysBefore = exercisesAttempts7DaysBefore(type);

    return {
      attemptsLast7Days: attemptsLast7Days,
      attempts7DaysBefore: attempts7DaysBefore,
      changeInPercentage: getProgress(attemptsLast7Days, attempts7DaysBefore),
    };
  };

  function getProgress(numberLast7Days: number, number7DaysBefore: number) {
    return (numberLast7Days === 0 && exercisesDone7DaysBefore.length === 0) ||
      numberLast7Days === 0
      ? 0
      : number7DaysBefore === 0
      ? 100
      : Math.round(numberLast7Days / number7DaysBefore);
  }

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
    const changeInPercentage = getProgress(doneLast7Days, done7DaysBefore);

    return {
      doneLast7Days: doneLast7Days,
      done7DaysBefore: done7DaysBefore,
      changeInPercentage: changeInPercentage,
    };
  };

  const datesDoneExercises = {
    dates: history.map((e) => e.completedAt) as Date[],
  };

  const currentStreak = summary(datesDoneExercises).currentStreak;

  return (
    <div className="text-color  cursor-pointer rounded-lg">
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
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded ",
                  StatsWithType("EXAMPLE").changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType("EXAMPLE").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
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
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded",
                  StatsWithType("CHALLENGE").changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType("CHALLENGE").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
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
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded",
                  StatsWithType("CODING").changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType("CODING").changeInPercentage > 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
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
          Average attempts on exercises
        </p>
        <p className="text-color-light text-sm font-semibold uppercase ">
          Last 7 days compared to the 7 days before
        </p>
        <div className="course-card mt-2 grid grid-cols-2 divide-x rounded px-2 py-4 dark:divide-gray-400">
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Challenges
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">
                {exerciseAttempts(type.CHALLENGE).attemptsLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {exerciseAttempts(type.CHALLENGE).attempts7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#0de890] text-white">
                <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">
                  {exerciseAttempts(type.CHALLENGE).changeInPercentage}%
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1  text-sm font-semibold">
              Coding Ex.
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">
                {exerciseAttempts(type.CODING).attemptsLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {exerciseAttempts(type.CODING).attempts7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#DE5B7E] text-white">
                <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">
                  {exerciseAttempts(type.CODING).changeInPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-row justify-center text-sm uppercase">
        <div className="flex flex-row justify-self-center">
          <p>Current streak</p>
          <p className="ml-2 font-semibold uppercase">
            {currentStreak} {currentStreak == 1 ? "day" : "days"} 🔥
          </p>
        </div>
        {/* <div className="flex flex-row justify-self-center"><p>Longest streak</p><p className="ml-2 uppercase font-semibold"> 6 days 🔥</p></div> */}
      </div>
      <div className="my-4 flex flex-row justify-center font-semibold uppercase">
        <p>You did</p>
        <div
          className={classNames(
            getProgress(
              exercisesDoneLast7Days.length,
              exercisesDone7DaysBefore.length
            ) > 0
              ? "bg-[#0de890] text-gray-700"
              : "bg-[#DE5B7E] text-white",
            "mx-2 w-12 rounded "
          )}
        >
          <p className="text-center">
            {getProgress(
              exercisesDoneLast7Days.length,
              exercisesDone7DaysBefore.length
            )}
            %
          </p>
        </div>
        <p>
          {getProgress(
            exercisesDoneLast7Days.length,
            exercisesDone7DaysBefore.length
          ) < 0
            ? "less than last week 📉"
            : "more than last week 📈"}
        </p>
      </div>
    </div>
  );
};

export default Stats;
