const Assignments = () => {
  const assignments = [
    {
      title: "Java assignment 1",
      duedate: new Date(2022, 10, 20).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      score: 16,
      availablePoints: 20,
      completed: true,
    },
    {
      title: "Java assignment 2",
      duedate: new Date(2022, 11, 13).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      score: 0,
      availablePoints: 20,
      completed: false,
    },
  ];
  const svgicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-8 w-8 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
      />
    </svg>
  );

  return (
    <div className="assignment-background h-64 w-4/5 rounded-lg p-4 pl-6 pt-6">
      {assignments.map((assignment) => {
        return (
          <div key={assignment.title} className="col-start-1 grid">
            <div className="mb-4 flex flex-row space-x-6">
              <div>
                <div className="icon w-12 rounded-3xl p-2 ">{svgicon}</div>
              </div>
              <div>
                <div className="text-lg ">{assignment.title}</div>
                <div className="text-color-light text-sm ">
                  {assignment.duedate}
                </div>
              </div>
            </div>
            <div className="col-start-2 grid">
              <div className="mb-4 flex flex-row justify-around space-x-6">
                <div>
                  <div className="w-20 text-lg">
                    {assignment.score > 0 ? assignment.score : "--"}/
                    {assignment.availablePoints}
                  </div>
                  <div className=" text-color-light text-sm">
                    {assignment.completed ? "Final grade" : "Upcoming"}
                  </div>
                </div>
                <div
                  className={`flex h-12 w-24 items-center justify-center rounded-lg ${
                    assignment.completed
                      ? "bg-[#CACBE7] dark:bg-white"
                      : "bg-[#f1f4f9]"
                  }`}
                >
                  <div
                    className={`${
                      assignment.completed
                        ? "text-violet-800 dark:text-violet-800"
                        : "text-gray-500"
                    } font-medium`}
                  >
                    {assignment.completed ? "Completed" : "Upcoming"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Assignments;
