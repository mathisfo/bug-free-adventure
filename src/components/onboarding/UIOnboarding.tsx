import { SelectedEnum } from "@prisma/client";
import { Alert, Button, Card, Checkbox, Label } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiAtSymbol,
  HiUser,
  HiArrowRight,
  HiArrowLeft,
  HiInformationCircle,
  HiIdentification,
} from "react-icons/hi";
import {
  OnboardingForm,
  onboardingSchema,
} from "../../server/schema/UserSchema";
import { api } from "../../utils/api";
import ToggleTheme from "../ToggleTheme";

const UIOnboarding = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<OnboardingForm>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      selectedComponents: [],
    },
  });
  const router = useRouter();
  const [page, setPage] = useState<string>("welcome");

  const ctx = api.useContext();

  const mutation = api.userRouter.submitOnboarding.useMutation();

  const validateAndGoToNextPage = async () => {
    const valid = await trigger(["USNEmail", "protusId", "name"]);

    if (valid) {
      setPage("components");
    }
  };

  const onSubmit: SubmitHandler<OnboardingForm> = (data: OnboardingForm) => {
    console.log(data);

    mutation.mutate(data, {
      onSuccess: () => {
        ctx.invalidate();
        router.reload();
      },
    });
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="back-layer text-color mb-8 h-screen w-full px-32 pb-16">
      <div className="h-8"></div>
      <div className="background-color relative mx-auto h-full w-full rounded-2xl">
        <div className="absolute right-4 top-4">
          <ToggleTheme />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {page == "welcome" ? (
            <div className="pl-12 pt-12 ">
              <h1 className="text-4xl ">Welcome to Progresso! 👋🏻</h1>
              <h2 className="text-md pt-2">
                We will now take you through a few steps to set up your
                dashboard to your needs.
              </h2>

              <div>
                {(errors.USNEmail || errors.protusId || errors.name) && (
                  <div>
                    {Object.values(errors).map((error) => (
                      <Alert
                        key={error?.type} // Use a unique property of the error object as key
                        color="failure"
                        className="mt-2 mr-2"
                        icon={HiInformationCircle}
                      >
                        <span>{error?.message}</span>
                      </Alert>
                    ))}
                  </div>
                )}
              </div>

              <h2 className="text-md pt-8 font-medium leading-6">
                First of all, we need some basic information about you!
              </h2>
              <label
                htmlFor="name"
                className="mb-2 block pt-8 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <p className="my-1 text-sm text-gray-400">
                Your name will be displayed on the leaderboard if you choose to
                participate in that.
              </p>
              <div className="flex w-1/5">
                <span
                  className={classNames(
                    errors.name
                      ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                      : " border-zinc-300 bg-zinc-200  text-gray-900 dark:border-zinc-600 dark:bg-zinc-700 dark:text-gray-400",
                    "inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm"
                  )}
                >
                  <HiUser
                    className={
                      errors.name
                        ? " text-red-700"
                        : "text-gray-600 dark:text-gray-200"
                    }
                  />
                </span>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={classNames(
                    errors.name
                      ? "border-red-500 bg-red-50 p-2.5 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                      : "border-zinc-300 bg-gray-50 text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-600  dark:bg-zinc-800 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    "block flex-1 rounded-none rounded-r-lg border p-2.5 text-sm"
                  )}
                  placeholder="Ola"
                  required={true}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="mb-2 block pt-8 text-sm font-medium text-gray-900 dark:text-white"
                >
                  USN mail
                </label>
                <p className="my-1 text-sm text-gray-400">
                  Your USN email will be used to identify you during the testing
                  phase. Rest assured that you will be anonymized in the final
                  report, and deleted after the test phase is finished.
                </p>
                <div className="flex w-1/5">
                  <span
                    className={classNames(
                      errors.name
                        ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                        : " border-zinc-300 bg-zinc-200  text-gray-900 dark:border-zinc-600 dark:bg-zinc-700 dark:text-gray-400",
                      "inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm"
                    )}
                  >
                    <HiAtSymbol
                      className={
                        errors.name
                          ? " text-red-700"
                          : "text-gray-600 dark:text-gray-200"
                      }
                    />
                  </span>
                  <input
                    {...register("USNEmail")}
                    type="email"
                    id="USNEmail"
                    color={errors.name && "failure"}
                    className={classNames(
                      errors.name
                        ? "border-red-500 bg-red-50 p-2.5 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                        : "border-zinc-300 bg-gray-50 text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-600  dark:bg-zinc-800 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                      "block flex-1 rounded-none rounded-r-lg border p-2.5 text-sm"
                    )}
                    placeholder="olanr@usn.no"
                    required={true}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="mb-2 block pt-8 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your ID
                </label>
                <p className="my-1 text-sm text-gray-400">
                  Your ID has been sent to you on your USN mail. It is a five
                  digit number starting with 22 (ex: 22170). If you have not
                  received a email please contact{" "}
                  <a
                    className="text-indigo-600"
                    href="mailto:boban.vesin@ntnu.no"
                  >
                    Boban Vesin
                  </a>
                  .
                </p>
                <div className="flex w-1/5">
                  <span
                    className={classNames(
                      errors.name
                        ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                        : " border-zinc-300 bg-zinc-200  text-gray-900 dark:border-zinc-600 dark:bg-zinc-700 dark:text-gray-400",
                      "inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm"
                    )}
                  >
                    <HiIdentification
                      className={
                        errors.name
                          ? " text-red-700"
                          : "text-gray-600 dark:text-gray-200"
                      }
                    />
                  </span>
                  <input
                    {...register("protusId")}
                    type="protusId"
                    id="number"
                    color={errors.name && "failure"}
                    className={classNames(
                      errors.name
                        ? "border-red-500 bg-red-50 p-2.5 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100"
                        : "border-zinc-300 bg-gray-50 text-gray-900  focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-600  dark:bg-zinc-800 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                      "block flex-1 rounded-none rounded-r-lg border p-2.5 text-sm"
                    )}
                    placeholder="22xxx"
                    required={true}
                  ></input>
                </div>
              </div>
              <Button
                className="absolute right-16 bottom-16"
                onClick={() => validateAndGoToNextPage()}
              >
                Choose your components
                <HiArrowRight className="ml-2" />{" "}
              </Button>
            </div>
          ) : page == "components" ? (
            <div className="pl-12 pt-12 pr-12">
              <h2 className="text-md font-medium leading-6">
                Second, we want to know which components you want to display in
                your dashboard.
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                This dashboard utilizes a number of different ways to represent
                your progress and engagement when you complete assignments.
                Please select the components you want your dashboard to include.
                We advice that you choose all of them, and later remove the ones
                you don&apos;t like or don&apos;t have any use of. You can
                always go back into settings to change your preferences later.
              </p>

              <div className="mt-5 grid select-none grid-cols-3 gap-4">
                <Card className="course-card relative rounded-2xl border border-gray-400  dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight">
                    History Graph
                  </h5>
                  <div className="grid grid-cols-3 ">
                    <p className="col-span-2 col-start-1 text-sm text-gray-700 dark:text-gray-400">
                      This component shows you how much you work per day
                      reprented as a graph.
                    </p>
                    <div className="col-start-3 ml-4 h-16 w-16 rounded bg-blue-200"></div>
                    <div className="col-start-1 row-start-2 mt-4 flex items-center gap-2">
                      <Checkbox
                        {...register("selectedComponents")}
                        id="select"
                        value={SelectedEnum.HISTORYGRAPH}
                      />
                      <Label htmlFor="select">Select</Label>
                    </div>
                  </div>
                </Card>
                <Card className="course-card relative rounded-2xl border border-gray-400  dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight">
                    TODO List
                  </h5>
                  <div className="grid grid-cols-3 ">
                    <p className="col-span-2 col-start-1 text-sm text-gray-700 dark:text-gray-400">
                      This component enables you to keep track of your
                      assignments with due dates.
                    </p>
                    <div className="col-start-3 ml-4 h-16 w-16 rounded bg-blue-200"></div>
                    <div className="col-start-1 row-start-2 mt-4 flex items-center gap-2">
                      <Checkbox
                        {...register("selectedComponents")}
                        id="select"
                        value={SelectedEnum.TODO}
                      />
                      <Label htmlFor="select">Select</Label>
                    </div>
                  </div>
                </Card>
                <Card className="course-card relative rounded-2xl border border-gray-400  dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight">
                    Activity History
                  </h5>
                  <div className="grid grid-cols-3 ">
                    <p className="col-span-2 col-start-1 text-sm text-gray-700 dark:text-gray-400">
                      This component is more detailed than Activity Graph. It
                      shows your exercise activty per day, as a list.
                    </p>
                    <div className="col-start-3 ml-4 h-16 w-16 rounded bg-blue-200"></div>
                    <div className="col-start-1 row-start-2 mt-4 flex items-center gap-2">
                      <Checkbox
                        {...register("selectedComponents")}
                        id="select"
                        value={SelectedEnum.EXERCISEHISTORY}
                      />
                      <Label htmlFor="select">Select</Label>
                    </div>
                  </div>
                </Card>
              </div>
              <Button
                className="absolute left-16 bottom-16"
                onClick={() => setPage("welcome")}
              >
                <HiArrowLeft className="mr-2" /> Go back
              </Button>
              <Button
                className="absolute right-16 bottom-16"
                onClick={() => setPage("leaderboard")}
              >
                Next page
                <HiArrowRight className="ml-2" />{" "}
              </Button>
            </div>
          ) : page == "leaderboard" ? (
            <div className="pl-12 pt-12 pr-12">
              <h2 className="text-md font-medium leading-6">
                Lastly, we want to know whether you are the competitive type.
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                By participating in the leaderboard you can compete against your
                classmates to see who completes the most assignments. Your name
                will show up on the leaderboard.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <Card className="course-card relative rounded-2xl border border-gray-400  dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight">
                    Leaderboard
                  </h5>
                  <div className="grid grid-cols-3 ">
                    <p className="col-span-2 col-start-1 text-sm text-gray-700 dark:text-gray-400">
                      I would like to participate in the leaderboard
                    </p>
                    <div className="col-start-3 ml-4 h-16 w-16 rounded bg-blue-200"></div>
                    <div className="col-start-1 row-start-2 mt-4 flex items-center gap-2">
                      <input
                        {...register("leaderboard")}
                        id="leaderboard"
                        name="leaderboard"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <Label htmlFor="select">Select</Label>
                    </div>
                  </div>
                </Card>
              </div>

              <Button
                className="absolute left-16 bottom-16"
                onClick={() => setPage("components")}
              >
                <HiArrowLeft className="mr-2" /> Go back
              </Button>
              <input
                className="absolute right-16 bottom-16 mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
                value={
                  mutation.isLoading
                    ? "Loading.."
                    : mutation.isSuccess
                    ? "Success!"
                    : "Submit"
                }
              />
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};

export default UIOnboarding;
