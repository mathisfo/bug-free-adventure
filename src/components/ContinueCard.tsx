const ContinueCard = ({
  currentExercise,
  recommendedExercise,
}: {
  currentExercise: string;
  recommendedExercise: string;
}) => {
  const playIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h- filled m-auto w-8 cursor-pointer text-gray-700 hover:scale-125 dark:text-[#f97316] "
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="space-y-4">
      <div className="course-card grid w-full grid-cols-3 grid-rows-2 rounded-lg px-2">
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-lg">
          Continue where you left of
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color p-2 font-semibold ">{currentExercise}</div>
        </div>
        <div className="col-start-3 row-span-2 row-start-1 m-2 my-auto flex h-16 w-16 place-self-end rounded-lg bg-[#C7DDFE] dark:bg-[#7d8393]/75">
          {playIcon}
        </div>
      </div>
      <div className="second-course-card grid w-full grid-cols-3 grid-rows-2 rounded-lg px-2">
        <div className="text-color col-span-2 col-start-1 px-2 pt-2 text-lg">
          Continue to recommended exercise
        </div>
        <div className="col-span-2 col-start-1 flex flex-row place-content-between items-center">
          <div className="text-color p-2 font-semibold">
            {recommendedExercise}
          </div>
        </div>
        <div className="col-start-3 row-span-2 row-start-1 m-2  my-auto flex h-16 w-16 place-self-end rounded-lg bg-[#FED1D3] dark:bg-[#7d8393]/75">
          {playIcon}
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;

// <div className="pr-2 ">{playIcon}</div>
