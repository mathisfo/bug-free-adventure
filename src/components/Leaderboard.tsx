import { useSession } from "next-auth/react";
import { api } from "../utils/api";

const Leaderboard = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const { data: session, status } = useSession();

  const {
    data: leaderboard,
    isLoading,
    isSuccess,
  } = api.userRouter.getLeaderBoard.useQuery();

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>;
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const leaderboardTop10 = leaderboard.slice(0, 10);
  const leaderboardPosition =
    leaderboard.findIndex((x) => x.userId === session?.user.id) + 1;
  const userScore = leaderboard[leaderboardPosition - 1]?.score;

  return (
    <div className="relative w-4/5 overflow-x-auto rounded-lg">
      <div className="text-color absolute right-0 top-0 grid h-6 w-16 place-items-center rounded-t-lg bg-gray-200 text-sm font-semibold uppercase dark:bg-[#212124] ">
        <p>java</p>
      </div>
      <table className="text-color mt-6 w-full table-fixed text-left text-sm">
        <thead>
          <tr className="border-b border-[#988efe] bg-[#988efe] uppercase text-white ">
            <th className="w-1/5 rounded-tl-lg border-r border-[#988efe] px-6 ">
              Ranking
            </th>
            <th className="w-3/5 py-2 px-6">Name</th>
            <th className="w-1/5 border-l border-[#988efe] py-2 px-6 ">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboardTop10.map((person, index) => {
            return (
              <tr
                key={index}
                className={classNames(
                  person.userId == session?.user.id
                    ? `bg-[#BFF7E0] dark:bg-[#BFF7E0] dark:text-gray-700`
                    : `bg-[#fafafa]`,
                  `text-color border-t  font-semibold dark:border-zinc-700 dark:bg-[#303335]`
                )}
              >
                <td className="grid place-items-center py-2 px-6 text-center">
                  <div
                    className={classNames(
                      index == 0
                        ? `bg-gradient-to-tr from-[#feda15] via-[#feea74] to-[#feda15] dark:text-gray-700`
                        : index == 1
                        ? `bg-gradient-to-tr from-[#a7b1c9] via-[#dee2e7] to-[#a7b1c9] dark:text-gray-700`
                        : index == 2
                        ? `bg-gradient-to-tr from-[#d89142] via-[#eaa85f] to-[#d89142] dark:text-gray-700`
                        : ``,
                      "h-5 w-5 rounded-2xl text-center"
                    )}
                  >
                    {index + 1}
                  </div>
                </td>
                <td className="py-2 px-6">{person.name}</td>
                <td className=" py-2 px-6 text-center">{person.score}</td>
              </tr>
            );
          })}
          {leaderboardTop10.some((e) => e.userId === session?.user.id) ? (
            <></>
          ) : (
            <tr className="text-color border-t-2 border-[#EFADBF]  bg-[#F7D6DF] font-semibold dark:text-gray-700  ">
              <td className="grid place-items-center border-r border-[#F7D6DF] py-2 px-6 text-center">
                {leaderboardPosition}
              </td>
              <td className=" py-2 px-6">{session?.user.name}</td>
              <td className=" border-l border-[#F7D6DF] py-2 px-6 text-center">
                {userScore}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
