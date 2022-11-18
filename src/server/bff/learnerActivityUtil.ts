import {
  LearnerActivityBFFApi,
  Progress,
  Sequencing
} from "./types/LearnerActivityBFFApi";

export function reMapLearnerActivityUtil(
  api: any,
  names: { name: string; activityId: string }[]
) {
  const remapped: LearnerActivityBFFApi = {
    learner: {
      id: "",
      name: "",
      lastActivityId: "",
    },
    moduleAnalytics: [],
    activityAnalytics: {
      examples: [],
      challenges: [],
      coding: [],
    },
  };

  const progress: Progress = {
    examples: "",
    challenges: "",
    coding: "",
  };

  const sequencing: Sequencing = {
    examples: "",
    challenges: "",
    coding: "",
  };

  remapped.learner.id = api.learner.id;
  remapped.learner.name = api.learner.name;
  remapped.learner.lastActivityId = api.lastActivityId;
  for (const key in api.learner.state.topics) {
    const topic = api.learner.state.topics[key];

    const topicObj = {
      name: topic,
      progress: progress,
      sequencing: sequencing,
      overallProgress: "",
    };

    topicObj.name = key;

    topicObj.progress = {
      examples: topic.values.Examples.p,
      challenges: topic.values.Challenges.p,
      coding: topic.values.Coding.p,
    };
    topicObj.sequencing = {
      examples: topic.sequencing.Examples,
      challenges: topic.sequencing.Challenges,
      coding: topic.sequencing.Coding,
    };

    topicObj.overallProgress = topic.overall.p;

    remapped.moduleAnalytics.push(topicObj);

    for (const type in api.learner.state.activities[key].Examples) {
      const activity = {
        relatedTopic: "",
        activityId: "",
        activityName: "heihei",
        visited: false,
        attempts: 0,
        successRate: 0,
        t: 0,
        aSeq: "",
        sequencing: 0.1,
        type: "",
      };
      activity.relatedTopic = key;
      activity.type = "example";
      activity.activityId = type;
      activity.activityName =
        names.find((e) => e.activityId === type)?.name ?? "Unnamed Activity";

      if (api.learner.state.activities[key].Examples[type].values.p == 1) {
        activity.visited = true;
      }
      activity.attempts =
        api.learner.state.activities[key].Examples[type].values.a;
      activity.successRate =
        api.learner.state.activities[key].Examples[type].values.s;
      activity.t = api.learner.state.activities[key].Examples[type].values.t;
      activity.aSeq =
        api.learner.state.activities[key].Examples[type].values.aSeq;
      activity.sequencing =
        api.learner.state.activities[key].Examples[type].sequencing;

      remapped.activityAnalytics.examples.push(activity);
    }

    for (const type in api.learner.state.activities[key].Challenges) {
      const activity = {
        relatedTopic: "",
        activityId: "",
        activityName: "heihei",
        visited: false,
        attempts: 0,
        successRate: 0,
        t: 0,
        aSeq: "",
        sequencing: 0.1,
        type: "",
      };

      activity.relatedTopic = key;
      activity.type = "challenge";
      activity.activityId = type;
      activity.activityName =
        names.find((e) => e.activityId === type)?.name ?? "Unamed Activity";

      if (api.learner.state.activities[key].Challenges[type].values.p == 1) {
        activity.visited = true;
      }
      activity.attempts =
        api.learner.state.activities[key].Challenges[type].values.a;
      activity.successRate =
        api.learner.state.activities[key].Challenges[type].values.s;
      activity.t = api.learner.state.activities[key].Challenges[type].values.t;
      activity.aSeq =
        api.learner.state.activities[key].Challenges[type].values.aSeq;
      activity.sequencing =
        api.learner.state.activities[key].Challenges[type].sequencing;

      remapped.activityAnalytics.challenges.push(activity);
    }

    for (const type in api.learner.state.activities[key].Coding) {
      const activity = {
        relatedTopic: "",
        activityId: "",
        activityName: "hei",
        visited: false,
        attempts: 0,
        successRate: 0,
        t: 0,
        aSeq: "",
        sequencing: 0.1,
        type: "",
      };
      activity.relatedTopic = key;
      activity.type = "coding";
      activity.activityId = type;
      activity.activityName =
        names.find((e) => e.activityId === type)?.name ?? "Unamed Activity";
      if (api.learner.state.activities[key].Coding[type].values.p == 1) {
        activity.visited = true;
      }
      activity.attempts =
        api.learner.state.activities[key].Coding[type].values.a;
      activity.successRate =
        api.learner.state.activities[key].Coding[type].values.s;
      activity.t = api.learner.state.activities[key].Coding[type].values.t;
      activity.aSeq =
        api.learner.state.activities[key].Coding[type].values.aSeq;
      activity.sequencing =
        api.learner.state.activities[key].Coding[type].sequencing;

      remapped.activityAnalytics.coding.push(activity);
    }
  }

  const j = JSON.stringify(remapped);

  return JSON.parse(j);
}
