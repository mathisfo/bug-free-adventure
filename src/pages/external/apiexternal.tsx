import { useQuery } from "react-query";
import { z } from 'zod';
import { trpc } from "../../utils/trpc";

const ExternalApi = () => {
  const query = trpc.useQuery(["example.external-api"]);

  const { data: helloExample } = trpc.useQuery(["example.hello", {text: "yoo"}]);

  if (query.isError) {
    return <>Slemme...</>;
  }

  if (query.isLoading || !query.isSuccess) {
    return <>Loading...</>;
  }

  const { data } = query;

  console.log(query.data);

  return (
    <>
      <h1>External API</h1>
      <div>{data.category.toString()}</div>
      <div>{helloExample?.greeting}</div>
    </>
  );
};

export default ExternalApi;
