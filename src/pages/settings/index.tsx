import { zodResolver } from "@hookform/resolvers/zod";
import { SelectedEnum } from "@prisma/client";
import { Checkbox } from "flowbite-react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiUser } from "react-icons/hi";
import ExerciseHistoryPreview from "../../components/previews/ExerciseHistoryPreview";
import ExercisePlannerPreview from "../../components/previews/ExercisePlannerPreview";
import HistoryGraphPreview from "../../components/previews/HistoryGraphPreview";
import LeaderboardPreview from "../../components/previews/LeaderboardPreview";
import StatsPreview from "../../components/previews/StatsPreview";
import {
  UserPreferenceForm,
  userPreferenceSchema,
} from "../../server/schema/UserSchema";
import { api } from "../../utils/api";

const Settings: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPreferenceForm>({
    resolver: zodResolver(userPreferenceSchema),
  });

  const [showName, setShowName] = useState(false);
  const mutation = api.userRouter.updateUserPreferences.useMutation();

  const router = useRouter();

  const ctx = api.useContext();

  const onSubmit: SubmitHandler<UserPreferenceForm> = (
    data: UserPreferenceForm
  ) => {
    console.log(data);
    mutation.mutate(data, {
      onSuccess: () => {
        ctx.invalidate();
        router.reload();
      },
    });
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="background-color col-span-4 mr-4 h-screen w-11/12 rounded-r-lg p-16 ">
      {Object.values(errors).map((error) => (
        <span>{error?.message}</span>
      ))}
      <h1 className="text-color mb-6 text-xl font-semibold uppercase opacity-75">
        My chosen components
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 grid select-none grid-cols-2 gap-x-8 gap-y-4 ">
          <div className="course-card relative h-auto grid-cols-1 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <p className="mb-2 text-2xl font-bold tracking-tight">
              Exercise Planner
            </p>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              This component enables you to keep track of your assignments with
              due dates.
            </p>
            <div className="mb-6 scale-90">
              <ExercisePlannerPreview />
            </div>
            <div className="absolute bottom-1 my-6 ml-4 flex items-center gap-2">
              <Checkbox
                {...register("newSelectedComponents")}
                id="select"
                value={SelectedEnum.TODO}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required={false}
              />

              <label htmlFor="select">Select</label>
            </div>
          </div>

          <div className="course-card relative rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
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
            <div className="absolute bottom-1 my-6 ml-4 flex items-center gap-2">
              <Checkbox
                {...register("newSelectedComponents")}
                id="select"
                value={SelectedEnum.HISTORYGRAPH}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required={false}
              />

              <label htmlFor="select">Select</label>
            </div>
          </div>
          <div className="course-card relative rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Stats</h5>

            <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
              This component shows you some stats about the work you have put in
              the previous week compared to the week before.
            </p>
            <div className="scale-90">
              <StatsPreview />
            </div>
            <div className="absolute bottom-1 my-6 ml-4 flex items-center gap-2 ">
              <Checkbox
                {...register("newSelectedComponents")}
                id="select"
                value={SelectedEnum.STATS}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required={false}
              />

              <label htmlFor="select">Select</label>
            </div>
          </div>

          <div className="course-card relative grid-cols-1 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Activity History
            </h5>

            <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
              This component is more detailed than Activity Graph. It shows your
              exercise activty per day, as a list.
            </p>
            <div className="mb-6 scale-90">
              <ExerciseHistoryPreview />
            </div>
            <div className="absolute bottom-1 my-6 ml-4 flex items-center gap-2 ">
              <Checkbox
                {...register("newSelectedComponents")}
                id="select"
                value={SelectedEnum.EXERCISEHISTORY}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required={false}
              />

              <label htmlFor="select">Select</label>
            </div>
          </div>
        </div>

        <p className="text-color mb-6 mt-8 text-xl font-semibold uppercase opacity-75">
          Leaderboard participation
        </p>
        <div className="course-card relative w-3/5 rounded-2xl border border-zinc-400 pl-6 pr-2 pt-6 dark:border-zinc-600">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            Leaderboard
          </h5>
          <div className="grid grid-cols-2 gap-2">
            <div className=" col-start-1 text-sm text-gray-700 dark:text-gray-400">
              I would like to participate in the leaderboard
              {showName && (
                <div className="">
                  <h2 className="text-md pt-4 font-medium leading-6">
                    Your nickname will be displayed publicly on the leaderboard.
                  </h2>
                  <label
                    htmlFor="name"
                    className="block pt-6 text-sm font-medium"
                  >
                    Nickname
                  </label>
                  <div className="mt-1 flex rounded-md">
                    <div className="flex w-1/5">
                      <span
                        className={classNames(
                          errors.name
                            ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                            : " border-zinc-300 bg-zinc-200  text-gray-900 dark:border-zinc-600 dark:bg-zinc-700 dark:text-gray-400",
                          "inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm"
                        )}
                      >
                        <HiUser
                          className={
                            errors.name
                              ? " text-red-700"
                              : "text-gray-600 dark:text-gray-200"
                          }
                        />
                      </span>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className={classNames(
                          errors.name
                            ? "border-red-500 bg-red-50 p-2.5 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                            : "border-zinc-300 bg-gray-50 text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-600  dark:bg-zinc-800 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                          "block flex-1 rounded-none rounded-r-lg border p-2.5 text-sm"
                        )}
                        placeholder="Ola"
                        required={false}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-start-2 scale-90">
              <LeaderboardPreview />
            </div>
            <div className="absolute bottom-1 my-6 ml-4 flex items-center gap-2 ">
              <Checkbox
                onClick={() => setShowName(!showName)}
                {...register("leaderboard")}
                id="select"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required={false}
              />

              <label htmlFor="select">Select</label>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <input
            className=" rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value={
              mutation.isLoading
                ? "Loading.."
                : mutation.isSuccess
                ? "Success!"
                : "Submit"
            }
          />
        </div>
        <div className="background-color h-16"></div>
      </form>
    </div>
  );
};

export default Settings;
