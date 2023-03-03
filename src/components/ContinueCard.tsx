import { PlayIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useUpdateExerciseHistory } from "../hooks/useUpdateExerciseHistory";
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
    <div className="course-card grid w-full grid-cols-3 rounded-lg p-4">
      <div className="col-span-2 col-start-1">
        <p className="text-color mb-1 text-sm font-semibold uppercase opacity-75">
          Continue where you left of
        </p>
        <p className="text-yellow-color text-lg font-semibold uppercase">
          {lastUnfinishedActivity.ActivityResource.name}
        </p>
        <div className="mt-2 flex flex-row">
          <p className="font-semibold">
            {lastUnfinishedActivity.ActivityResource.type}
          </p>
          <ArrowLongRightIcon className="mx-3 h-6 w-6" />
          <p className="font-semibold ">
            {lastUnfinishedActivity.ActivityResource.relation.moduleName}
          </p>
        </div>
      </div>
      <div className="col-start-3 place-self-center justify-self-end">
        <div className="m-4 my-auto grid h-16 w-16 items-center place-self-end rounded-lg bg-[#eaeaea] dark:bg-[#303335]/75">
          <a
            target="_blank"
            href={
              lastUnfinishedActivity.ActivityResource.url +
              "&usr=" +
              lastUnfinishedActivity?.user.protusId +
              "&grp=NorwayFall2022B&sid=TEST&cid=352"
            }
            rel="noreferrer"
            className="justify-self-center"
          >
            <PlayIcon className="text-yellow-color  w-8 cursor-pointer hover:scale-125"></PlayIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;

// <div className="pr-2 ">{playIcon}</div>
