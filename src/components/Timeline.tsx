import {
  CommandLineIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useExerciseHistory } from "../hooks/useExerciseHistory";
import { Activity } from "../server/schema/LearnerActivitySchema";

const TimelineWrapper = (props: {
  recommendedActivities: Activity[];
  learnerAnalytics: any;
}) => {
  const { data: session, status } = useSession();

  const { recommendedActivities } = props;

  const [selectedActivity, setSelectedActivity] = useState<string | undefined>(
    undefined
  );

  useExerciseHistory(props.learnerAnalytics, selectedActivity);

  if (recommendedActivities.length === 0) {
    return <div>No recommendations have been generated yet</div>;
  }

  if (status === "unauthenticated" || !session?.user) {
    return <div>Unauthorized</div>;
  }

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {props.recommendedActivities.map((activity) => (
        <li className="mb-10 ml-10" key={activity.activityId}>
          <a
            target="_blank"
            href={
              activity.url +
              "&usr=" +
              session.user?.protusId +
              "&grp=NorwayFall2022B&sid=TEST&cid=352"
            }
            onClick={() => setSelectedActivity(activity.activityId)}
            rel="noreferrer"
          >
            {activity.type == "EXAMPLE" ? (
              <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#3c3b95] dark:bg-[#DE5B7E]">
                <DocumentTextIcon className="h-5 w-5 text-white"></DocumentTextIcon>
              </span>
            ) : activity.type == "CODING" ? (
              <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5f80f4] dark:bg-[#6BFF93]">
                <FlagIcon className="h-5 w-5 text-white"></FlagIcon>
              </span>
            ) : (
              <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#988efe]  dark:bg-[#988efe]">
                <CommandLineIcon className="h-5 w-5 text-white"></CommandLineIcon>
              </span>
            )}

            <p className="text-color  mb-2 text-lg font-normal">
              {activity.type}
            </p>
            <p className=" text-color mb-1 flex items-center text-xl font-bold">
              {activity.activityName}
            </p>
          </a>
        </li>
      ))}
    </ol>
  );
};

export default TimelineWrapper;

{
  /* <Timeline >
      {props.recommendedActivities.map((activity) => (
        <Timeline.Item key={activity.activityId}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>{activity.type}</Timeline.Time>
            <Timeline.Title color="text-color">{activity.activityName}</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline> {activity.type == "EXAMPLE" ? <span className="bg-[#3c3b95] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <DocumentTextIcon className="text-white w-5 h-5"></DocumentTextIcon> </span> : 
    activity.type == "CODING" ? <span className="bg-[#5f80f4] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <FlagIcon className="text-white w-5 h-5"></FlagIcon> </span> :
    <span className="bg-[#9293cf] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <CommandLineIcon className="text-white w-5 h-5"></CommandLineIcon> </span>
}   */
}
