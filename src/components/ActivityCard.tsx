import { useTheme } from "next-themes";
import Link from "next/link";
import DonutChart from "./DonutChart";

const ActivityCard = ({
  type,
  bg,
  boxColor,
  fillColor,
  fillColorDark,
  moduleName,
}: {
  type: string;
  bg: string;
  boxColor: string;
  fillColor: string;
  fillColorDark: string;
  moduleName: string;
}) => {
  const { theme } = useTheme();

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      className={`${
        theme == "dark" ? "bg-[#1c1f37]" : bg
      }  grid  w-4/5 grid-cols-5 rounded-lg text-white`}
    >
      <div className="col-span-3 col-start-1 flex flex-row items-baseline space-x-2 p-4 font-semibold">
        <p className="text-6xl">5</p>
        <p className="text-2xl lowercase">{type + "s"}</p>
      </div>
      <div
        className={`${
          theme == "dark" ? "bg-[#2F3358]" : boxColor
        } col-span-2 col-start-4 row-span-2 h-full rounded-lg p-4`}
      >
        <DonutChart
          size="110px"
          bg="white"
          fillColor={fillColor}
          fillColorDark={fillColorDark}
        />
      </div>
      <div className="col-span-3 col-start-1 flex flex-row items-center space-x-1 p-4 text-sm">
        <Link
          href={{
            pathname: `Java/${moduleName}/${type}`,
            query: { type: type.toUpperCase() },
          }}
        >
          <div className="flex flex-row hover:cursor-pointer">
            <p>{"Show all " + type + "s"}</p>
            <p className="self-center">{chevron}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard;
