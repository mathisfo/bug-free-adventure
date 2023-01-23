import { Input } from "postcss";
import { toJson } from "really-relaxed-json";
import { URLSearchParams } from "url";
import { z } from "zod";
import { reMapLearnerActivityUtil } from "../../bff/learnerActivityUtil";
import {
  learnerActivitySchema,
  LearnerAnalyticsAPIResponse,
} from "../../schema/LearnerActivitySchema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const learnerActivityRouter = createTRPCRouter({
  getLearnerActivity: protectedProcedure.query(async ({ ctx }) => {
    const loggedinUser = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        protusId: true,
      },
    });

    const externalAPIURL = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=${loggedinUser?.protusId}&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1`;

    const unfilteredAPI = await fetch(externalAPIURL)
      .then((response) => response.text())
      .then((text) => toJson(text))
      .then((j) => JSON.parse(j));

    const activityResources = await ctx.prisma.activityResource.findMany({
      select: {
        activityId: true,
        name: true,
        url: true,
      },
    });

    const api = reMapLearnerActivityUtil(
      unfilteredAPI,
      activityResources
    ) as LearnerAnalyticsAPIResponse;

    return learnerActivitySchema.parse(api);
  }),
});
