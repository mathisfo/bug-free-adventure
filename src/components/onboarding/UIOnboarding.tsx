import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiAtSymbol, HiMail, HiUser } from "react-icons/hi";
import { OnboardingForm } from "../../server/schema/UserSchema";
import { api } from "../../utils/api";

const UIOnboarding = () => {
  const { register, handleSubmit } = useForm<OnboardingForm>();

  const mutation = api.userRouter.submitOnboarding.useMutation();
  const ctx = api.useContext();

  const onSubmit: SubmitHandler<OnboardingForm> = (data: OnboardingForm) => {
    console.log(data);

    mutation.mutate(data, {
      onSuccess: () => ctx.invalidate(),
    });
  };

  return (
    <div className="m-3 h-screen overflow-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="my-2 text-3xl">Welcome</h1>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <TextInput
                          {...register("name")}
                          id="name"
                          type="text"
                          icon={HiUser}
                          placeholder="Ola Nordmann"
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      USN Mail
                    </label>
                    <div className="mt-1">
                      <TextInput
                        {...register("USNEmail")}
                        id="USNEmail"
                        type="email"
                        icon={HiMail}
                        placeholder="olanr@usn.no"
                        required={true}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Your USN email will be used to identify you during the
                      testing phase. Rest assured that you will be anonymized in
                      the final report, and deleted after the test phase is
                      finished
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your ID
                    </label>
                    <div className="mt-1">
                      <TextInput
                        {...register("protusId", { valueAsNumber: true })}
                        id="protusId"
                        type="number"
                        icon={HiAtSymbol}
                        placeholder="22xxx"
                        required={true}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Your ID has been sent to you on your USN mail. It is a
                      five digit number starting with 22 (ex: 22170). If you
                      have not received a email please contact{" "}
                      <a
                        className="text-indigo-600"
                        href="mailto:boban.vesin@ntnu.no"
                      >
                        Boban Vesin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Components
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  This dashboard utilizes a number of different ways to
                  represent your progress and engagement when you complete
                  assignments. Please select the way you want to your dashboard
                  to look like
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 md:col-span-2 md:mt-0">
              <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Challenge Component
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This component will show you the challenges you have completed
                  and
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="select" />
                  <Label htmlFor="select">Select</Label>
                </div>
              </Card>

              <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Challenge Component
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This component will show you the challenges you have completed
                  and
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="select" />
                  <Label htmlFor="select">Select</Label>
                </div>
              </Card>

              <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Challenge Component
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This component will show you the challenges you have completed
                  and
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="select" />
                  <Label htmlFor="select">Select</Label>
                </div>
              </Card>

              <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Challenge Component
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This component will show you the challenges you have completed
                  and
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="select" />
                  <Label htmlFor="select">Select</Label>
                </div>
              </Card>
              <Card href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Challenge Component
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This component will show you the challenges you have completed
                  and
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="select" />
                  <Label htmlFor="select">Select</Label>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Leaderboard
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  You can compete against your classmates by completed as many
                  assignments as possible. It is optional and completely
                  anonymous.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">Leaderboard</legend>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true"
                    >
                      Leaderboard
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            {...register("leaderboard")}
                            id="leaderboard"
                            name="leaderboard"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Yes
                          </label>
                          <p className="text-gray-500">
                            I would like to participate in the leaderboard
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          className="m-inline-flex m-7 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UIOnboarding;
