import { z } from "zod";
import { createRouter } from "../context";
import { toJson } from "really-relaxed-json";
import {
  learnerActivitySchema,
  LearnerAnalyticsAPIResponse,
} from "../../schema/LearnerActivitySchema";
import { reMapLearnerActivityUtil } from "../../bff/learnerActivityUtil";
import { prisma } from "@prisma/client";

const options = {
  method: "GET",
  headers: new Headers({ "content-type": "application/json;charset=utf-8" }),
};

const externalAPIURL =
  "http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=norway22169&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1";

export const learnerActivityRouter = createRouter().query(
  "getLearnerActivity",
  {
    async resolve({ ctx }) {
      const unfilteredAPI = await fetch(externalAPIURL, options)
        .then((response) => response.text())
        .then((text) => toJson(text))
        .then((j) => JSON.parse(j));

      const activityResources = await ctx.prisma.activityResource.findMany({
        select: {
          activityId: true,
          name: true,
        },
      });

      const api = reMapLearnerActivityUtil(
        unfilteredAPI,
        activityResources
      ) as LearnerAnalyticsAPIResponse;

      console.log("API", api);

      for (const activity of api.activityAnalytics.challenges) {
        const name = activityResources.find((ac) => {
          ac.activityId === activity.activityId;
        })?.name;
        activity.activityName === name;
      }

      for (const activity of api.activityAnalytics.coding) {
        const name = activityResources.find((ac) => {
          ac.activityId === activity.activityId;
        })?.name;
        activity.activityName === name;
      }

      for (const activity of api.activityAnalytics.examples) {
        const name = activityResources.find((ac) => {
          ac.activityId === activity.activityId;
        })?.name;
        activity.activityName === name;
      }

      return learnerActivitySchema.parse(api);
    },
  }
);
