import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";

const StatsPreview = () => {
  return (
    <div className="text-color mt-6 cursor-pointer rounded-lg">
      <div className="mb-8 mt-4">
        <p className="text-md font-semibold uppercase">
          Average exercises done
        </p>
        <p className="text-color-light text-sm font-semibold uppercase ">
          Last 7 days compared to the 7 days before
        </p>
        <div className="course-card mt-2 grid grid-cols-3 divide-x rounded px-2 py-4 dark:divide-gray-400">
          <div className="grid grid-cols-2 justify-items-stretch">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Examples
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">9</p>{" "}
              <p className="text-color-light ">from 3</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-13 flex flex-row items-center rounded  bg-[#0de890] text-white">
                <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />

                <p className="text-sm font-semibold">{Math.ceil(9 / 3)}%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Challenges
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">3</p>{" "}
              <p className="text-color-light ">from 2</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-13 flex flex-row items-center rounded  bg-[#0de890] text-white">
                <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />

                <p className="text-sm font-semibold">{Math.ceil(3 / 2)}%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Coding Ex.
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">2</p>{" "}
              <p className="text-color-light ">from 5</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-13 flex flex-row items-center rounded  bg-[#DE5B7E] text-white">
                <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />

                <p className="text-sm font-semibold">{Math.ceil(5 / 2)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-md font-semibold uppercase">
          Average attempts on exercises
        </p>
        <p className="text-color-light text-sm font-semibold uppercase ">
          Last 7 days compared to the 7 days before
        </p>
        <div className="course-card mt-2 grid grid-cols-2 divide-x rounded px-2 py-4 dark:divide-gray-400">
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1 text-sm font-semibold">
              Challenges
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">3</p>{" "}
              <p className="text-color-light ">from 4</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#0de890] text-white">
                <ArrowTrendingDownIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">4%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-stretch pl-2">
            <p className="col-start-1 row-start-1  text-sm font-semibold">
              Coding Ex.
            </p>
            <div className="col-start-1 row-start-2 flex flex-row text-xs">
              <p className="text-blue-color mr-1 font-semibold">1</p>{" "}
              <p className="text-color-light ">from 2</p>
            </div>
            <div className="col-start-2 row-span-2 mr-2 flex items-center justify-self-end">
              <div className="w-15 flex flex-row items-center rounded bg-[#DE5B7E] text-white">
                <ArrowTrendingUpIcon className="mx-1 h-4 w-4" />
                <p className="text-sm font-semibold">10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-row justify-center text-sm uppercase">
        <div className="flex flex-row justify-self-center">
          <p>Current streak</p>
          <p className="ml-2 font-semibold uppercase">2 days 🔥</p>
        </div>
        {/* <div className="flex flex-row justify-self-center"><p>Longest streak</p><p className="ml-2 uppercase font-semibold"> 6 days 🔥</p></div> */}
      </div>
      <div className="my-4 flex flex-row justify-center font-semibold uppercase">
        <p>You did</p>
        <div
          className="mx-1
                w-12 rounded bg-[#0de890] "
        >
          <p className="text-center text-white">15 %</p>
        </div>
        <p>more than last week 📈</p>
      </div>
    </div>
  );
};

export default StatsPreview;
