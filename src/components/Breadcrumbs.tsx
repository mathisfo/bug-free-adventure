import { ChartBarIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface TopMenuProps {
  currentPage?: string;
  currentType?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TopMenu = (props: TopMenuProps) => {
  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="text-color h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  const router = useRouter();
  const { type } = router.query;

  const types = ["examples", "challenges", "coding"];

  const currentItemStyling =
    "text-gray-900 dark:text-white bg-indigo-50 dark:bg-[#303335]/75 dark:hover:bg-[#1C1C1F] hover:bg-indigo-100";
  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#1C1C1F] dark:hover:text-white hover:bg-indigo-50";

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="background-color mt-2">
      <div className="mx-auto max-w-7xl">
        <div className="place-y-0 flex h-12 items-center justify-between py-6 dark:border-gray-500 md:justify-start md:space-x-4">
          <div
            className={classNames(
              router.asPath === "/courses"
                ? currentItemStyling
                : menuItemStyling,
              "ml-8 flex justify-start rounded-lg p-2 hover:bg-indigo-100 dark:hover:bg-[#503597]"
            )}
          >
            <Link href="/courses/Java">
              <div className="flex flex-row items-center text-sm font-semibold uppercase hover:cursor-pointer">
                <ChartBarIcon className="text-color mr-1 h-6 w-6 "></ChartBarIcon>
                Java
              </div>
            </Link>
          </div>
          {props.currentPage ? (
            <div className="flex flex-row">
              {chevron}
              <a href={"/courses/Java/" + props.currentPage} rel="noreferrer">
                <p className="text-color pl-4 text-sm font-semibold uppercase">
                  {props.currentPage}
                </p>
              </a>
            </div>
          ) : (
            <></>
          )}
          {props.currentType ? (
            <div className="text-color flex flex-row items-center text-sm font-semibold uppercase">
              {chevron}
              <div className="pl-4">
                <Dropdown
                  label={props.currentType.toUpperCase()}
                  inline={true}
                  className="dark:bg-[#26272A]"
                >
                  {types.map((item) => (
                    <a
                      href={
                        "/courses/Java/" +
                        props.currentPage +
                        "/" +
                        item +
                        "?type=" +
                        item
                      }
                      rel="noreferrer"
                      key={item}
                    >
                      <Dropdown.Item
                        className={classNames(
                          props.currentType == item.toUpperCase()
                            ? currentItemStyling
                            : menuItemStyling
                        )}
                      >
                        {item.toUpperCase()}
                      </Dropdown.Item>
                    </a>
                  ))}
                </Dropdown>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
