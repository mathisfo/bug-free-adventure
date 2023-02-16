import { FlagIcon } from "@heroicons/react/24/outline";
import { ActivityResource, ExerciseHistory } from "@prisma/client";
import { useSession } from "next-auth/react";
import { api } from "../../utils/api";

const ExerciseHistoryComp = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  const {
    data: history,
    isLoading,
    isSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery({
    userId: session.user.id,
  });

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>;
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
        <div className="background-color relative col-span-4 mr-4 w-full  overflow-x-auto rounded-r-lg ">
          {Object.entries(grouped).map((e, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
            >
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                {e[0]}
              </time>
              <ol className="divider-gray-200 mt-3 divide-y dark:divide-gray-700 ">
                {e[1].map((hist) => (
                  <div
                    key={hist.historyId}
                    className="rounded-lg border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
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
                            <FlagIcon className="mr-1 h-3 w-3" />
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

          <div className="background-color h-32"></div>
        </div>
      ) : (
        <div>You have no history yet</div>
      )}
    </>
  );
};

export default ExerciseHistoryComp;
