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
    <div className="mt-12 w-1/3 space-y-1 ">
      <div
        className={`row-start-1 grid grid-cols-4 place-content-start items-center gap-6 `}
      >
        <p className="text-color col-start-1 justify-self-end text-sm font-semibold uppercase">
          Examples
        </p>
        <div className="col-span-3 col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.examples.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                    ? "bg-green-200"
                    : item.successRate === 0 && item.visited
                    ? "bg-blue-200"
                    : "bg-gray-200"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 ">
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
      <div className="row-start-1 flex grid grid-cols-4 place-content-start items-center gap-6">
        <p className="text-color col-start-1 justify-self-end text-sm font-semibold uppercase">
          Coding
        </p>
        <div className="col-span-3 col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.coding.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                    ? "bg-green-200"
                    : item.successRate === 0 && item.visited
                    ? "bg-blue-200"
                    : "bg-gray-200"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 ">
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
      <div className="row-start-1 flex grid grid-cols-4 place-content-start items-center gap-6">
        <p className="text-color col-start-1 justify-self-end text-sm font-semibold uppercase">
          Challenges
        </p>
        <div className="col-span-3 col-start-2 flex flex-row space-x-1">
          {modules.activityAnalytics.challenges.filter(e => e.relatedTopic == "Strings").map((item) => (
            <>
              <div
                key={item.activityName}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setIsShowing(null)}
                className={`${boxStyling} ${
                  item.successRate === 1
                    ? "bg-green-200"
                    : item.successRate === 0 && item.visited
                    ? "bg-blue-200"
                    : "bg-gray-200"
                } `}
              >
                {isShowing?.activityName === item.activityName && (
                  <div className="absolute bottom-10 z-10 inline-block rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-300 ">
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
