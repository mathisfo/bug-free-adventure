import { useSession } from "next-auth/react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { api } from "../../utils/api";
import Stats from "../../components/Stats";

const Profile = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "loading") {
    return (
      <div className="mx-auto mt-32 w-4/5 rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const {
    data: history,
    isLoading,
    isSuccess,
  } = api.userRouter.getExerciseHistoryOnUser.useQuery({
    userId: session.user.id,
  });

  if (isLoading || !isSuccess) {
    return (
      <div className="mx-auto mt-32 w-4/5 rounded-md p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
            <div className="loading h-8 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Stats />
      <div className="background-color text-color mr-4 w-1/2 rounded-r-lg p-16 ">
        <div className="mb-16 mt-12">
          <div className="grid grid-cols-3 items-baseline border-b dark:border-zinc-700">
            <p className=" col-start-1 text-sm font-semibold uppercase">Name</p>
            <p className=" col-span-2 col-start-2 text-lg">
              {session?.user?.name}
            </p>
          </div>
          <div className="my-8 grid grid-cols-3 items-baseline border-b dark:border-zinc-700">
            <p className=" col-start-1 text-sm font-semibold uppercase">
              E-mail
            </p>
            <p className=" col-span-2 col-start-2 text-lg">
              {session?.user?.USNEmail}
            </p>
          </div>
          <div className="my-8 grid grid-cols-3 items-baseline border-b dark:border-zinc-700">
            <p className=" col-start-1 text-sm font-semibold uppercase">ID</p>
            <p className=" col-span-2 col-start-2 text-lg">
              {session?.user?.protusId?.slice(6, 12)}
            </p>
          </div>
        </div>
        <div className="text-md mb-4 flex flex-row gap-3 font-semibold uppercase">
          <TrophyIcon className="h-5 w-5 text-[#fecd66]" />
          <p>Achievements</p>
        </div>
        <div className="my-8 grid grid-cols-3 items-baseline border-b dark:border-zinc-700">
          <p className=" col-start-1 text-sm font-semibold uppercase">
            Exercises done
          </p>
          <p className=" col-span-2 col-start-2 text-lg">{history.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
