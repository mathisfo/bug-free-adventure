import { PlayIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { Activity } from "../server/schema/LearnerActivitySchema";

const ContinueCard = (props: { recommendedActivities: Activity[] }) => {
  const { data: session, status } = useSession();

  const { recommendedActivities } = props;

  if (recommendedActivities.length === 0) {
    return <div>No recommendations have been generated yet</div>;
  }

  if (status === "unauthenticated" || !session?.user) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="space-y-4">
      <div className="course-card grid w-full grid-cols-3 grid-rows-2 rounded-lg px-2">
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-lg">
          Continue where you left of
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color p-2 font-semibold">Bais</div>
        </div>
        <div className="col-start-3 row-span-2 row-start-1 m-2 my-auto flex h-16 w-16 place-self-end rounded-lg bg-[#C7DDFE] dark:bg-[#7d8393]/75">
          <PlayIcon className="m-auto w-8 cursor-pointer text-gray-700 hover:scale-125 dark:text-[#f97316]"></PlayIcon>
        </div>
      </div>
      <div className="second-course-card grid w-full grid-cols-3 grid-rows-2 rounded-lg px-2">
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-lg">
          Continue to recommended exercise
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color px-2 pb-2 font-semibold">
            {props.recommendedActivities[0]?.activityName}
          </div>
        </div>
        <div className="col-start-3 row-span-2 row-start-1 m-2 my-auto  flex h-16 w-16 items-center place-self-end rounded-lg bg-[#FED1D3] dark:bg-[#7d8393]/75">
          <a
            target="_blank"
            href={
              props.recommendedActivities[0]?.url +
              "&usr=" +
              session.user?.protusId +
              "&grp=NorwayFall2022B&sid=TEST&cid=352"
            }
            rel="noreferrer"
            className="mx-auto"
          >
            {" "}
            <PlayIcon className="m-auto w-8 cursor-pointer text-gray-700 hover:scale-125 dark:text-[#f97316]"></PlayIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;

// <div className="pr-2 ">{playIcon}</div>
