import CourseStatus2 from "../../components/CourseStatus2";
import Leaderboard from "../../components/Leaderboard";
import ToDoComp from "../../components/todo/ToDoComp";

const Settings = () => {
  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-full rounded-r-lg p-16 ">
        <div className="text-color mb-4 text-xl font-semibold ">Settings</div>
        <div className="grid gap-x-8 md:grid-cols-1">
          <CourseStatus2 />
        </div>
      </div>
    </div>
  );
};

export default Settings;
