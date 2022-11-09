
import {
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline";

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

  return (
    <div className="assignment-background h-64 w-4/5 rounded-lg p-4 pl-6 pt-6">
      {assignments.map((assignment) => {
        return (
          <div key={assignment.title} className="col-start-1 grid">
            <div className="mb-4 flex flex-row space-x-6">
              <div>
                <div className="icon w-12 rounded-3xl p-2 text-white"><ClipboardDocumentCheckIcon /></div>
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
