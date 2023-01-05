import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { CommandLineIcon, FlagIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { Activity } from "../server/schema/LearnerActivitySchema";
import Home from "../pages";

const TimelineWrapper = (props: { recommendedActivities: Activity[] }) => {
  const { recommendedActivities } = props;

  if (recommendedActivities.length === 0) {
    return <div>No recommendations have been generated yet</div>;
  }

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700"> 
    {props.recommendedActivities.map((activity) => (                 
    <li className="mb-10 ml-10" key={activity.activityId}> 
    {activity.type == "EXAMPLE" ?           
        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#3c3b95] dark:bg-[#E54799] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <DocumentTextIcon className="text-white w-5 h-5"></DocumentTextIcon></span> :
            activity.type == "CODING" ? <span className="absolute flex items-center justify-center w-8 h-8 bg-[#5f80f4] dark:bg-[#6BFF93] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <FlagIcon className="text-white w-5 h-5"></FlagIcon></span> : 
            <span className="absolute flex items-center justify-center w-8 h-8 bg-[#9293cf] dark:bg-[#7759EB] rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
            <CommandLineIcon className="text-white w-5 h-5"></CommandLineIcon></span> }
      
        <p className="mb-2  text-lg font-normal text-color">{activity.type}</p>
        <p className=" flex items-center mb-1 text-xl font-bold text-color">{activity.activityName}</p>
    </li>))}
</ol>
    
  );
};

export default TimelineWrapper;


{/* <Timeline >
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
}   */}