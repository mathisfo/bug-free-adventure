export type LearnerActivityBFFApi = {
  learner: {
    id: string | undefined;
    name: string;
    lastActivityId: string;
  };
  moduleanalytics: Array<Topic>;
  activityAnalytics: {
    examples: Array<Activity>;
    challenges: Array<Activity>;
    coding: Array<Activity>;
  };
};

export type Topic = {
  name: string;
  progress: Progress;
  sequencing: Sequencing;
  overallProgress: string;
};

export type Progress = {
  examples: string;
  challenges: string;
  coding: string;
};

export type Sequencing = {
  examples: string;
  challenges: string;
  coding: string;
};

export type Activity = {
  relatedTopic: string;
  activityName: string;
  visited: boolean;
  attempts: number;
  successRate: number;
  t: number;
  aSeq: string;
  sequencing: number;
  type: string;
};
