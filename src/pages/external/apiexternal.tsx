import { useQuery } from "react-query";
import { any, z } from "zod";
import { trpc } from "../../utils/trpc";
import type { AppRouter } from "../../server/router";
import { createTRPCClient } from "@trpc/client";
import { stringify } from "superjson";

const ExternalApi = () => {
  const { data: results, isSuccess } = trpc.useQuery([
    "example.getLearnerActivity",
  ]);

  if (!isSuccess) {
    <p>Loading..</p>;
  }

  console.table(results);

  const foo = results.keys();

  return (
    <>
      <h1>External API</h1>
      <div>
        {foo.array.forEach((element: any) => {
          {
            element;
          }
        })}
      </div>
    </>
  );
};

export default ExternalApi;
