import React, { Component } from "react";
import { HiTranslate } from "react-icons/hi";
import { RadialBarChart, PolarAngleAxis, RadialBar, Legend } from "recharts";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";

interface RadialChartProps {
  type: string;
}

const RadialChart = (props: RadialChartProps) => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  // TODO: lage denne sirkulær i riktig størrelse
  if (!isSuccess || isLoading) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const listOfExercises = [
    ...learnerAnalytics.activityAnalytics.challenges,
    ...learnerAnalytics.activityAnalytics.examples,
    ...learnerAnalytics.activityAnalytics.coding,
  ];

  const codingDone = listOfExercises.filter(
    (e: Activity) => "CODING" === e.type && e.successRate > 0
  ).length;
  const allCoding = listOfExercises.filter(
    (e: Activity) => "CODING" === e.type
  ).length;
  const challengesDone = listOfExercises.filter(
    (e: Activity) => "CHALLENGE" === e.type && e.successRate > 0
  ).length;
  const allChallenges = listOfExercises.filter(
    (e: Activity) => "CHALLENGE" === e.type
  ).length;
  const examplesDone = listOfExercises.filter(
    (e: Activity) => "EXAMPLE" === e.type && e.attempts > 0
  ).length;
  const allExamples = listOfExercises.filter(
    (e: Activity) => "EXAMPLE" === e.type
  ).length;

  const data = [
    { name: "Coding", x: 1, fill: "#DE5B7E", uv: codingDone / allCoding },

    {
      name: "Challenges",
      x: 2,
      fill: "#988efe",
      uv: challengesDone / allChallenges,
    },

    { name: "Examples", x: 3, fill: "#0de890", uv: examplesDone / allExamples },
  ];

  const style = {
    top: 50,
    left: 300,
    lineHeight: "24px",
  };

  return (
    <RadialBarChart
      width={300}
      height={300}
      data={data}
      // cx={30 / 2}
      // cy={30 / 2}
      innerRadius={25}
      // outerRadius={18}
      barSize={15}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar background dataKey="uv" cornerRadius={30 / 2} fill="#0BEFF2" />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
};

export default RadialChart;
