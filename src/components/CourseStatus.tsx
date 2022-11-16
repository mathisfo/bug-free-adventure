
import {
  CheckCircleIcon, EllipsisHorizontalCircleIcon, XCircleIcon
} from "@heroicons/react/24/outline";
import { trpc } from "../utils/trpc";
import Link from "next/link";

const CourseStatus = () => {
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
                    ? <div className="flex flex-row items-center gap-1"><CheckCircleIcon className="h-5 w-5 text-emerald-400 dark:text-green-400"></CheckCircleIcon>Done</div>
                    : module.overallProgress > 0
                    ? <div className="flex flex-row items-center gap-1"><EllipsisHorizontalCircleIcon className="h-5 w-5 text-blue-400 dark:text-[#6f69ee]"></EllipsisHorizontalCircleIcon>In progress</div>
                    : <div className="flex flex-row items-center gap-1"><XCircleIcon className="h-5 w-5 text-rose-400 dark:test-rose-500"></XCircleIcon>Not started</div>}
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
