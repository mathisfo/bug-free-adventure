const ContinueCard = ({currentExercise, recommendedExercise}: {currentExercise: string, recommendedExercise: string}) => {

    const playIcon = 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h- text-gray-700 filled dark:text-[#f97316] cursor-pointer hover:scale-125 m-auto ">
  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
</svg>


return ( 
    <div className="space-y-4">
    <div className="course-card w-full rounded-lg px-2 grid grid-cols-3 grid-rows-2">
        <div className="text-color text-lg px-2 pt-2 col-start-1 col-span-2">Continue where you left of</div>
        <div className="flex flex-row items-center place-content-between col-start-1 col-span-2"><div className="p-2 font-semibold text-color ">{currentExercise}</div>
        
        </div>
        <div className="flex rounded-lg bg-[#C7DDFE] dark:bg-[#7d8393]/75 w-16 h-16 col-start-3 row-start-1 row-span-2 my-auto place-self-end m-2">{playIcon}</div>
    </div>
    <div className="second-course-card w-full rounded-lg px-2 grid grid-cols-3 grid-rows-2">
    <div className="text-color text-lg px-2 pt-2 col-start-1 col-span-2">Continue to recommended exercise</div>
    <div className="flex flex-row items-center place-content-between col-start-1 col-span-2"><div className="p-2 font-semibold text-color">{recommendedExercise}</div>
    </div> 
    <div className="flex rounded-lg bg-[#FED1D3] dark:bg-[#7d8393]/75  w-16 h-16 col-start-3 row-start-1 row-span-2 my-auto place-self-end m-2">{playIcon}</div> 
</div>
</div>
 )
}

export default ContinueCard

// <div className="pr-2 ">{playIcon}</div>