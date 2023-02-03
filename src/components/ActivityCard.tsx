import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Activity,
  activityAnalyticsSchema,
} from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";
import DonutChart from "./DonutChart";

interface ActivityCardProps {
  type: string;
  bg: string;
  fillColor: string;
  moduleName?: string;
}

const ActivityCard = (props: ActivityCardProps) => {
  const { theme } = useTheme();

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

  const listOfExercises = [
    ...learnerAnalytics.activityAnalytics.challenges,
    ...learnerAnalytics.activityAnalytics.examples,
    ...learnerAnalytics.activityAnalytics.coding,
  ];

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      className={`${
        theme == "dark" ? "course-card" : "bg-white"
      }  text-color  grid w-4/5 grid-cols-5 rounded-lg`}
    >
      <div className="col-span-3 col-start-1 flex flex-row items-baseline space-x-2 p-4 font-semibold">
        <p className="text-6xl">
          {
            listOfExercises.filter(
              (e: Activity) =>
                props.type === e.type && props.moduleName === e.relatedTopic
            ).length
          }
        </p>
        <p className="text-2xl lowercase">{props.type + "s"}</p>
      </div>
      <div
        className={`${
          theme == "dark" ? "bg-[#26272A]" : "bg-gray-200"
        } col-span-2 col-start-4 row-span-2 h-full rounded-lg p-4`}
      >
        <DonutChart
          size="110px"
          bg="white"
          fillColor={props.fillColor}
          progress={Math.ceil(
            (listOfExercises.filter((e: Activity) =>
              props.type === "EXAMPLE"
                ? props.type === e.type &&
                  props.moduleName === e.relatedTopic &&
                  e.attempts > 0
                : props.type === e.type &&
                  props.moduleName === e.relatedTopic &&
                  e.successRate > 0
            ).length /
              listOfExercises.filter(
                (e: Activity) =>
                  props.type === e.type && props.moduleName === e.relatedTopic
              ).length) *
              100
          )}
        />
      </div>
      <div className="col-span-3 col-start-1 flex flex-row items-center space-x-1 p-4 text-sm">
        <Link
          href={{
            pathname: `Java/${props.moduleName}/${props.type}`,
            query: { type: props.type.toUpperCase() },
          }}
        >
          <div className="flex flex-row hover:cursor-pointer">
            <p className="underline">
              {"Show all " + props.type.toLowerCase() + "s"}
            </p>
            <p className="self-center">{chevron}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard;
