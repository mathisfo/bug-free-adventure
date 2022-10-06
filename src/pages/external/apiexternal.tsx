import { useQuery } from "react-query";
import { any, z } from "zod";
import { trpc } from "../../utils/trpc";
import type { AppRouter } from "../../server/router";
import { createTRPCClient } from "@trpc/client";
import { stringify } from "superjson";

const ExternalApi = () => {
  const { data: results, isSuccess } = trpc.useQuery([
    "learneractivity.getLearnerActivity",
  ]);

  const { data: joke, isSuccess: jokeSuccess } = trpc.useQuery([
    "example.joke",
  ]);

  if (!isSuccess) {
    <p>Loading..</p>;
  }

  if (!jokeSuccess) {
    <p>Loading..</p>;
  }

  console.table(results);

  return (
    <>
      <h1>External API</h1>
      <div>{joke?.joke}</div>
      <div>{results?.lastActivityId}</div>
    </>
  );
};

export default ExternalApi;
