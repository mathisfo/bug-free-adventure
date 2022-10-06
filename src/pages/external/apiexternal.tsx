import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const { data: results, isSuccess } = trpc.useQuery([
    "learneractivity.getLearnerActivity",
  ]);

  if (!isSuccess) {
    <p>Loading..</p>;
  }

  console.table(results);

  return (
    <>
      <h1>Hey, {results?.learner.id}</h1>

      <p>The last activity you worked on was {results?.lastActivityId}</p>
    </>
  );
};

export default ExternalApi;
