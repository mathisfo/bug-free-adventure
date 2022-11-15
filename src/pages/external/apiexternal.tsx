import { useRouter } from "next/router";
import {
  Activity,
  ModuleAnalytics,
} from "../../server/schema/LearnerActivitySchema";
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const router = useRouter();
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

      {learnerAnalytics.moduleanalytics.map((topic: ModuleAnalytics) => (
        <div key={topic.name}>
          <h3>{topic.name}</h3>
          <p>Example Progress: {topic.progress.examples}</p>
        </div>
      ))}

      <h2>Activites:</h2>
      {learnerAnalytics.activityAnalytics.challenges.map(
        (challenge: Activity) => (
          <div key={challenge.activityName}>
            <h3>{challenge.activityName}</h3>
            <p>{challenge.relatedTopic}</p>
          </div>
        )
      )}
    </>
  );
};

export default ExternalApi;
