const CourseCard = ({course, progress}: {course: string, progress: number}) => {

    return (
        <div className="bg-white w-1/3 rounded-lg h-64">
            <div className="text-lg text-gray-700 px-4 py-4">{course}</div>
            <div className="text-sm text-gray-700 px-4 py-1 ">Progress</div>
            <div className="flex flex-row w-full items-center">
            <div className="w-4/5 bg-gray-200 h-2 rounded mx-4">
                <div className={`bg-violet-400 h-2 rounded w-${progress}%`}></div>
            </div><div className="text-xs">{progress} %</div></div>
        </div>
    )
    
}

export default CourseCard