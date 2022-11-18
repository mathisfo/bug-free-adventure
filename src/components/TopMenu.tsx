import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const TopMenu = () => {
  const router = useRouter();

  const navigation = [
    {
      name: "Examples",
      href: "/examples",
      current: router.asPath === "/examples",
    },
    {
      name: "Coding",
      href: "/coding",
      current: router.asPath === "/coding",
    },
    {
      name: "Challenges",
      href: "/challenges",
      current: router.asPath === "/challenges",
    },
  ];

  const currentItemStyling =
    "text-color uppercase text-sm font-semibold bg-indigo-100 dark:bg-[#6f69ee] dark:hover:bg-[#847FF7]";
  const menuItemStyling = "text-color uppercase text-sm font-semibold";

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="background-color">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-12 items-center justify-between border-b-2 border-gray-100 py-6 dark:border-gray-500 md:justify-start md:space-x-8">
          <div
            className={classNames(
              router.asPath === "/courses"
                ? currentItemStyling
                : menuItemStyling,
              "ml-8 flex justify-start rounded-lg p-2 hover:bg-indigo-100 dark:hover:bg-[#503597]"
            )}
          >
            <a
              href="/courses"
              className="flex flex-row items-center uppercase "
            >
              <ChartBarIcon className="text-color mr-1 h-6 w-6 "></ChartBarIcon>
              Java
            </a>
          </div>
          {navigation.map((item) => (
            <div
              key={item.name}
              className={classNames(
                item.current ? currentItemStyling : menuItemStyling,
                "rounded-lg px-4 py-2 hover:bg-indigo-100 dark:hover:bg-[#503597]"
              )}
            >
              <a href={item.href}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
