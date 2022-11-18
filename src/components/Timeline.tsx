import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { Activity } from "../server/schema/LearnerActivitySchema";

const TimelineWrapper = (props: { recommendedActivities: Activity[] }) => {
  const { recommendedActivities } = props;

  if (recommendedActivities.length === 0) {
    return <div>No recommendations have been generated yet</div>;
  }

  return (
    <Timeline>
      {props.recommendedActivities.map((activity) => (
        <Timeline.Item key={activity.activityId}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>{activity.type}</Timeline.Time>
            <Timeline.Title>{activity.activityId}</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default TimelineWrapper;
