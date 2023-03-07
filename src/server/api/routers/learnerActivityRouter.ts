import { Prisma, PrismaClient, type, User } from "@prisma/client";
import { toJson } from "really-relaxed-json";
import { z } from "zod";
import { reMapLearnerActivityUtil } from "../../bff/learnerActivityUtil";
import {
  learnerActivitySchema,
  LearnerAnalyticsAPIResponse,
} from "../../schema/LearnerActivitySchema";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const getLearnerActivity = async (prisma: PrismaClient, user: User) => {
  const externalAPIURL = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=${user.protusId}&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1`;

  const unfilteredAPI = await fetch(externalAPIURL)
    .then((response) => response.text())
    .then((text) => toJson(text))
    .then((j) => JSON.parse(j));

  const activityResources = await prisma.activityResource.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      relation: {
        select: {
          description: true,
          moduleName: true,
        },
      },
    },
  });

  const api = reMapLearnerActivityUtil(
    unfilteredAPI,
    activityResources
  ) as LearnerAnalyticsAPIResponse;

  return learnerActivitySchema.parse(api);
};

export const learnerActivityRouter = createTRPCRouter({
  getActivityAnalytics: protectedProcedure.query(async ({ ctx }) => {
    const all = await getLearnerActivity(ctx.prisma, ctx.session.user);

    const activityAnalytics = [
      ...all.activityAnalytics.examples,
      ...all.activityAnalytics.challenges,
      ...all.activityAnalytics.coding,
    ];

    return activityAnalytics;
  }),

  getLearnerActivityOnUserAndType: protectedProcedure
    .input(z.object({ type: z.nativeEnum(type) }))
    .query(async ({ ctx, input }) => {
      const all = await getLearnerActivity(ctx.prisma, ctx.session.user);
      const allactivityAnalytics = [
        ...all.activityAnalytics.examples,
        ...all.activityAnalytics.challenges,
        ...all.activityAnalytics.coding,
      ];

      const activityAnalyticsOnType = allactivityAnalytics.filter(
        (activity) => activity.type === input.type
      );

      return activityAnalyticsOnType;
    }),
  getModuleAnalytics: protectedProcedure.query(async ({ ctx }) => {
    const all = await getLearnerActivity(ctx.prisma, ctx.session.user);

    return all.moduleAnalytics;
  }),
  getActivityAnalyticsOnTypeAndModule: protectedProcedure
    .input(z.object({ moduleName: z.string(), type: z.nativeEnum(type) }))
    .query(async ({ ctx, input }) => {
      const all = await getLearnerActivity(ctx.prisma, ctx.session.user);
      const allactivityAnalytics = [
        ...all.activityAnalytics.examples,
        ...all.activityAnalytics.challenges,
        ...all.activityAnalytics.coding,
      ];

      const activityAnalyticsOnType = allactivityAnalytics.filter(
        (activity) =>
          activity.type === input.type.toLowerCase() + "s" &&
          activity.relatedTopic === input.moduleName
      );

      return activityAnalyticsOnType;
    }),
  getProgress: protectedProcedure.query(async ({ ctx }) => {
    const all = await getLearnerActivity(ctx.prisma, ctx.session.user);

    const allActivites = [
      ...all.activityAnalytics.challenges,
      ...all.activityAnalytics.coding,
      ...all.activityAnalytics.examples,
    ];

    const progress = allActivites.map((act) => {
      const successChallenge = all.activityAnalytics.challenges.filter(
        (act) => act.relatedTopic === act.relatedTopic && act.successRate > 0
      ).length;

      const totalChallenge = all.activityAnalytics.challenges.filter(
        (act) => act.relatedTopic === act.relatedTopic
      ).length;

      const successCoding = all.activityAnalytics.coding.filter(
        (act) => act.relatedTopic === act.relatedTopic && act.successRate > 0
      ).length;

      const totalCoding = all.activityAnalytics.coding.filter(
        (act) => act.relatedTopic === act.relatedTopic
      ).length;
      const successExample = all.activityAnalytics.examples.filter(
        (act) => act.relatedTopic === act.relatedTopic && act.attempts > 0
      ).length;

      const totalExample = all.activityAnalytics.examples.filter(
        (act) => act.relatedTopic === act.relatedTopic
      ).length;

      const totalModule = totalChallenge + totalCoding + totalExample;
      const successModule = successChallenge + successCoding + successExample;

      return {
        moduleName: act.relatedTopic,

        successModule: successModule,
        totalModule: totalModule,

        successChallenge: successChallenge,
        totalChallenge: totalChallenge,

        successCoding: successCoding,
        totalCoding: totalCoding,

        successExample: successExample,
        totalExample: totalExample,
      };
    });

    return progress;
  }),
});
