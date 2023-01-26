import ContinueCard from "../../components/ContinueCard";
import CourseStatus from "../../components/CourseStatus";
import DonutChart from "../../components/DonutChart";
import TopMenu from "../../components/Breadcrumbs";
import { api } from "../../utils/api";
import { useSession } from "next-auth/react";

const Courses = () => {
  const { data: session, status } = useSession();

  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>;
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
      <TopMenu currentPage={""} currentType={""} />
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-14">
        <div className="mb-24 flex flex-row">
          <div className="w-3/5 ">
            <ContinueCard
              recommendedActivities={[
                ...activities.challenges,
                ...activities.coding,
                ...activities.examples,
              ].filter((e) => e.sequencing > 0)}
            />
          </div>

          <div className="w-2/5 items-center px-20">
            <DonutChart
              size="176px"
              bg="#d1d5db"
              fillColor="#60a5fa"
              fillColorDark="#11E64A"
              progress={overallProgress()}
            />
          </div>
        </div>
        <CourseStatus />
        <div className="background-color h-32"></div>
      </div>
    </div>
  );
};

export default Courses;
