import {
  CommandLineIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { ActivityResource, ExerciseHistory } from "@prisma/client";
import { useSession } from "next-auth/react";
import { api } from "../../utils/api";

const ExerciseHistoryComp = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const {
    data: history,
    isLoading,
    isSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery({
    userId: session.user.id,
  });

  if (isLoading || !isSuccess) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-60 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const grouped = history.reduce(
    (
      acc: {
        [x: string]: any[];
      },
      curr: { completedAt: string | number | Date }
    ) => {
      const date = new Date(curr.completedAt).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date]?.push(curr);
      return acc;
    },
    {} as { [key: string]: Array<ExerciseHistory & ActivityResource> }
  );

  const result = Object.values(grouped);

  return (
    <>
      {result != undefined && result.length > 0 ? (
        <div className="background-color w-full overflow-x-auto ">
          {Object.entries(grouped).map((e, index) => (
            <div key={index} className="course-card mb-4 rounded-lg p-8 ">
              <time className="text-color text-lg font-semibold dark:text-white">
                {e[0]}
              </time>
              <ol className="mt-3 divide-y dark:divide-gray-700 ">
                {e[1].map((hist) => (
                  <div
                    key={hist.historyId}
                    className="mb-1  rounded-lg bg-[#f9f9fb] p-5 dark:bg-[#26272A]"
                  >
                    <li>
                      <a
                        href={hist.url}
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
                ))}
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

export default ExerciseHistoryComp;
