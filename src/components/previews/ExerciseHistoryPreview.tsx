import {
  CommandLineIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { ActivityResource, ExerciseHistory } from "@prisma/client";
import { useSession } from "next-auth/react";
import { api } from "../../utils/api";

const ExerciseHistoryPreview = () => {
  const history: (ExerciseHistory & {
    ActivityResource: ActivityResource;
  })[] = [
    {
      historyId: "mock1",
      completedAt: new Date("2023-03-01"),
      visitedAt: new Date("2023-03-01"),
      userId: "mock",
      attempts: 2,
      activityResourceId: "mock",
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
    {
      historyId: "mock2",
      completedAt: new Date("2023-03-02"),
      visitedAt: new Date("2023-03-02"),
      userId: "mock",
      activityResourceId: "mock",
      attempts: 2,
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
    {
      historyId: "mock3",
      completedAt: new Date("2023-03-02"),
      visitedAt: new Date("2023-03-02"),
      userId: "mock",
      attempts: 1,
      activityResourceId: "mock",
      ActivityResource: {
        id: "mock",
        moduleId: "mock",
        name: "Java",
        type: "CHALLENGE",
        url: "https://www.w3schools.com/java/",
      },
    },
  ];

  const grouped = history.reduce((acc: any, curr: any) => {
    const date = new Date(curr.completedAt).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date]?.push(curr);
    return acc;
  }, {} as { [key: string]: Array<ExerciseHistory & { ActivityResource: ActivityResource }> });

  const result = Object.values(grouped);

  return (
    <>
      {result != undefined && result.length > 0 ? (
        <div className="background-color w-full overflow-x-auto ">
          {Object.keys(grouped).map((e, index) => (
            <div key={index} className="course-card rounded-lg p-4 ">
              <time className="text-color text-lg font-semibold dark:text-white">
                {e}
              </time>
              <ol className="mt-2 divide-y dark:divide-gray-700 ">
                {grouped[e].map(
                  (
                    hist: ExerciseHistory & {
                      ActivityResource: ActivityResource;
                    }
                  ) => (
                    <div
                      key={hist.historyId}
                      className="rounded-lg bg-[#f9f9fb] p-4 dark:bg-[#26272A]"
                    >
                      <li>
                        <a
                          href={hist.ActivityResource.url}
                          className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                        >
                          <div className="text-gray-600 dark:text-gray-400">
                            <div className="text-base font-normal">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {hist.ActivityResource.name}
                              </span>
                            </div>
                            <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                              {hist.ActivityResource.type == "EXAMPLE" ? (
                                <DocumentTextIcon className="mr-2 h-3 w-3 text-[#3c3b95]"></DocumentTextIcon>
                              ) : hist.ActivityResource.type == "CODING" ? (
                                <FlagIcon className="mr-2 h-3 w-3 text-[#5f80f4]"></FlagIcon>
                              ) : (
                                <CommandLineIcon className="mr-2 h-3 w-3 text-[#988efe]"></CommandLineIcon>
                              )}
                              {hist.ActivityResource.type}
                            </span>
                          </div>
                        </a>
                      </li>
                    </div>
                  )
                )}
              </ol>
            </div>
          ))}
        </div>
      ) : (
        <div className="course-card mb-4 rounded-lg p-4 ">
          <div>You have no history yet</div>
        </div>
      )}
    </>
  );
};

export default ExerciseHistoryPreview;
