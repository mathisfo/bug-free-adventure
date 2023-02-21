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
import { api } from "../utils/api";

const HistoryGraph = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const {
    data: history,
    isLoading,
    isSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery({
    userId: session.user.id,
  });

  if (isLoading || !isSuccess) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const grouped = history.reduce(
    (
      acc: {
        [x: string]: any[];
      },
      curr: { completedAt: string | number | Date }
    ) => {
      const date = new Date(curr.completedAt).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date]?.push(curr);
      return acc;
    },
    {} as { [key: string]: Array<ExerciseHistory & ActivityResource> }
  );

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

  const data = {
    labels,
    datasets: [
      {
        label: "Java",
        data: Object.entries(grouped).map((e) => e[1].length),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="course-card rounded-xl p-4">
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

export default HistoryGraph;
