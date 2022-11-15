import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useTheme } from "next-themes";
import { trpc } from "../utils/trpc";

const DonutChart = () => {
  const { theme } = useTheme();
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (!isSuccess || isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="spinner-border loading-spinner inline-block h-44 w-44 animate-spin rounded-full border-4"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const overallProgress = () => {
    return learnerAnalytics.moduleanalytics
      .map((e) => e.overallProgress)
      .reduce((acc, val) => {
        return acc + (val / learnerAnalytics.moduleanalytics.length) * 100;
      }, 0);
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
        lineWidth={25}
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
