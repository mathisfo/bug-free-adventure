import { NextPage } from "next/types";
import Assignments from "../../components/Assignments";
import CourseCard from "../../components/CourseCard";
import ExerciseHistory from "../../components/home/ExerciseHistory";
import Leaderboard from "../../components/Leaderboard";
import { api } from "../../utils/api";

const Dashboard: NextPage = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  if (!isSuccess || isLoading) {
    return (
      <div className="mx-auto mt-32 w-4/5 rounded-md p-4">
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

  const activities = learnerAnalytics.activityAnalytics;

  return (
    <div>
      <div className="background-color mr-4 grid h-screen grid-cols-2 rounded-r-lg p-16 ">
        <div className="cols-start-1 row-start-1">
          <div className="text-color mb-4 text-xl font-semibold uppercase opacity-75">
            My courses
          </div>
          <div className="flex w-full flex-row">
            <CourseCard courseName="java" />
          </div>
        </div>
        <div className="cols-start-1 row-start-2">
          <div className="text-color mb-4 mt-16 text-xl font-semibold uppercase opacity-75">
            history
          </div>
          <ExerciseHistory />
        </div>
        <div className="cols-start-2 row-start-1">
          <div className="text-color mb-4 text-xl font-semibold uppercase opacity-75">
            leaderboard
          </div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
