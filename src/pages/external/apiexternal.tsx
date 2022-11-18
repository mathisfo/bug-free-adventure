import {
  Activity,
  ModuleAnalytics,
} from "../../server/schema/LearnerActivitySchema";
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (!isSuccess || isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <h1>Hey, {learnerAnalytics.learner.id}</h1>
      <h2>Your topics: </h2>

      {learnerAnalytics.moduleAnalytics.map((module: ModuleAnalytics) => (
        <div key={module.name}>
          <h3>{module.name}</h3>
          <p>Example Progress: {module.progress.examples}</p>
        </div>
      ))}

      <h2>Activites:</h2>
      {learnerAnalytics.activityAnalytics.challenges.map(
        (challenge: Activity) => (
          <div key={challenge.activityId}>
            <h3>{challenge.activityName}</h3>
            <p>{challenge.relatedTopic}</p>
          </div>
        )
      )}
    </>
  );
};

export default ExternalApi;
