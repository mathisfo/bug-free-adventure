import { courseRouter } from "./routers/courseRouter";
import { learnerActivityRouter } from "./routers/learnerActivityRouter";
import { userRouter } from "./routers/userRouter";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  courseRouter: courseRouter,
  learnerActivityRouter: learnerActivityRouter,
  userRouter: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
