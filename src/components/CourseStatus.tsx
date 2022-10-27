const CourseStatus = () => {
  const modules = [
    { category: "Strings", progress: 100 },
    { category: "Variables", progress: 0 },
    { category: "Operators", progress: 20 },
    { category: "Boolean Expressions", progress: 0 },
  ];

  const doneIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Done
    </div>
  );

  const notStartedIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      Not started
    </div>
  );

  const inProgressIcon = (
    <div className="flex flex-row items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      In progress
    </div>
  );

  return (
    <div className="background-color relative w-full  overflow-x-auto rounded-lg">
      <table className="text-color w-full table-fixed text-left text-sm">
        <thead className="dark:course-card-dark bg-[#F5F5F5] uppercase dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">Module</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Progress</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => {
            return (
              <tr
                key={module.category}
                className="text-md background-color border-b hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-[#3F485F] "
              >
                <th className="py-4 px-6">{module.category}</th>
                <td className="py-4 px-6">
                  {module.progress == 100
                    ? doneIcon
                    : module.progress > 0
                    ? inProgressIcon
                    : notStartedIcon}
                </td>
                <td className="flex flex-row py-4 px-6">
                  <div className="fill-color-light mx-4 h-2 w-2/3 rounded">
                    <div
                      className={`h-2 rounded bg-blue-400 dark:bg-[#f97316]`}
                      style={{ width: module.progress + "%" }}
                    ></div>
                  </div>
                  <div className="text-xs">{module.progress} %</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseStatus;
