import { PlayIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useUpdateExerciseHistory } from "../hooks/useUpdateExerciseHistory";
import { Activity } from "../server/schema/LearnerActivitySchema";
import { api } from "../utils/api";

const ContinueCard = () => {
  const {
    data: lastUnfinishedActivity,
    isSuccess,
    isLoading,
  } = api.userRouter.getLastUnfinishedActivity.useQuery();

  const {
    data: learnerAnalytics,
    isSuccess: analyticsSuccess,
    isError: analyticsError,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  useUpdateExerciseHistory(
    learnerAnalytics,
    lastUnfinishedActivity?.ActivityResource.id
  );

  if (!isSuccess || isLoading || !analyticsSuccess || analyticsError) {
    return <div>Loading...</div>;
  }

  if (!lastUnfinishedActivity) {
    return (
      <div>
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-sm font-semibold uppercase opacity-75">
          Continue where you left of:
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color text-md p-2">
            <div>Your last unfinished exercise will appear here</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="course-card grid w-full grid-cols-3 grid-rows-2 rounded-lg px-2">
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-sm font-semibold uppercase opacity-75">
          Continue where you left of
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color p-2 text-lg font-semibold">
            <div>{lastUnfinishedActivity.ActivityResource.name}</div>
          </div>
        </div>
        <div className="p-2">
          {lastUnfinishedActivity.ActivityResource.type}
        </div>
        <div className="p-2">
          {lastUnfinishedActivity.ActivityResource.relation.moduleName}
        </div>
        <div className="col-start-3 row-span-2 row-start-1 m-4 my-auto flex h-16 w-16 place-self-end rounded-lg bg-[#eaeaea] dark:bg-[#303335]/75">
          <a
            target="_blank"
            href={
              lastUnfinishedActivity.ActivityResource.url +
              "&usr=" +
              lastUnfinishedActivity?.user.protusId +
              "&grp=NorwayFall2022B&sid=TEST&cid=352"
            }
            rel="noreferrer"
          >
            <PlayIcon className="text-yellow-color m-auto w-8 cursor-pointer hover:scale-125"></PlayIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;

// <div className="pr-2 ">{playIcon}</div>
