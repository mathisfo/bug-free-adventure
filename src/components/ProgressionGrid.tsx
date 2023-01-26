import { useSession } from "next-auth/react";
import { useState } from "react";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";

interface ProgressionGridInterface {
  currentPage?: string;
}
const ProgressionGrid = (props: ProgressionGridInterface) => {
  const { data: session, status } = useSession();
  const [isShowing, setIsShowing] = useState<Activity | null>();
  console.log("SHOW", isShowing);

  const handleHover = (child: Activity) => {
    setIsShowing(child);
  };

  const {
    data: modules,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  if (isLoading || !isSuccess) return <div>Loading..</div>;

  if (status === "unauthenticated" || !session?.user) {
    return <div>Unauthorized</div>;
  }

  const boxStyling =
    "w-10 h-10 items-center rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out";

  return (
    <div className="mt-12 grid grid-cols-2 space-y-1">
      <div className="row-start-1 flex flex-row items-center space-x-2 justify-self-end pb-4 pr-4">
        <div className="h-4 w-4 items-center rounded-md bg-green-400 dark:bg-green-500"></div>
        <p className="text-sm">Finished</p>
        <div className="h-4 w-4 items-center rounded-md bg-green-200 dark:bg-green-300"></div>
        <p className="text-sm">Started</p>
        <div className="h-4 w-4 items-center rounded-md bg-gray-200 dark:bg-[#3F485F]"></div>
        <p className="text-sm">To do</p>
      </div>
      <div className="row-start-2 flex items-center gap-6">
        <p className="text-color col-start-1 w-24 text-end text-sm font-semibold uppercase">
          Examples
        </p>
        <div className="col-start-2 flex flex-row space-x-1">
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
                rel="noreferrer"
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.attempts > 0
                      ? "bg-green-400 dark:bg-green-500"
                      : item.successRate === 0 && item.visited
                      ? "bg-green-200 dark:bg-green-300"
                      : "bg-gray-200 dark:bg-[#3F485F]"
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
      <div className="row-start-3 flex  items-center gap-6">
        <p className="text-color col-start-1 w-24 text-end text-sm font-semibold uppercase">
          Challenges
        </p>
        <div className=" col-start-2 flex flex-row space-x-1">
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
                rel="noreferrer"
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.successRate > 0
                      ? "bg-green-400 dark:bg-green-500"
                      : item.successRate === 0 && item.attempts > 0
                      ? "bg-green-200 dark:bg-green-300"
                      : "bg-gray-200 dark:bg-[#3F485F]"
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
      <div className="row-start-4  flex items-center gap-6">
        <p className="text-color col-start-1 w-24 text-end text-sm font-semibold uppercase">
          Coding
        </p>
        <div className="col-start-2 flex flex-row space-x-1">
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
                rel="noreferrer"
              >
                <div
                  key={item.activityName}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => setIsShowing(null)}
                  className={`${boxStyling} ${
                    item.successRate > 0
                      ? "bg-green-400 dark:bg-green-500"
                      : item.successRate === 0 && item.attempts > 0
                      ? "bg-green-200 dark:bg-green-300"
                      : "bg-gray-200 dark:bg-[#3F485F]"
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
