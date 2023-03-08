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
    if (numberLast7Days === 0 && number7DaysBefore === 0) {
      return 0;
    }

    if (
      number7DaysBefore === 0 ||
      (number7DaysBefore === 1 && numberLast7Days !== 1)
    ) {
      return 100;
    }

    if (
      numberLast7Days === 0 ||
      (numberLast7Days === 1 && number7DaysBefore !== 1)
    ) {
      return -100;
    }

    return Math.round(
      ((number7DaysBefore - numberLast7Days) / numberLast7Days) * 100
    );
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
    const changeInPercentage = getProgress(done7DaysBefore, doneLast7Days);

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
        <p className="text-md font-semibold uppercase">Exercises done</p>
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
                {StatsWithType(type.EXAMPLE).doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {StatsWithType(type.EXAMPLE).done7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType(type.EXAMPLE).changeInPercentage > 0 &&
                    StatsWithType(type.EXAMPLE).doneLast7Days >
                      StatsWithType(type.EXAMPLE).done7DaysBefore
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded ",
                  StatsWithType(type.EXAMPLE).changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType(type.EXAMPLE).changeInPercentage > 0 &&
                StatsWithType(type.EXAMPLE).doneLast7Days >
                  StatsWithType(type.EXAMPLE).done7DaysBefore ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
                )}
                <p className="text-sm font-semibold">
                  {Math.abs(StatsWithType(type.EXAMPLE).changeInPercentage)}%
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
                {StatsWithType(type.CHALLENGE).doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {Math.abs(StatsWithType(type.CHALLENGE).done7DaysBefore)}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType(type.CHALLENGE).changeInPercentage > 0
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded",
                  StatsWithType(type.CHALLENGE).changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType(type.CHALLENGE).changeInPercentage > 0 &&
                StatsWithType(type.CHALLENGE).doneLast7Days >
                  StatsWithType(type.CHALLENGE).done7DaysBefore ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
                )}
                <p className="text-sm font-semibold">
                  {StatsWithType(type.CHALLENGE).changeInPercentage}%
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
                {StatsWithType(type.CODING).doneLast7Days}
              </p>{" "}
              <p className="text-color-light ">
                from {StatsWithType(type.CODING).done7DaysBefore}
              </p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div
                className={classNames(
                  StatsWithType(type.CODING).changeInPercentage > 0
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded",
                  StatsWithType(type.CODING).changeInPercentage === 100
                    ? "w-15"
                    : "w-14"
                )}
              >
                {StatsWithType(type.CODING).changeInPercentage > 0 &&
                StatsWithType(type.CODING).doneLast7Days >
                  StatsWithType(type.CODING).done7DaysBefore ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-gray-700 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-white " />
                )}
                <p className="text-sm font-semibold">
                  {Math.abs(StatsWithType(type.CODING).changeInPercentage)}%
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
              <div
                className={classNames(
                  exerciseAttempts(type.CHALLENGE).changeInPercentage >= 0
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded"
                )}
              >
                {" "}
                {exerciseAttempts(type.CHALLENGE).changeInPercentage < 0 ? (
                  <ArrowTrendingUpIcon className="mx-1 h-4 w-4 text-white " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-gray-700 " />
                )}
                <p className="text-sm font-semibold">
                  {Math.abs(
                    exerciseAttempts(type.CHALLENGE).changeInPercentage
                  )}
                  %
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
              <div
                className={classNames(
                  exerciseAttempts(type.CODING).changeInPercentage >= 0
                    ? "bg-[#0de890] text-gray-700"
                    : "bg-[#DE5B7E] text-white",
                  "flex flex-row items-center rounded"
                )}
              >
                {exerciseAttempts(type.CODING).changeInPercentage < 0 ? (
                  <ArrowTrendingUpIcon className="text-gray-white mx-1 h-4 w-4 " />
                ) : (
                  <ArrowTrendingDownIcon className="mx-1 h-4 w-4 text-gray-700 " />
                )}
                <p className="text-sm font-semibold">
                  {Math.abs(exerciseAttempts(type.CODING).changeInPercentage)}%
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
        {!(
          exercisesDoneLast7Days.length === exercisesDone7DaysBefore.length
        ) && (
          <div
            className={classNames(
              exercisesDone7DaysBefore < exercisesDoneLast7Days
                ? "bg-[#0de890] text-gray-700"
                : "bg-[#DE5B7E] text-white",
              "mx-2 w-12 rounded "
            )}
          >
            <p className="text-center">
              {Math.abs(
                exercisesDoneLast7Days.length - exercisesDone7DaysBefore.length
              )}
            </p>
          </div>
        )}
        <p>
          {exercisesDone7DaysBefore === exercisesDoneLast7Days
            ? "the same amount of exercises as last week 📈"
            : exercisesDone7DaysBefore < exercisesDoneLast7Days
            ? " exercises more than last week 📈"
            : " exercises less than last week 📉"}
        </p>
      </div>
    </div>
  );
};

export default Stats;
