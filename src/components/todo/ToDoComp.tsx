import {
  PlusIcon,
  EyeSlashIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ToDo } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { log } from "console";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Updater } from "react-query/types/core/utils";
import { ToDoForm } from "../../server/schema/UserSchema";
import { api } from "../../utils/api";

const ToDoComp = () => {
  const ctx = api.useContext();

  const { data: session, status } = useSession({ required: true });
  const { register, handleSubmit, reset } = useForm<ToDoForm>();
  const [openAddToDo, setOpenAddToDo] = useState(false);
  const [showCompleted, setShowCompleted] = useState(true);

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  const {
    data: todo,
    isSuccess,
    isLoading,
  } = api.userRouter.getToDosOnUser.useQuery({ userId: session.user.id });

  const addToDoMutation = api.userRouter.addToDoToUser.useMutation({
    async onMutate(newToDo) {
      // Optimistic update, delete the transaction from the list immediately
      await ctx.userRouter.getToDosOnUser.cancel();
      const prevData = ctx.userRouter.getToDosOnUser.getData({
        userId: session.user.id,
      });
      ctx.userRouter.getToDosOnUser.setData(
        { userId: session.user.id },
        (old: any) => [...old, newToDo.toDo]
      );

      return { prevData };
    },
    // Invalidate the query after the mutation is complete to sync wit server
    onSettled() {
      ctx.userRouter.getToDosOnUser.invalidate({ userId: session.user.id });
    },
  });

  const setCompletedMutation = api.userRouter.setToDoCompleted.useMutation({
    async onMutate(newTodo) {
      // Optimistic update, delete the transaction from the list immediately
      await ctx.userRouter.getToDosOnUser.cancel();
      const prevData = ctx.userRouter.getToDosOnUser.getData({
        userId: session.user.id,
      });
      ctx.userRouter.getToDosOnUser.setData(
        { userId: session.user.id },
        (old: any) => {
          const newTodos = old.map((todo: ToDo) => {
            if (todo.todoId === newTodo.todoId) {
              return { ...todo, completed: true };
            }
            return todo;
          });
          return newTodos;
        }
      );

      return { prevData };
    },
    // Invalidate the query after the mutation is complete to sync wit server
    onSettled() {
      ctx.userRouter.getToDosOnUser.invalidate({ userId: session.user.id });
    },
  });

  const deleteTodoMutation = api.userRouter.deleteTodo.useMutation({
    async onMutate(todoId) {
      // Optimistic update, delete the transaction from the list immediately
      await ctx.userRouter.getToDosOnUser.cancel();
      const prevData = ctx.userRouter.getToDosOnUser.getData({
        userId: session.user.id,
      });
      ctx.userRouter.getToDosOnUser.setData(
        { userId: session.user.id },
        (old: any) => {
          const newTodos = old.filter((todo: ToDo) => {
            return todo.todoId !== todoId.todoId;
          });
          return newTodos;
        }
      );
      return { prevData };
    },
    onSettled() {
      ctx.userRouter.getToDosOnUser.invalidate({ userId: session.user.id });
    },
  });

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
    reset();
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

  const onDeleteTodo = (todoId: string) => {
    deleteTodoMutation.mutate(
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
            message: "Failed to delete todo",
          });
        },
      }
    );
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="course-card text-color relative mx-4 mb-2 h-full w-full rounded-2xl p-12">
      <div className="tems-center mx-8 mb-8 mt-2 grid grid-cols-2 grid-rows-1">
        <h1 className="col-start-1 mx-auto flex items-center text-4xl font-semibold">
          TO <p className="text-blue-color">DO</p>S
        </h1>
      </div>

      {todo.length > 0 ? (
        <div className={`mb-2 grid grid-rows-${todo.length}`}>
          {todo.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  !showCompleted && item.completed
                    ? `hidden`
                    : `grid grid-cols-5 row-start-${
                        index + 1
                      } mb-3 flex flex-row items-end border-b py-2 dark:border-zinc-700 ${
                        item.completed && `opacity-50`
                      }`
                }
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
                  <TrashIcon
                    onClick={() => onDeleteTodo(item.todoId)}
                    className={classNames(
                      !item.completed ? `opacity-50` : ``,
                      `h-4 w-4 cursor-pointer`
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex grid grid-cols-10 grid-rows-1 flex-row "
      >
        <PlusIcon
          onClick={() => setOpenAddToDo(!openAddToDo)}
          className="col-start-1 col-end-2 h-7 w-7 cursor-pointer self-center"
        />
        {openAddToDo ? (
          <div className="col-start-2 col-end-10 grid grid-cols-5">
            <input
              required
              type="text"
              {...register("name")}
              id="name"
              className="col-start-1 col-end-3 mr-1 rounded border-0 opacity-75 dark:bg-[#212124]"
              placeholder="Your todo.."
            ></input>

            <input
              type="date"
              {...register("dueDate", { valueAsDate: true })}
              id="dueDate"
              required
              className="col-start-3 col-end-5 rounded border-0 text-gray-700 text-white dark:bg-[#212124]"
            ></input>
            <button
              type="submit"
              className="col-start-5 place-self-end self-center rounded bg-[#627bfc] px-2 py-1 text-sm font-semibold text-white opacity-80"
            >
              ADD
            </button>
          </div>
        ) : (
          <></>
        )}{" "}
      </form>

      <div
        onClick={() => setShowCompleted(!showCompleted)}
        className="text-color-light absolute bottom-4 right-8 flex cursor-pointer flex-row gap-2 text-sm"
      >
        <p>{showCompleted ? "Hide completed tasks" : "Show completed tasks"}</p>
        {showCompleted ? (
          <EyeSlashIcon className="h-4 w-4 place-self-center" />
        ) : (
          <EyeIcon className="h-4 w-4 place-self-center" />
        )}
      </div>
    </div>
  );
};

export default ToDoComp;
