import { useQuery } from "react-query";
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const query = trpc.useQuery(["example.external-api"]);
  if (query.isError) {
    return <>Slemme...</>;
  }

  if (query.isLoading || !query.isSuccess) {
    return <>Loading...</>;
  }

  const { data} = query;

  console.log(query.data);

  return (
    <>
      <h1>External API</h1>
      <div>{data.category.toString()}</div>
    </>
  );
};

export default ExternalApi;
