import {
  LearnerActivityBFFApi,
  Progress,
  Sequencing,
} from "./types/LearnerActivityBFFApi";


export function reMapLearnerActivity(api: any) {

  const remapped: LearnerActivityBFFApi = {
    learner: {
      id: "",
      name: "",
      lastActivityId: "",
    },
    topicanalytics: [],
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

    remapped.topicanalytics.push(topicObj);
  }

  const j = JSON.stringify(remapped);

  return JSON.parse(j);
}
