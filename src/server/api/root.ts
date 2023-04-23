import { createTRPCRouter } from "~/server/api/trpc";
import { golfCourseRouter } from "./routers/golfCourseRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  createGolfCourse: golfCourseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
