import { toJson } from "really-relaxed-json";
import { activitiesSchema } from '../schema/ActivityResource';
import { createRouter } from "./context";


export const activitiesRouter = createRouter().query("getResources", {
  async resolve() {
    const res = await fetch(
      "http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?grp={{group}}&sid=TEST&cid=352&mod=all"
    )
      .then((response) => response.text())
      .then((text) => toJson(text))
      .then((j) => JSON.parse(j));

    return activitiesSchema.parse(res.topics);
  },
});
