// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { learnerActivityRouter } from './learneractivity/learnerActivityRouter';
import { activitiesRouter } from './activities-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("learneractivity.", learnerActivityRouter)
  .merge("activities.", activitiesRouter);



// export type definition of API
export type AppRouter = typeof appRouter;
