import { toJson } from "really-relaxed-json";
import { reMapLearnerActivityUtil } from "../../bff/learnerActivityUtil";
import {
  learnerActivitySchema,
  LearnerAnalyticsAPIResponse,
} from "../../schema/LearnerActivitySchema";
import { createTRPCRouter, publicProcedure } from "../trpc";

const options = {
  method: "GET",
  headers: new Headers({ "content-type": "application/json;charset=utf-8" }),
};

const externalAPIURL =
  "http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=norway22169&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1";

export const learnerActivityRouter = createTRPCRouter({
  getLearnerActivity: publicProcedure.query(async ({ ctx }) => {
    const unfilteredAPI = await fetch(externalAPIURL, options)
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
