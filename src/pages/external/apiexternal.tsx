import { activitiesRouter } from "../../server/router/activities-router";
import { TopicAnalytics } from "../../server/schema/LearnerActivitySchema";
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getMockAPI"]);

  const {
    data: activites,
    isSuccess: isSuccessActivities,
    isLoading: isLoadingActivities,
  } = trpc.useQuery(["activities.getResources"]);

  if (!isSuccess || isLoading || !isSuccessActivities || isLoadingActivities) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <h1>Hey, {learnerAnalytics.learner.id}</h1>
      <h2>Your topics: </h2>

      {learnerAnalytics.analytics.map((topic: TopicAnalytics) => (
        <div key={topic.topic}>
          <h3>{topic.topic}</h3>
          <p>Example Progress: {topic.progress.examples}</p>
        </div>
      ))}

      <h2>Activites:</h2>
      {activites
        .filter((e) => e.id == "Variables and Operations")
        .map((e) => e.activities.Examples.map((e) => e.url))}
    </>
  );
};

export default ExternalApi;
