import { EyeSlashIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ToDo } from "@prisma/client";

const ExercisePlannerPreview = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const todo: ToDo[] = [
    {
      todoId: "abc123",
      dueDate: new Date("2022-03-01"),
      completed: false,
      name: "Do 3 exercises",
      completedAt: null,
      createdAt: new Date("2022-02-28"),
      userId: "user123",
    },
    {
      todoId: "def456",
      dueDate: new Date("2022-03-02"),
      completed: true,
      name: "Assignment 1",
      completedAt: new Date("2022-03-01"),
      createdAt: new Date("2022-02-28"),
      userId: "user456",
    },
    {
      todoId: "ghi789",
      dueDate: new Date("2022-03-03"),
      completed: false,
      name: "Assignment 2",
      completedAt: null,
      createdAt: new Date("2022-02-28"),
      userId: "user789",
    },
  ];

  return (
    <div className="course-card text-color relative mb-2 h-auto w-auto rounded-xl p-6">
      <div className="tems-center mx-8 mb-8 mt-2 grid grid-cols-2 grid-rows-1">
        <h1 className="col-start-1 mx-auto flex items-center text-4xl font-semibold">
          Exercise <p className="text-blue-color">Planner</p>
        </h1>
      </div>

      {todo.length > 0 ? (
        <div className={`mb-2 grid grid-rows-${todo.length}`}>
          {todo.map((item, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-5 row-start-${
                  index + 1
                } mb-3 flex flex-row items-end border-b py-2 dark:border-zinc-700 ${
                  item.completed && `opacity-50`
                }`}
              >
                <p className={`col-start-1 col-end-3 font-semibold`}>
                  {item.name}
                </p>
                <p className="text-color-light col-start-3 col-end-5 text-sm">
                  {item.dueDate.toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
                <div className="col-start-5 mr-2 flex flex-row items-center gap-4 place-self-end">
                  <div
                    className={`${
                      item.completed
                        ? `border-[#988efe] opacity-75`
                        : `border-zinc-300`
                    } grid h-6 w-6 rounded-lg  border-2 bg-white dark:bg-[#fcfcfc]`}
                  >
                    {item.completed ? (
                      <div className=" h-4 w-4 place-self-center rounded-md bg-[#988efe]"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <TrashIcon
                    className={classNames(
                      !item.completed ? `opacity-50` : ``,
                      `h-4 w-4`
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mb-2 text-sm font-semibold">
          Add your first to do by clicking the plus sign!{" "}
        </div>
      )}
      <div className="mb-2 flex grid grid-cols-10 grid-rows-1 flex-row">
        <PlusIcon className="col-start-1 col-end-2 h-7 w-7 self-center" />
      </div>

      <div className="text-color-light absolute bottom-4 right-8 flex cursor-pointer flex-row gap-2 text-sm">
        <p>Hide completed tasks</p>

        <EyeSlashIcon className="h-4 w-4 place-self-center" />
      </div>
    </div>
  );
};

export default ExercisePlannerPreview;
