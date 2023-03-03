import { Checkbox } from "flowbite-react";
import { NextPage } from "next";
import ExerciseHistoryPreview from "../../components/previews/ExerciseHistoryPreview";
import ExercisePlannerPreview from "../../components/previews/ExercisePlannerPreview";
import HistoryGraphPreview from "../../components/previews/HistoryGraphPreview";
import LeaderboardPreview from "../../components/previews/LeaderboardPreview";
import StatsPreview from "../../components/previews/StatsPreview";

const Settings: NextPage = () => {
  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-screen w-11/12 rounded-r-lg p-16 ">
        <p className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
          My chosen components
        </p>
        <div className="mt-5 grid select-none grid-cols-2 gap-x-8 gap-y-4">
          <div className="course-card h-auto grid-cols-1 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Exercise Planner
            </h5>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              This component enables you to keep track of your assignments with
              due dates.
            </p>
            <div className="scale-90">
              <ExercisePlannerPreview />
            </div>
          </div>

          <div className="course-card rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              History Graph
            </h5>

            <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
              This component shows you how much you work per day reprented as a
              graph.
            </p>
            <div className="scale-90">
              <HistoryGraphPreview />
            </div>
          </div>
          <div className="course-card rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Stats</h5>

            <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
              This component shows you some stats about the work you have put in
              the previous week compared to the week before.
            </p>
            <div className="scale-90">
              <StatsPreview />
            </div>
            <div className="col-start-2 grid items-center "></div>
          </div>

          <div className="course-card grid-cols-1 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Activity History
            </h5>

            <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
              This component is more detailed than Activity Graph. It shows your
              exercise activty per day, as a list.
            </p>
            <div className="scale-90">
              <ExerciseHistoryPreview />
            </div>
          </div>
        </div>

        <p className="text-color mb-6 mt-8 text-xl font-semibold uppercase opacity-75">
          Leaderboard participation
        </p>
        <div className="course-card w-3/5 rounded-2xl border border-zinc-400 pl-6 pr-2 pt-6 dark:border-zinc-600">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            Leaderboard
          </h5>
          <div className="grid grid-cols-2 gap-2">
            <div className=" col-start-1 text-sm text-gray-700 dark:text-gray-400">
              I would like to participate in the leaderboard
            </div>

            <div className="col-start-2 scale-90">
              <LeaderboardPreview />
            </div>
            <div className="col-start-1 row-start-2 my-6 flex items-center gap-2"></div>
          </div>
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
