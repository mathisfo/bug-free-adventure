import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import ExerciseCard from "../../components/ExerciseCard";
import ProgressionGrid from "../../components/ProgressionGrid";
import Timeline from "../../components/Timeline";
import { useExerciseHistory } from "../../hooks/useExerciseHistory";
import { Activity } from "../../server/schema/LearnerActivitySchema";
import { api } from "../../utils/api";

const ModuleStatistics = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = api.learnerActivityRouter.getLearnerActivity.useQuery();

  const { data: session, status } = useSession();
  const [selectedActivity, setSelectedActivity] = useState<string | undefined>(
    undefined
  );

  // This hook is used to set the previous data to the current data
  // when the current data is loaded. It is necesarry because we need to monitor when an exercise's successRate goes from 0 to >0.
  // This way we know when the user has completed the exercise.
  useExerciseHistory(learnerAnalytics, selectedActivity);

  const router = useRouter();

  const { module } = router.query;
  const { type } = router.query;

  if (isLoading || !isSuccess || status === "loading") {
    return (
      <div className="mx-12 mt-36 flex grid animate-pulse grid-cols-4 gap-8">
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
        <div className="loading h-72 rounded"></div>
      </div>
    );
  }

  if (status === "unauthenticated" || !session?.user) {
    return <div>Unauthorized</div>;
  }

  const activities = learnerAnalytics.activityAnalytics;

  const typeofActivity = (): Activity[] => {
    switch (type) {
      case "challenges": {
        return learnerAnalytics.activityAnalytics.challenges.sort(
          (firstActivity, secondActivity) =>
            firstActivity.successRate > secondActivity.successRate
              ? 1
              : firstActivity.successRate === secondActivity.successRate
              ? firstActivity.attempts < secondActivity.attempts
                ? 1
                : -1
              : -1
        );
      }

      case "examples": {
        return learnerAnalytics.activityAnalytics.examples.sort(
          (firstActivity, secondActivity) =>
            firstActivity.attempts - secondActivity.attempts
        );
      }

      case "coding": {
        return learnerAnalytics.activityAnalytics.coding.sort(
          (firstActivity, secondActivity) =>
            firstActivity.successRate > secondActivity.successRate
              ? 1
              : firstActivity.successRate === secondActivity.successRate
              ? firstActivity.attempts < secondActivity.attempts
                ? 1
                : -1
              : -1
        );
      }

      default: {
        return [];
      }
    }
  };

  if (!type) {
    return (
      <div>
        <Breadcrumbs currentPage={module ? module[1] : "404"} />
        <div className="m-4 grid h-screen grid-cols-2 grid-rows-2">
          <div className="col-start-1 space-y-8 space-x-4 p-14">
            <div className="text-color mb-4 text-lg font-semibold uppercase opacity-75">
              Recommended next steps
            </div>
            <Timeline
              learnerAnalytics={learnerAnalytics}
              recommendedActivities={[
                ...activities.challenges,
                ...activities.coding,
                ...activities.examples,
              ].filter(
                (e) => e.sequencing > 0 && e.relatedTopic === module![1]
              )}
            />
          </div>

          <div className="col-span-2 col-start-1 row-start-2 w-1/2 p-12">
            <ProgressionGrid currentPage={module ? module[1] : "404"} />
          </div>
          <div className="col-start-2 space-y-4 p-14">
            <ActivityCard
              type="EXAMPLE"
              bg="bg-gradient-to-r from-[#3c3b95] via-[#44439f] to-[#3c3b95] "
              fillColor="#DE5B7E"
              moduleName={module ? module[1] : "404"}
            />
            <ActivityCard
              type="CHALLENGE"
              bg="bg-gradient-to-r from-[#9293cf] via-[#9a9bd0] to-[#9293cf]"
              fillColor="#988efe"
              moduleName={module ? module[1] : "404"}
            />
            <ActivityCard
              type="CODING"
              bg="bg-gradient-to-r from-[#5f80f4] via-[#6c8af3] to-[#5f80f4]"
              fillColor="#0de890"
              moduleName={module ? module[1] : "404"}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs
        currentPage={module ? module[1] : "404"}
        currentType={type as string}
      />
      <div className=" background-color absolute mt-6 grid w-full  overflow-x-auto rounded-lg">
        <div className="flex flex-row items-center space-x-2 justify-self-end pb-4 pr-12 pt-6">
          <div className="h-4 w-4 items-center rounded-md bg-green-400 dark:bg-green-400"></div>
          <p className="text-sm">Finished</p>
          <div className="h-4 w-4 items-center rounded-md bg-[#fecd66]"></div>
          <p className="text-sm">Started</p>
          <div className="course-card h-4 w-4 items-center rounded-md"></div>
          <p className="text-sm">To do</p>
        </div>
        <div className="mx-12 my-16 mt-4 grid grid-cols-4 gap-8">
          {module
            ? typeofActivity()
                .filter((activity) => activity.relatedTopic == module[1])

                .map((activity) => {
                  return (
                    <a
                      key={activity.activityName}
                      target="_blank"
                      href={
                        activity.url +
                        "&usr=" +
                        session.user?.protusId +
                        "&grp=NorwayFall2022B&sid=TEST&cid=352"
                      }
                      onClick={() => setSelectedActivity(activity.activityId)}
                      rel="noreferrer"
                    >
                      <ExerciseCard
                        name={activity.activityName}
                        type={activity.type}
                        successRate={activity.successRate}
                        attempts={activity.attempts}
                      />
                    </a>
                  );
                })
            : "404"}
        </div>
      </div>
    </>
  );
};

export default ModuleStatistics;
