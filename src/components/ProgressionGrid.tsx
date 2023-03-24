import { useSession } from "next-auth/react";
import { useState } from "react";
import { useUpdateExerciseHistory } from "../hooks/useUpdateExerciseHistory";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";

interface ProgressionGridInterface {
  currentPage?: string;
}
const ProgressionGrid = (props: ProgressionGridInterface) => {
  const { data: session, status } = useSession();
  const [isShowing, setIsShowing] = useState<Activity | null>();

  const handleHover = (child: Activity) => {
    setIsShowing(child);
  };

  const {
    data: modules,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();
  const [selectedActivity, setSelectedActivity] = useState<string | undefined>(
    undefined
  );

  useUpdateExerciseHistory(modules, selectedActivity);

  const addExerciseHistoryMutation =
    api.userRouter.addExerciseHistoryToUser.useMutation();

  if (isLoading || !isSuccess) return <div>Loading..</div>;

  if (status === "unauthenticated" || !session?.user) {
    return <div>Unauthorized</div>;
  }

  const boxStyling =
    "w-10 h-10 items-center rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out";

  return (
    <div className=" w-1/2 space-y-1">
      <div className="flex flex-row items-center justify-end space-x-2 pb-4 pr-4">
        <div className="green-color h-4 w-4 items-center rounded-md"></div>
        <p className="text-sm">Finished</p>
        <div className="lighter-green-color h-4 w-4 items-center rounded-md"></div>
        <p className="text-sm">Started</p>
        <div className="h-4 w-4 items-center rounded-md bg-gray-200 dark:bg-[#404143]"></div>
        <p className="text-sm">To do</p>
      </div>
      <div className="grid-auto-cols grid grid-cols-5 gap-1">
        <div className="col-span-2 col-start-1 row-start-1 mr-4 flex flex items-center items-center justify-end gap-6 gap-6">
          <p className="text-color text-end text-sm font-semibold uppercase">
            Examples
          </p>
        </div>
        <div className="col-start-3 row-start-1 flex flex-row space-x-1">
          {modules.activityAnalytics.examples
            .filter((e) => e.relatedTopic == props.currentPage)
            .map((item) => (
              <a
                target="_blank"
                href={
                  item.url +
                  "&usr=" +
                  session.user?.protusId +
                  "&grp=NorwayFall2022B&sid=TEST&cid=352"
                }
                onClick={() => {
                  setSelectedActivity(item.activityId);
                  addExerciseHistoryMutation.mutate({
                    activityId: item.activityId,
                  });
                }}
                rel="noreferrer"
                key={item.activityId}
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.visited
                      ? "green-color"
                      : !item.visited && item.attempts > 0
                      ? "lighter-green-color"
                      : "bg-gray-200 dark:bg-[#404143]"
                  } `}
                >
                  {isShowing?.activityName === item.activityName && (
                    <div className="background-color absolute bottom-10 z-10 inline-block w-36 rounded-lg border border-gray-200 text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-500 dark:text-gray-200">
                      <div className="px-3 py-2">
                        <p>{item.activityName}</p>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            ))}
        </div>

        <div className="col-span-2 col-start-1 row-start-2 mr-4 flex items-center justify-end gap-6">
          <p className="text-color text-end text-sm font-semibold uppercase">
            Challenges
          </p>
        </div>
        <div className=" col-start-3 row-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.challenges
            .filter((e) => e.relatedTopic == props.currentPage)
            .map((item) => (
              <a
                target="_blank"
                href={
                  item.url +
                  "&usr=" +
                  session.user?.protusId +
                  "&grp=NorwayFall2022B&sid=TEST&cid=352"
                }
                onClick={() => {
                  setSelectedActivity(item.activityId);
                  addExerciseHistoryMutation.mutate({
                    activityId: item.activityId,
                  });
                }}
                rel="noreferrer"
                key={item.activityId}
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.successRate > 0
                      ? "green-color"
                      : item.successRate === 0 && item.attempts > 0
                      ? "lighter-green-color"
                      : "bg-gray-200 dark:bg-[#404143]"
                  } `}
                >
                  {isShowing?.activityName === item.activityName && (
                    <div className="background-color absolute bottom-10 z-10 inline-block w-36 rounded-lg border border-gray-200 text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-500 dark:text-gray-200">
                      <div className="px-3 py-2">
                        <p>{item.activityName}</p>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            ))}
        </div>

        <div className="col-span-2 col-start-1 row-start-3 mr-4 flex items-center justify-end gap-6">
          <p className="text-color text-end text-sm font-semibold uppercase ">
            Coding exercises
          </p>
        </div>
        <div className="col-start-3 row-start-3 flex flex-row space-x-1">
          {modules.activityAnalytics.coding
            .filter((e) => e.relatedTopic == props.currentPage)
            .map((item) => (
              <a
                target="_blank"
                href={
                  item.url +
                  "&usr=" +
                  session.user?.protusId +
                  "&grp=NorwayFall2022B&sid=TEST&cid=352"
                }
                onClick={() => {
                  setSelectedActivity(item.activityId);
                  addExerciseHistoryMutation.mutate({
                    activityId: item.activityId,
                  });
                }}
                rel="noreferrer"
                key={item.activityId}
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.successRate > 0
                      ? "green-color"
                      : item.successRate === 0 && item.attempts > 0
                      ? "lighter-green-color"
                      : "bg-gray-200 dark:bg-[#404143]"
                  } `}
                >
                  {isShowing?.activityName === item.activityName && (
                    <div className="background-color absolute bottom-10 z-10 inline-block w-36 rounded-lg border border-gray-200 text-sm text-gray-500 shadow-sm transition-opacity duration-300 dark:border-gray-500 dark:text-gray-200">
                      <div className="px-3 py-2">
                        <p>{item.activityName}</p>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );

  // TODO: hover -> se navn, onclick -> gå til oppgaven, forklaring på farger, grid cols må settes til antall maks oppgaver, style darkmode
};

export default ProgressionGrid;
