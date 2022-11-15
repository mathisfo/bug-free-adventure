
import {
  CheckCircleIcon, EllipsisHorizontalCircleIcon, XCircleIcon, ChevronDownIcon, ChevronRightIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const CourseStatus = () => {

  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);
  const [clickedIndex, setClickedIndex] = useState({});

  if (!isSuccess || isLoading) {
    return <div className="rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-8 loading rounded"></div>
          <div className="h-8 loading rounded"></div>
          <div className="h-8 loading rounded"></div>
        </div>
      </div>
  </div>;
  }

  const handleClick = (index: any) => {
    setClickedIndex(state => ({
      ...state, 
    [index]: !state[index]
    }));
  };
  

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
          {learnerAnalytics.topicAnalytics.map((topic, index) => {
            return (
              <>
              <tr
                key={topic.name}
                className="text-md background-color cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
                // onClick={() => setOpen(!open)}
                onClick={() => handleClick(index)}
                
              >
                <th className="py-4 px-6 flex flex-row">{clickedIndex[index] ? <ChevronDownIcon className="w-4 h-4 text-color mr-2"></ChevronDownIcon> : <ChevronRightIcon className="w-4 h-4 text-color mr-2"></ChevronRightIcon>}{topic.name}</th>
                
                <td className="py-4 px-6">
                  {topic.overallProgress == 100
                    ? <div className="flex flex-row items-center gap-1"><CheckCircleIcon className="h-5 w-5 text-emerald-400 dark:text-green-400"></CheckCircleIcon>Done</div>
                    : topic.overallProgress > 0
                    ? <div className="flex flex-row items-center gap-1"><EllipsisHorizontalCircleIcon className="h-5 w-5 text-blue-400 dark:text-[#6f69ee]"></EllipsisHorizontalCircleIcon>In progress</div>
                    : <div className="flex flex-row items-center gap-1"><XCircleIcon className="h-5 w-5 text-rose-400 dark:test-rose-500"></XCircleIcon>Not started</div>}
                </td>
                <td className="flex flex-row py-4 px-6">
                  <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                    <div
                      className={`h-2 rounded bg-blue-400 dark:bg-[#f97316]`}
                      style={{ width: topic.overallProgress *100+ "%" }}
                    ></div>
                  </div>
                  <div className="text-xs">{topic.overallProgress *100} %</div>
                </td>
              </tr>
              {clickedIndex[index] &&
              <>
              <tr className="text-md dark:course-card-dark bg-[#F5F5F5] cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] ">
                <th className="py-4 px-12">Examples</th>
                <td className="py-4 px-12"><div className="text-color flex flex-row font-bold">
        1/ 
        <div className=" font-normal">12 tasks</div>
      </div></td>
                <td className="flex flex-row py-4 px-6 ">
                  <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                    <div
                      className={`h-2 rounded bg-rose-400 dark:bg-[#f97316]`}
                      style={{ width: topic.overallProgress *100+ "%" }}
                    ></div>
                  </div>
                  <div className="text-xs">{topic.overallProgress *100} %</div>
                </td>
                
              </tr>
              <tr className="text-md dark:course-card-dark bg-[#F5F5F5] cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] ">
              <th className="py-4 px-12">Coding</th>
              <td className="py-4 px-12"><div className="text-color flex flex-row font-bold">
        0/ 
        <div className=" font-normal">12 tasks</div>
      </div></td>
              <td className="flex flex-row py-4 px-6">
                <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                  <div
                    className={`h-2 rounded bg-rose-400 dark:bg-[#f97316]`}
                    style={{ width: topic.overallProgress *100+ "%" }}
                  ></div>
                </div>
                <div className="text-xs">{topic.overallProgress *100} %</div>
              </td>
              
            </tr>
            <tr className="text-md dark:course-card-dark bg-[#F5F5F5] cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] ">
            <th className="py-4 px-12">Challenges</th>
            <td className="py-4 px-12"><div className="text-color flex flex-row font-bold">
        0/ 
        <div className=" font-normal">12 tasks</div>
      </div></td>
            <td className="flex flex-row py-4 px-6">
              <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                <div
                  className={`h-2 rounded bg-rose-400 dark:bg-[#f97316]`}
                  style={{ width: topic.overallProgress *100+ "%" }}
                ></div>
              </div>
              <div className="text-xs">{topic.overallProgress *100} %</div>
            </td>
            
          </tr>
          </>
          }
              </>

            );
          })}
        </tbody>
      </table>
      </div>
    
  );
};

export default CourseStatus;
