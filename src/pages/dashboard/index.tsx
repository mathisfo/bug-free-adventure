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
    return <div></div>;
  }

  return (
    <div>
      <div className="background-color grid h-screen rounded-r-lg p-16 ">
        <SelectedComponentsContainer
          selected={userPreferences.selectedComponents}
          leaderboard={userPreferences.leaderboard}
        />
      </div>
    </div>
  );
};

export default Dashboard;
