import ContinueCard from "../../components/ContinueCard";
import CourseStatus from "../../components/CourseStatus";
import DonutChart from "../../components/DonutChart";
import { api } from "../../utils/api";
import Breadcrumbs from "../../components/Breadcrumbs";

const Courses = () => {
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

  const overallProgress = () => {
    return learnerAnalytics.moduleAnalytics
      .map((e) => e.overallProgress)
      .reduce((acc, val) => {
        return acc + (val / learnerAnalytics.moduleAnalytics.length) * 100;
      }, 0);
  };

  return (
    <div>
      <Breadcrumbs currentPage={""} currentType={""} />
      <div className="background-color mr-4 h-screen p-14">
        <div className="mb-24 flex flex-row">
          <div className="w-3/5 ">
            <ContinueCard
              recommendedActivities={[
                ...activities.challenges,
                ...activities.coding,
                ...activities.examples,
              ].filter((e) => e.sequencing > 0 && e.successRate > 0)}
            />
          </div>

          <div className="w-2/5 items-center px-20">
            <DonutChart
              size="176px"
              bg="#d1d5db"
              fillColor="#988efe"
              progress={overallProgress()}
            ></DonutChart>
          </div>
        </div>
        <CourseStatus />
        <div className="background-color h-32"></div>
      </div>
    </div>
  );
};

export default Courses;
