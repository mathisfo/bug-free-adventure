import CourseStatus from "../../components/CourseStatus";
import SelectedComponentsSubmitter from "../../components/onboarding/SelectedComponentSubmitter";

const Settings = () => {
  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-16 ">
        <p className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
          My chosen components
        </p>
        <div>
          <div className="mt-5 grid w-4/5 select-none grid-cols-2 gap-x-8 gap-y-4">
            <SelectedComponentsSubmitter
              name="History Graph"
              info="This component shows you how much you work per day
                      reprented as a graph."
            />
            <SelectedComponentsSubmitter
              name="TODO List"
              info="This component enables you to keep track of your
                      assignments with due dates."
            />
            <SelectedComponentsSubmitter
              name="Activity History"
              info="This component is more detailed than Activity Graph. It
                      shows your exercise activty per day, as a list."
            />
          </div>
        </div>
        <p className="text-color mb-6 mt-8 text-xl font-semibold uppercase opacity-75">
          Leaderboard participation
        </p>
        <div className="mt-5 grid w-4/5 select-none grid-cols-2 gap-x-8 gap-y-4">
          <SelectedComponentsSubmitter
            name="Leaderboard"
            info="By participating in the leaderboard you can compete against your
                classmates to see who completes the most exercises. Your
                nickname will show up on the leaderboard."
          />
        </div>
        <div className="flex flex-row justify-end">
          <input
            className="mt-4 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value={"Save changes"}
          />
        </div>
        <div className="background-color h-16"></div>
      </div>
    </div>
  );
};

export default Settings;
