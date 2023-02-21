import { NextPage } from "next/types";
import CourseCard from "../../components/CourseCard";
import SelectedComponentsContainer from "../../components/SelectedComponentsContainer";
import { api } from "../../utils/api";

const Dashboard: NextPage = () => {
  const {
    data: userPreferences,
    isSuccess: selectedSuccess,
    isLoading: selectedLoading,
  } = api.userRouter.getUserPreferences.useQuery();

  if (!selectedSuccess || selectedLoading) {
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

  return (
    <div>
      <div className="background-color mr-4 grid h-screen grid-cols-2 rounded-r-lg p-16 ">
        <div className="flex flex-col">
          <div className="text-color mb-4 text-xl font-semibold uppercase opacity-75">
            My courses
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <CourseCard courseName="java" />
            </div>
            <div className="flex">
              <SelectedComponentsContainer
                selected={userPreferences.selectedComponents}
                leaderboard={userPreferences.leaderboard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
