import Leaderboard from "../../components/Leaderboard";
import ToDo from "../../components/todo/ToDo";

const Settings = () => {
  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-full rounded-r-lg p-16 ">
        <div className="text-color mb-4 text-xl font-semibold ">Settings</div>
        <div className="grid gap-x-8 md:grid-cols-2">
          <ToDo />
        </div>
      </div>
    </div>
  );
};

export default Settings;
