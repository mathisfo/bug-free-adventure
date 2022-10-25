
import { TopicAnalytics } from '../../server/schema/LearnerActivitySchema';
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getMockAPI"]);

  if (!isSuccess || isLoading) {
    return <p>Loading..</p>;
  }
  

  return (
    <>
      <h1>Hey, {learnerAnalytics.learner.id}</h1>
      <h2>Your topics: </h2>

        {learnerAnalytics.topicanalytics.map((topic: TopicAnalytics) => (

          <div key={topic.name}>
            <h3>{topic.name}</h3>
            <p>Example Progress: {topic.progress.examples}</p>

          </div>

        ))}

    </>
  );
};

export default ExternalApi;
