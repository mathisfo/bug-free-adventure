export type LearnerActivityBFFApi= {
    learner: {
        id: string | undefined,
        name: string,
        lastActivityId: string,
    },
    topicanalytics: Array<Topic>
}

export type Topic ={
    name: string,
    progress: Progress,
    sequencing: Sequencing,
    overallProgress: string,
}

export type Progress = {
    examples: string,
    challenges: string,
    coding: string,
};

export type Sequencing = {
    examples: string,
    challenges: string,
    coding: string,
}