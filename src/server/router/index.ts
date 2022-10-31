// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { learnerActivityRouter } from "./learneractivity/learnerActivityRouter";
import { courseRouter } from "./course/courseRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("learneractivity.", learnerActivityRouter)
  .merge("course.", courseRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
