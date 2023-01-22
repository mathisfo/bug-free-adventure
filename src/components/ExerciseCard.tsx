import { trpc } from "../utils/trpc";
import {
  CommandLineIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";
import { Activity } from "../server/schema/LearnerActivitySchema";

const ExerciseCard = ({
  name,
  type,
  successRate,
  attempts,
}: {
  name: string;
  type: string;
  successRate: number;
  attempts: number;
}) => {
  return (
    <div
      className={`grid h-72 w-full rounded ${
        successRate > 0 ? `bg-green-100` : `course-card`
      }`}
    >
      <p className="text-color p-4 text-lg font-semibold">{name}</p>
      <div className="grid justify-items-center">
        <div
          className={`flex h-28 w-28 flex-row items-stretch rounded-full p-4 ${
            successRate > 0 ? `bg-green-300` : `bg-blue-200`
          }`}
        >
          {type == "EXAMPLE" ? (
            <DocumentTextIcon className=" text-white" />
          ) : type == "Coding" ? (
            <CommandLineIcon className=" text-white" />
          ) : (
            <FlagIcon className=" text-white" />
          )}
        </div>
      </div>
      <div className="mx-4 flex flex-row justify-between">
        <p className="text-color text-sm font-semibold">{type}</p>
        <p className="text-color text-sm">{attempts} attempts</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
