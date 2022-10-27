import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useTheme } from "next-themes";
import { trpc } from "../utils/trpc";

const DonutChart = () => {
  const { theme } = useTheme();
  const [size, setSize] = useState(270);

  const [hovered, setHovered] = useState<number | undefined>(undefined);

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
    return learnerAnalytics.topicAnalytics.map((e) => e.overallProgress).reduce((acc, val) => { return acc + val *100;},0 );
  };

  const data = [
    {
      title: "To go",
      value: `${overallProgress()}`,

      color: `${theme == "dark" ? "#f97316" : "#60a5fa"}`,
    },
  ];

  

  return (
    <>
      <PieChart
        data={data}
        totalValue={100}
        background="#d1d5db"
        startAngle={size}
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
        onMouseOver={(_, index) => {
          setHovered(index);
          setSize(272);
        }}
        onMouseOut={() => {
          setHovered(undefined);
          setSize(270);
        }}
      />
    </>
  );
};

export default DonutChart;
