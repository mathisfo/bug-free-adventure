import { mockAPI } from "../../server/router/learneractivity/learnerActivityRouter";
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const {
    data: results,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getMockAPI"]);

  if (!isSuccess || isLoading) {
    return <p>Loading..</p>;
  }



  console.log("TOPICS ", results?.learner.state.topics[0]);

  return (
    <>
      <h1>Hey</h1>
      <h2>Topics</h2>
      {Object.entries(results?.learner.state.topics).map((topic) => (
        <div key={topic[0]}>
          <h1 key={topic[0]}>{topic[0]}</h1>
          <h2>Challenges</h2>
          <p>Your progress:</p>
          <p>{topic[1].values.Challenges.p}</p>

        </div>
      ))}
    </>
  );
};

export default ExternalApi;
