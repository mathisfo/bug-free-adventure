import { Checkbox } from "flowbite-react";
import { NextPage } from "next";
import ExercisePlannerPreview from "../../components/previews/ExercisePlannerPreview";

const Settings: NextPage = () => {
  return (
    <div>
      <div className="background-color col-span-4 mr-4 h-screen rounded-r-lg p-16 ">
        <p className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
          My chosen components
        </p>
        <div>
          <div className="mt-5 grid w-4/5 select-none grid-cols-2 gap-x-8 gap-y-4">
            <div className="course-card relative grid grid-cols-2 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
              <div className="col-start-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  History Graph
                </h5>

                <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
                  This component shows you how much you work per day reprented
                  as a graph.
                </p>
                <div className="my-8 ml-4 flex items-center gap-2 ">
                  <Checkbox id="select" />
                  <label htmlFor="select">Select</label>
                </div>
              </div>
              <div className="col-start-2 grid items-center ">
                <div className=" h-32 w-32 self-center rounded bg-blue-200"></div>
              </div>
            </div>
            <div className="course-card relative grid grid-cols-2 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
              <div className="col-start-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Exercise Planner
                </h5>

                <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
                  This component enables you to keep track of your assignments
                  with due dates.
                </p>
                <div className="my-8 ml-4 flex items-center gap-2 ">
                  <Checkbox id="select" />
                  <label htmlFor="select">Select</label>
                </div>
              </div>
              <div className="col-start-2 grid items-center ">
                <div className=" h-32 w-32 self-center rounded bg-blue-200"></div>
              </div>
            </div>
            <div className="course-card relative grid grid-cols-2 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
              <div className="col-start-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Activity History
                </h5>

                <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
                  This component is more detailed than Activity Graph. It shows
                  your exercise activty per day, as a list.
                </p>
                <div className="my-8 ml-4 flex items-center gap-2 ">
                  <Checkbox id="select" />
                  <label htmlFor="select">Select</label>
                </div>
              </div>
              <div className="col-start-2 grid items-center ">
                <ExercisePlannerPreview />
              </div>
            </div>
          </div>
        </div>
        <p className="text-color mb-6 mt-8 text-xl font-semibold uppercase opacity-75">
          Leaderboard participation
        </p>
        <div className="mt-5 grid w-4/5 select-none grid-cols-2 gap-x-8 gap-y-4">
          <div className="course-card relative grid grid-cols-2 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <div className="col-start-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Leaderboard
              </h5>

              <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
                By participating in the leaderboard you can compete against your
                classmates to see who completes the most exercises. Your
                nickname will show up on the leaderboard.
              </p>
              <div className="my-8 ml-4 flex items-center gap-2 ">
                <Checkbox id="select" />
                <label htmlFor="select">Select</label>
              </div>
            </div>
            <div className="col-start-2 grid items-center ">
              <div className=" h-32 w-32 self-center rounded bg-blue-200"></div>
            </div>
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
