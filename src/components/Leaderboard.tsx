const Leaderboard = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const ranking = [
    { rank: 1, name: "Person", score: 569 },
    { rank: 2, name: "Person 1", score: 540 },
    { rank: 3, name: "Person 2", score: 489 },
    { rank: 4, name: "Person 3", score: 411 },
    { rank: 5, name: "Person 4", score: 393 },
    { rank: 6, name: "Person 5", score: 391 },
    { rank: 7, name: "Person 6", score: 298 },
    { rank: 8, name: "Person 7", score: 297 },
    { rank: 9, name: "Person 8", score: 282 },
    { rank: 10, name: "Person 9", score: 270 },
  ];

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
          {ranking.map((person) => {
            return (
              <tr
                key={person.rank}
                className="text-color border-t bg-[#F5F5F5] font-semibold dark:border-zinc-700 dark:bg-[#303335] "
              >
                <td className="grid place-items-center py-2 px-6 text-center">
                  <div
                    className={classNames(
                      person.rank == 1
                        ? `bg-gradient-to-tr from-[#feda15] via-[#feea74] to-[#feda15] dark:text-gray-700`
                        : person.rank == 2
                        ? `bg-gradient-to-tr from-[#a7b1c9] via-[#dee2e7] to-[#a7b1c9] dark:text-gray-700`
                        : person.rank == 3
                        ? `bg-gradient-to-tr from-[#d89142] via-[#eaa85f] to-[#d89142] dark:text-gray-700`
                        : ``,
                      "h-5 w-5 rounded-2xl text-center"
                    )}
                  >
                    {person.rank}
                  </div>
                </td>
                <td className=" py-2 px-6">{person.name}</td>
                <td className=" py-2 px-6 text-center">{person.score}</td>
              </tr>
            );
          })}
          <tr className="text-color border-t-2 border-[#EFADBF]  bg-[#F7D6DF] font-semibold dark:text-gray-700  ">
            <td className="grid place-items-center border-r border-[#F7D6DF] py-2 px-6 text-center">
              16
            </td>
            <td className=" py-2 px-6">Me</td>
            <td className=" border-l border-[#F7D6DF] py-2 px-6 text-center">
              130
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
