import { ActivityResource, ExerciseHistory } from ".prisma/client";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useSession } from "next-auth/react";
import React from "react";
import { Line } from "react-chartjs-2";

const HistoryGraphPreview = () => {
  const history: (ExerciseHistory & {
    ActivityResource: ActivityResource;
  })[] = [
    {
      historyId: "mock",
      completedAt: new Date("2023-03-01"),
      visitedAt: new Date("2023-03-01"),
      userId: "mock",
      attempts: 1,
      activityResourceId: "mock",
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
    {
      historyId: "mock",
      completedAt: new Date("2023-03-02"),
      visitedAt: new Date("2023-03-02"),
      userId: "mock",
      attempts: 2,
      activityResourceId: "mock",
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
    {
      historyId: "mock",
      completedAt: new Date("2023-03-02"),
      visitedAt: new Date("2023-03-02"),
      userId: "mock",
      attempts: 3,
      activityResourceId: "mock",
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
  ];

  const grouped = history.reduce((acc: any, curr: any) => {
    const date = new Date(curr.completedAt).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date]?.push(curr);
    return acc;
  }, {} as { [key: string]: Array<ExerciseHistory & { ActivityResource: ActivityResource }> });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Your activity history",
      },
    },
  };

  const labels = Object.keys(grouped);
  const dataPoints: Array<
    ExerciseHistory & { ActivityResource: ActivityResource }
  >[] = Object.values(grouped);

  const data = {
    labels,
    datasets: [
      {
        label: "Java",
        data: dataPoints.map((d) => d.length),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="course-card rounded-lg p-4">
      {history && history.length > 0 ? (
        <Line options={options} data={data} />
      ) : (
        <div>
          You exercise history will show here once you have completed your first
          task
        </div>
      )}
    </div>
  );
};

export default HistoryGraphPreview;
