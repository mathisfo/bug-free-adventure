import { NextPage } from "next/types";
import Assignments from "../../components/Assignments";
import CourseCard from "../../components/CourseCard";
import ExerciseHistory from "../../components/home/ExerciseHistory";
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

  const courses = [
    {
      course: "Java",
      progress: 45,
      completedTasks: 7,
      allTasks: 23,
      bg: "course-card",
      iconColor: "bg-blue-400",
    },
  ];

  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-16 ">
        <div className="text-color mb-4 text-xl font-semibold uppercase opacity-75">
          My courses
        </div>
        <div className="flex flex-row">
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.course}
                course={course.course}
                progress={course.progress}
                completedTasks={course.completedTasks}
                allTasks={course.allTasks}
              ></CourseCard>
            );
          })}
        </div>
        <div className="text-color mt-8 mb-4 text-lg font-semibold">
          History
        </div>
        <ExerciseHistory />
      </div>
    </div>
  );
};

export default Dashboard;
