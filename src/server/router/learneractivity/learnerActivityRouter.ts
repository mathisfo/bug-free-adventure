import { z } from "zod";
import { createRouter } from "../context";
import { toJson } from "really-relaxed-json";
import { learnerActivitySchema } from "../../schema/LearnerActivitySchema";
import { reMapLearnerActivityUtil } from "../../bff/learnerActivityUtil";

const options = {
  method: "GET",
  headers: new Headers({ "content-type": "application/json;charset=utf-8" }),
};

const externalAPIURL =
  "http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?usr=norway22169&grp=NorwayFall2022B&mod=user&sid=TEST&cid=352&lastActivityId=while_loops.j_digits&res=-1";

export const learnerActivityRouter = createRouter()
  .query("getLearnerActivity", {
    async resolve({ctx}) {
      const unfilteredAPI = await fetch(externalAPIURL, options)
        .then((response) => response.text())
        .then((text) => toJson(text))
        .then((j) => JSON.parse(j));

      const activityResources = ctx.prisma.activityResource.findMany({
        select: {
          id: true,
          
        }
      })

      const api = reMapLearnerActivityUtil(unfilteredAPI);

      return learnerActivitySchema.parse(api);
    },
  });
