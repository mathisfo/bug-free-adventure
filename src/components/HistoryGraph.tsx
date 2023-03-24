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
  } = api.userRouter.getExerciseHistoryOnUser.useQuery();

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

  function grouped(arr: typeof history): typeof history[] {
    if (!arr) {
      return [[]];
    }
    // Use reduce to create a map with completedAt dates as keys and arrays of objects as values
    const groupedMap = arr.reduce(
      (
        acc: Map<string, typeof history>,
        obj: ExerciseHistory & {
          ActivityResource: ActivityResource;
        }
      ) => {
        const dateKey = obj.completedAt!.toISOString().split("T")[0] as string; // Get only the date part of the completedAt field

        if (!acc.has(dateKey)) {
          acc.set(dateKey, []);
        }
        acc.get(dateKey)!.push(obj);
        return acc;
      },
      new Map<string, typeof history>()
    );

    // Convert the map values to an array of arrays
    const groupedArray = Array.from(groupedMap.values());

    return groupedArray as typeof history[];
  }

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

  const labels = grouped(history).map(
    (d) => d![0]?.completedAt?.toISOString().split("T")[0]
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Java",
        data: grouped(history).map((d) => d!.length),
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

export default HistoryGraph;
