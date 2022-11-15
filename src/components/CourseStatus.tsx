import { trpc } from "../utils/trpc";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const CourseStatus = () => {
  const doneIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-emerald-400 dark:text-green-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Done
    </div>
  );

  const notStartedIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dark:test-rose-500 h-5 w-5 text-rose-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      Not started
    </div>
  );

  const inProgressIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-blue-400 dark:text-[#6f69ee]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      In progress
    </div>
  );

  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  if (!isSuccess || isLoading) {
    return (
      <div className="mx-auto w-full rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="background-color relative w-full  overflow-x-auto rounded-lg">
      <table className="text-color w-full table-fixed text-left text-sm">
        <thead className="dark:course-card-dark bg-[#F5F5F5] uppercase dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Module</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Progress</th>
          </tr>
        </thead>
        <tbody>
          {learnerAnalytics.moduleAnalytics.map((module) => {
            return (
              <tr
                key={module.name}
                className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
              >
                <th className="py-4 px-6">
                  <Link href={`Java/${module.name}`}>{module.name}</Link>
                </th>
                <td className="py-4 px-6">
                  {module.overallProgress == 100
                    ? doneIcon
                    : module.overallProgress > 0
                    ? inProgressIcon
                    : notStartedIcon}
                </td>
                <td className="flex flex-row py-4 px-6">
                  <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                    <div
                      className={`h-2 rounded bg-blue-400 dark:bg-[#f97316]`}
                      style={{ width: module.overallProgress * 100 + "%" }}
                    ></div>
                  </div>
                  <div className="text-xs">
                    {module.overallProgress * 100} %
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseStatus;
