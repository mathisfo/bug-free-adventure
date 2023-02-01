import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  XCircleIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { ExerciseHistory } from "@prisma/client";
import { TRPCClientError } from "@trpc/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Activity } from "../../server/schema/LearnerActivitySchema";
import { api } from "../../utils/api";

const ExerciseHistoryComp = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  const { data: history, isLoading } =
    api.userRouter.getExerciseHistoryOnUser.useQuery({
      userId: session.user.id,
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(history);

  return (
    <>
      {history ? (
        <div className="background-color relative col-span-4 mr-4 w-full  overflow-x-auto rounded-r-lg">
          <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
            {history
              .sort((a, b) => b.completedAt.valueOf() - a.completedAt.valueOf())
              .map((hist) => (
                <div key={hist.historyId}>
                  <time className="text-lg font-semibold text-gray-900 dark:text-white"></time>
                </div>
              ))}
            <time className="text-lg font-semibold text-gray-900 dark:text-white">
              January 13th, 2022
            </time>
            <ol className="divider-gray-200 mt-3 divide-y dark:divide-gray-700">
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Sum of two Integers
                      </span>
                      <span> You completed this task after 4 attempts</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Concat an array
                      </span>
                      <span> You completed this task after 6 attempts</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
            </ol>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
            <time className="text-lg font-semibold text-gray-900 dark:text-white">
              January 12th, 2022
            </time>
            <ol className="divider-gray-200 mt-3 divide-y dark:divide-gray-700">
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        BMI Calculator
                      </span>
                      <span> You completed this task after 3 attempts</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Fibonacci Numbers
                      </span>
                      <span> You completed this task after 7 attempts</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Create an interface
                      </span>
                      <span> You completed this task after 1 attempt</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal">
                      <span className="font-medium text-gray-900 dark:text-white">
                        China Towers
                      </span>
                      <span> You completed this task after 9 attempts</span>
                    </div>

                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <FlagIcon className="mr-1 h-3 w-3" />
                      Challenge
                    </span>
                  </div>
                </a>
              </li>
            </ol>
          </div>

          <div className="background-color h-32"></div>
        </div>
      ) : (
        <div>You have no history yet</div>
      )}
    </>
  );
};

export default ExerciseHistoryComp;
