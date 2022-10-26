const CourseStatus = () => {
    const modules = [{category: "Strings", progress: 100}, {category: "Variables", progress: 0}, {category: "Operators", progress: 20}, {category: "Boolean Expressions", progress: 0}]

    const doneIcon = <div className="flex flex-row items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>Done</div>

  const notStartedIcon = <div className="flex flex-row items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>Not started</div>

const inProgressIcon = <div className="flex flex-row items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
In progress</div>

    return ( 
        <div className="background-color w-full rounded-lg  overflow-x-auto relative">
            <table className="table-fixed w-full text-color text-left text-sm">
                <thead className="uppercase bg-[#F5F5F5] dark:course-card-dark dark:text-gray-400">
                    <tr>
                        <th className="py-3 px-6">Module</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6">Progress</th>
                    </tr>
                </thead>
                <tbody>
                {modules.map((module) =>  { return (
                    <tr className="border-b text-md background-color dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-[#3F485F] ">
                    <th className="py-4 px-6">{module.category}</th>
                    <td className="py-4 px-6">{module.progress == 100 ? doneIcon : module.progress > 0 ? inProgressIcon : notStartedIcon}</td>
                    <td className="py-4 px-6 flex flex-row"><div className="w-2/3 fill-color-light h-2 rounded mx-4">
  <div className={`bg-blue-400 dark:bg-[#f97316] h-2 rounded`} style={{width: module.progress + "%"}}></div>
</div><div className="text-xs">{module.progress} %</div></td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
    )
}

export default CourseStatus