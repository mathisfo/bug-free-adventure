import { PlusIcon } from "@heroicons/react/24/outline";
import { ToDo } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { log } from "console";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToDoForm } from "../../server/schema/UserSchema";
import { api } from "../../utils/api";

const ToDoComp = () => {
  const ctx = api.useContext();

  const { data: session, status } = useSession({ required: true });
  const { register, handleSubmit } = useForm<ToDoForm>();

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  const addToDoMutation = api.userRouter.addToDoToUser.useMutation({
    async onMutate(newToDo) {
      // Optimistic update, delete the transaction from the list immediately
      await ctx.userRouter.getToDoOnUser.cancel();
      const prevData = ctx.userRouter.getToDoOnUser.getData({
        userId: session.user.id,
      });
      ctx.userRouter.getToDoOnUser.setData(
        { userId: session.user.id },
        (old: any) => [...old, newToDo.toDo]
      );

      return { prevData };
    },
    // Invalidate the query after the mutation is complete to sync wit server
    onSettled() {
      ctx.userRouter.getToDoOnUser.invalidate({ userId: session.user.id });
    },
  });

  const setCompletedMutation = api.userRouter.setToDoCompleted.useMutation();

  const {
    data: todo,
    isSuccess,
    isLoading,
  } = api.userRouter.getToDoOnUser.useQuery({ userId: session.user.id });

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>;
  }

  const onSubmit: SubmitHandler<ToDoForm> = (data: ToDoForm) => {
    addToDoMutation.mutate(
      {
        toDo: { ...data, userId: session.user.id },
      },
      {
        onError: () => {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "failed to add to do ",
          });
        },
      }
    );
  };

  const onComplete = (todoId: string) => {
    setCompletedMutation.mutate(
      {
        todoId: todoId,
      },
      {
        onSuccess: () => {
          ctx.invalidate();
        },
        onError: () => {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "failed to set todo to completed",
          });
        },
      }
    );
  };

  return (
    <div className="course-card text-color mx-4 mb-8 h-full w-full rounded-2xl p-12">
      <div className="tems-center mx-8 mb-8 mt-2 grid grid-cols-2 grid-rows-1">
        <h1 className="col-start-1 mx-auto flex items-center text-4xl font-semibold">
          TO <p className="text-blue-color">DO</p>S
        </h1>
        <PlusIcon className="col-start-2 h-8 w-8 cursor-pointer place-self-end" />
      </div>

      {todo.length > 0 ? (
        <div className={`grid grid-rows-${todo.length}`}>
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
                <div className="col-start-5 mr-8 place-self-end">
                  <div
                    onClick={() => onComplete(item.todoId)}
                    className={`${
                      item.completed
                        ? `border-[#988efe] opacity-75`
                        : `border-zinc-300`
                    } grid h-6 w-6 cursor-pointer rounded-lg  border-2 bg-white hover:border-[#627bfc] dark:bg-[#fcfcfc]`}
                  >
                    {item.completed ? (
                      <div className=" h-4 w-4 place-self-center rounded-md bg-[#988efe]"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No todos yet!</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input type="text" {...register("name")} id="name"></input>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          {...register("dueDate", { valueAsDate: true })}
          id="dueDate"
        ></input>
        <button type="submit">
          {addToDoMutation.isLoading ? "Loading.." : "Add to do"}
        </button>
      </form>
    </div>
  );
};

export default ToDoComp;
