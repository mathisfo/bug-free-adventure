const LeaderboardPreview = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const leaderboard = [
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b1",
      name: "Joe",
      score: 100,
    },
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b2",
      name: "Ola",
      score: 90,
    },
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b3",
      name: "Me",
      score: 80,
    },
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b4",
      name: "Jane Smith",
      score: 70,
    },
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b5",
      name: "John Doe",
      score: 60,
    },
    {
      userId: "5f9f1b9b0b9b9b0017b0b1b6",
      name: "Jane Doe",
      score: 50,
    },
  ];

  const leaderboardTop10 = leaderboard.slice(0, 10);
  const leaderboardPosition =
    leaderboard.findIndex((x) => x.userId === "Me") + 1;
  const userScore = leaderboard[leaderboardPosition - 1]?.score;

  return (
    <div className="relative  overflow-x-auto rounded-lg">
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
                  person.userId == "Me"
                    ? `bg-[#BFF7E0] dark:bg-[#BFF7E0] dark:text-gray-700`
                    : `bg-[#fff] dark:bg-[#212124]`,
                  `text-color border-t  font-semibold dark:border-zinc-700 `
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
          {leaderboardTop10.some((e) => e.name === "Me") ? (
            <></>
          ) : (
            <tr className="text-color border-t-2 border-[#EFADBF]  bg-[#F7D6DF] font-semibold dark:text-gray-700  ">
              <td className="grid place-items-center border-r border-[#F7D6DF] py-2 px-6 text-center">
                {leaderboardPosition}
              </td>
              <td className=" py-2 px-6">Me</td>
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

export default LeaderboardPreview;
