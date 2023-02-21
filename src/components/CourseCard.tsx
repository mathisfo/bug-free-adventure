import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { list } from "postcss";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";

const CourseCard = ({ courseName }: { courseName: string }) => {
  const router = useRouter();

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
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const listOfExercises = [
    ...learnerAnalytics.activityAnalytics.challenges,
    ...learnerAnalytics.activityAnalytics.examples,
    ...learnerAnalytics.activityAnalytics.coding,
  ];

  const onClick = async (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    await router.push(target);
  };

  const exercisesDone = listOfExercises.filter(
    (e: Activity) =>
      (e.type === "EXAMPLE" && e.attempts > 0) ||
      ((e.type === "CHALLENGE" || e.type === "CODING") && e.successRate > 0)
  ).length;

  const allExercises = listOfExercises.length;

  return (
    <div
      onClick={(e) => onClick("/courses/Java", e)}
      className={`course-card w-full cursor-pointer rounded-lg p-2 transition duration-300 ease-in-out hover:scale-105`}
    >
      <div className="my-4 ml-4 flex flex-row items-center">
        <div
          className={` w-12 items-end rounded-3xl bg-[#627bfc] p-2 dark:bg-[#6f69ee] `}
        >
          <CommandLineIcon className="text-white"></CommandLineIcon>
        </div>
        <div className="text-color px-4 py-4 text-2xl font-semibold uppercase">
          {courseName.toUpperCase()}
        </div>
      </div>
      <div className="text-color flex flex-row items-baseline px-4 pt-2 text-lg font-bold">
        <p>{exercisesDone}/</p>
        <p className="text-color-light font-normal uppercase">
          {listOfExercises.length}
        </p>
        <p className="text-color-light tfont-semibold px-2 text-sm uppercase">
          completed tasks
        </p>
      </div>
      <div className="text-color mt-4 px-4 py-2 text-sm font-semibold uppercase">
        Progress
      </div>
      <div className="mb-4 flex w-full flex-row items-center">
        <div className="fill-color-light mx-4  h-2 w-4/5 rounded">
          <div
            className={`green-color h-2  rounded`}
            style={{ width: (exercisesDone / allExercises) * 100 + "%" }}
          ></div>
        </div>
        <div className="text-xs">
          {Math.round((exercisesDone / allExercises) * 100)} %
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
