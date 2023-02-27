import { Checkbox } from "flowbite-react";

const SelectedComponentsSubmitter = ({
  name,
  info,
}: {
  name: string;
  info: string;
}) => {
  return (
    <div className="course-card relative grid grid-cols-2 gap-8 rounded-2xl border border-zinc-400 px-6 pt-6 dark:border-zinc-600">
      <div className="col-start-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>

        <p className="col-start-1 text-sm text-gray-700 dark:text-gray-400">
          {info}
        </p>
        <div className="my-8 ml-4 flex items-center gap-2 ">
          <Checkbox id="select" />
          <label htmlFor="select">Select</label>
        </div>
      </div>
      <div className="col-start-2 grid items-center ">
        <div className=" h-32 w-32 self-center rounded bg-blue-200"></div>
      </div>
    </div>
  );
};

export default SelectedComponentsSubmitter;
