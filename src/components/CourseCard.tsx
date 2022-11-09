
import {
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const CourseCard = ({
  course,
  progress,
  completedTasks,
  allTasks,
  color,
  iconColor,
}: {
  course: string;
  progress: number;
  completedTasks: number;
  allTasks: number;
  color: string;
  iconColor: string;
}) => {
    const router = useRouter();

  const onClick = async (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    await router.push(target);
  };

  return (
    <div onClick={(e) => onClick("/courses", e)} className={`${color} mr-4 w-1/3 rounded-lg p-2 cursor-pointer hover:scale-105 transition duration-300 ease-in-out`}>
      <div className="my-4 ml-4 flex flex-row items-center">
        <div
          className={` w-12 rounded-3xl p-2 ${iconColor} items-end dark:bg-[#6f69ee] `}
        >
          <CommandLineIcon className="text-white"></CommandLineIcon>
        </div>
        <div className="text-color px-4 py-4 text-2xl font-semibold">
          {course}
        </div>
      </div>
      <div className="text-color flex flex-row px-4 pt-1 text-lg font-bold">
        {completedTasks}/
        <div className="text-color-light font-normal">{allTasks}</div>
      </div>
      <div className="text-color-light px-4 pb-2 text-sm">completed tasks</div>
      <div className="text-md text-color px-4 py-1 ">Progress</div>
      <div className="mb-4 flex w-full flex-row items-center">
        <div className="fill-color-light mx-4  h-2 w-4/5 rounded">
          <div
            className={`${iconColor} h-2  rounded dark:bg-[#f97316]`}
            style={{ width: progress + "%" }}
          ></div>
        </div>
        <div className="text-xs">{progress} %</div>
      </div>
    </div>
  );
};

export default CourseCard;
