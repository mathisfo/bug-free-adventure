import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useTheme } from "next-themes";
import { trpc } from "../utils/trpc";
import { trpc } from "../utils/trpc";

const DonutChart = () => {
  const { theme } = useTheme();
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (!isSuccess || isLoading) {
    return <div className="flex justify-center items-center">
    <div className="spinner-border animate-spin inline-block w-44 h-44 border-4 loading-spinner rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
  }

  const overallProgress = () => {
    return learnerAnalytics.topicAnalytics.map((e) => e.overallProgress).reduce((acc, val) => { return acc + val / learnerAnalytics.topicAnalytics.length *100;},0 );
  };

  const data: any = [
    {
      title: "To go",
      value: `${Math.round(overallProgress())}`,

      color: `${theme == "dark" ? "#f97316" : "#60a5fa"}`,
    },
  ];

  

  return (
    <>
      <PieChart
        data={data}
        totalValue={100}
        background="#d1d5db"
        startAngle={270}
        style={{ height: "176px" }}
        rounded
        lineWidth= {25}
        label={({ dataEntry }) => dataEntry.value + "%"}
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: "14px",
          fontFamily: "sans-serif",
        })}
        labelPosition={0}
        animate

      />
    </>
  );
};

export default DonutChart;
