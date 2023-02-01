import { useTheme } from "next-themes";
import { PieChart } from "react-minimal-pie-chart";
import { api } from "../utils/api";

const DonutChart = ({
  size,
  bg,
  fillColor,
  progress,
}: {
  size: string;
  bg: string;
  fillColor: string;
  progress: number;
}) => {
  const { theme } = useTheme();
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  if (!isSuccess || isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="spinner-border loading-spinner inline-block h-44 w-44 animate-spin rounded-full border-8"
          role="status"
        ></div>
      </div>
    );
  }

  const data: any = [
    {
      title: "To go",
      value: `${Math.round(progress)}`,

      color: `${fillColor}`,
    },
  ];

  return (
    <>
      <PieChart
        data={data}
        totalValue={100}
        background={bg}
        startAngle={270}
        style={{ height: size }}
        rounded
        lineWidth={25}
        label={({ dataEntry }) => dataEntry.value + "%"}
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: "18px",
          fontFamily: "sans-serif",
        })}
        labelPosition={0}
        animate
      />
    </>
  );
};

export default DonutChart;
