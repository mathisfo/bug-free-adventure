import { PieChart } from "react-minimal-pie-chart";

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
