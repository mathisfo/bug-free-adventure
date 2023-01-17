import { Disclosure } from "@headlessui/react";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { HiOutlineLogout } from "react-icons/hi";
import { trpc } from "../utils/trpc";
import Greeting from "./Greeting";
import ToggleTheme from "./ToggleTheme";
import { signOut, useSession } from "next-auth/react";
import SignIn from "./auth/SignIn";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: ChartBarIcon,
      current: router.asPath === "/dashboard",
    },
    {
      name: "Courses",
      icon: FolderIcon,
      current: router.asPath === "/courses",
      children: [
        { name: "Java", href: "/courses/Java" },
        { name: "Python", href: "/courses/Python" },
      ],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
      current: router.asPath === "/settings",
    },
  ];

  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  const { data: session } = useSession();

  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#503597] dark:hover:text-white hover:bg-indigo-50";
  const currentItemStyling =
    "text-violet-800 dark:text-white bg-indigo-100 dark:bg-[#6f69ee] dark:hover:bg-[#847FF7] hover:text-gray-900 hover:bg-indigo-50";

  return (
    <div>
      {session ? (
        <div className="back-layer grid grid-cols-5 px-2 pt-2 ">
          <div className="grid-col-1 z-index-2 grid h-screen">
            <div className="background-color relative rounded-l-lg border-r-4 py-8 dark:border-gray-500 ">
              <div className="flex flex-shrink-0 justify-center px-2">
                <Greeting />
              </div>
              <div className="mt-5 flex flex-grow flex-col">
                <nav
                  className="background-color flex-1 space-y-1 px-2"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? currentItemStyling : menuItemStyling,
                            "group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-violet-800"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 h-6 w-6 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? currentItemStyling
                                  : menuItemStyling,
                                "group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-violet-800"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-3 h-6 w-6 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "rotate-90 text-gray-400"
                                    : "text-gray-300",
                                  "ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 dark:text-gray-400 dark:hover:bg-[#503597] dark:hover:text-white"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
              <div className="absolute bottom-4 flex w-full flex-shrink-0 border-t border-gray-200 p-4 dark:border-gray-500">
                <a href="#" className="group block w-full flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div>
                      <UserCircleIcon className="text-color h-8 w-8"></UserCircleIcon>
                    </div>
                    {isLoading || !isSuccess ? (
                      <div className="mx-auto w-full rounded-md">
                        <div className="flex animate-pulse space-x-4">
                          <div className="flex-1 py-1">
                            <div className="loading h-6 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-color">
                        {learnerAnalytics.learner.id}
                      </div>
                    )}
                    <div>
                      <HiOutlineLogout
                        className="text-color ml-14 h-6 w-6"
                        onClick={() => signOut()}
                      ></HiOutlineLogout>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-col-2 background-color relative col-span-4 grid overflow-auto rounded-r-lg">
            <div className="absolute right-0 top-4">
              <div className="mr-8 ">
                <ToggleTheme />
              </div>
            </div>
            <div className="w-full py-4 ">{children}</div>
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Sidebar;
