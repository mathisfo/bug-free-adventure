import { useState } from "react";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { trpc } from "../utils/trpc";

const ProgressionGrid = () => {
  const [isShowing, setIsShowing] = useState<Activity | null>();
  console.log("SHOW", isShowing);

  const handleHover = (child: Activity) => {
    setIsShowing(child);
  };

  const {
    data: modules,
    isLoading,
    isSuccess,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (isLoading || !isSuccess) return <div>Loading..</div>;

  const boxStyling =
    "w-10 h-10 items-center rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out";


  return (
    <div className="mt-12 space-y-1 grid grid-cols-2">
        <div className="row-start-1 flex flex-row items-center space-x-2 pb-4 justify-self-end">
            <div className="w-4 h-4 items-center rounded-md bg-green-400 dark:bg-green-500"></div><p className="text-sm">Finished</p>
            <div className="w-4 h-4 items-center rounded-md bg-green-200 dark:bg-green-300"></div><p className="text-sm">Started</p>
            <div className="w-4 h-4 items-center rounded-md bg-gray-200 dark:bg-[#3F485F]"></div><p className="text-sm">To do</p>
      </div>
      <div className="row-start-2 flex items-center gap-6">
        <p className="w-24 col-start-1 text-end text-sm font-semibold uppercase text-color">
          Examples
        </p>
        <div className="col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.examples.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                  ? "bg-green-400 dark:bg-green-500"
                  : item.successRate === 0 && item.visited
                  ? "bg-green-200 dark:bg-green-300"
                  : "bg-gray-200 dark:bg-[#3F485F]"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 dark:border-gray-500 background-color text-sm text-gray-500 dark:text-gray-200 shadow-sm transition-opacity duration-300 w-36">
                    <div className="px-3 py-2">
                      <p>{item.activityName}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="row-start-3 flex  items-center gap-6">
        <p className="w-24 col-start-1 text-end text-sm font-semibold uppercase text-color">
          Coding
        </p>
        <div className=" col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.coding.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                  ? "bg-green-400 dark:bg-green-500"
                  : item.successRate === 0 && item.visited
                  ? "bg-green-200 dark:bg-green-300"
                  : "bg-gray-200 dark:bg-[#3F485F]"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 dark:border-gray-500 background-color text-sm text-gray-500 dark:text-gray-200 shadow-sm transition-opacity duration-300 w-36">
                    <div className="px-3 py-2">
                      <p>{item.activityName}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="row-start-4  flex items-center gap-6">
        <p className="w-24 col-start-1 text-end text-sm font-semibold uppercase text-color">
          Challenges
        </p>
        <div className="col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.challenges.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                  ? "bg-green-400 dark:bg-green-500"
                  : item.successRate === 0 && item.visited
                  ? "bg-green-200 dark:bg-green-300"
                  : "bg-gray-200 dark:bg-[#3F485F]"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 dark:border-gray-500 background-color text-sm text-gray-500 dark:text-gray-200 shadow-sm transition-opacity duration-300 w-36">
                    <div className="px-3 py-2">
                      <p>{item.activityName}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );

  // TODO: hover -> se navn, onclick -> gå til oppgaven, forklaring på farger, grid cols må settes til antall maks oppgaver, style darkmode
};

export default ProgressionGrid;
