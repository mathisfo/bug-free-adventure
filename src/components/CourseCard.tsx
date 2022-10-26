const CourseCard = ({course, progress, completedTasks, allTasks, color, iconColor}: {course: string, progress: number, completedTasks: number, allTasks: number, color: string, iconColor: string}) => {
    const computer_svg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>

    return (
        <div className={`${color} w-1/3 rounded-lg p-2 mr-4`}>
            <div className="flex flex-row items-center my-4 ml-4"><div className={` rounded-3xl p-2 w-12 ${iconColor} dark:bg-[#6f69ee] items-end `}>{computer_svg}</div>
            <div className="text-2xl text-color px-4 py-4 font-semibold">{course}</div></div>
            <div className="flex flex-row text-lg text-color px-4 pt-1 font-bold">{completedTasks}/<div className="text-color-light font-normal">{allTasks}</div></div>
            <div className="text-sm text-color-light px-4 pb-2">completed tasks</div>
            <div className="text-md text-color px-4 py-1 ">Progress</div>
            <div className="flex flex-row w-full items-center mb-4">
             <div className="w-4/5 fill-color-light  h-2 rounded mx-4">
                <div className={`${iconColor} dark:bg-[#f97316]  h-2 rounded`} style={{width: progress + "%"}}></div>
            </div><div className="text-xs">{progress} %</div></div>
        
        </div>
    )
    
}

export default CourseCard