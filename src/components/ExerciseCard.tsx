import {
  CheckCircleIcon,
  CommandLineIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

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
      className={`grid h-72 w-full rounded-xl ${
        successRate > 0 || (attempts > 0 && type == "EXAMPLE")
          ? `lighter-green-color`
          : attempts > 0 && successRate == 0 && type !== "EXAMPLE"
          ? `bg-yellow-100 dark:bg-yellow-200`
          : `course-card`
      }`}
    >
      <p
        className={`text-color px-4 pt-4 text-lg font-semibold ${
          successRate > 0 || (attempts > 0 && type == "EXAMPLE")
            ? `text-slate-800 dark:text-slate-800`
            : attempts > 0 && successRate == 0 && type !== "EXAMPLE"
            ? `text-slate-800 dark:text-slate-800`
            : `text-color`
        }`}
      >
        {name}
      </p>
      <div className="grid justify-items-center">
        <div
          className={`flex h-28 w-28 flex-row items-stretch rounded-full p-4 ${
            successRate > 0 || (attempts > 0 && type == "EXAMPLE")
              ? `green-color`
              : attempts > 0 && successRate == 0 && type !== "EXAMPLE"
              ? `bg-[#fecd66]`
              : `bg-gray-200 dark:bg-[#303335]`
          }`}
        >
          {type == "EXAMPLE" && attempts == 0 ? (
            <DocumentTextIcon className=" text-white" />
          ) : type == "CODING" && successRate == 0 ? (
            <CommandLineIcon className=" text-white" />
          ) : type == "CHALLENGE" && successRate == 0 ? (
            <FlagIcon className=" text-white" />
          ) : (
            <CheckCircleIcon className=" text-white" />
          )}
        </div>
      </div>
      <div className="mx-4 flex flex-row justify-between">
        <p
          className={`text-color text-sm font-semibold ${
            successRate > 0 || (attempts > 0 && type == "EXAMPLE")
              ? `text-slate-800 dark:text-slate-800`
              : attempts > 0 && successRate == 0 && type !== "EXAMPLE"
              ? `text-slate-800 dark:text-slate-800`
              : `text-color`
          }`}
        >
          {type}
        </p>
        {type == "EXAMPLE" ? (
          <></>
        ) : (
          <p
            className={`text-color text-sm font-semibold ${
              successRate > 0 || (attempts > 0 && type == "EXAMPLE")
                ? `text-slate-800 dark:text-slate-800`
                : attempts > 0 && successRate == 0 && type !== "EXAMPLE"
                ? `text-slate-800 dark:text-slate-800`
                : `text-color`
            }`}
          >
            {attempts} attempts
          </p>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
