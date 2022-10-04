import { useQuery } from "react-query";
import { z } from "zod";
import { trpc } from "../../utils/trpc";
import type { AppRouter } from "../../server/router";
import { createTRPCClient } from "@trpc/client";
import { stringify } from "superjson";

const ExternalApi = () => {
  const client = createTRPCClient<AppRouter>({
    url: "/api/trpc",
  });

  const handleApi = () => {
    client.query("example.getLearnerActivity").then((res) => {
      console.log(res);
    });
    //client.query("example.external-api").then((res) => console.log(res));
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={handleApi}>Click</button>
    </>
  );
};

export default ExternalApi;
