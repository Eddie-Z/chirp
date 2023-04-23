
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const golfCourseRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.golfScorecard.findMany();
  }),
});
