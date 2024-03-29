import { Disclosure } from "@headlessui/react";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  UserCircleIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineLogout } from "react-icons/hi";
import SignIn from "./auth/SignIn";
import Greeting from "./Greeting";
import UIOnboarding from "./onboarding/UIOnboarding";
import ToggleTheme from "./ToggleTheme";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: ChartBarIcon,
      current: router.asPath === "/",
    },
    {
      name: "Courses",
      icon: FolderIcon,
      current: router.asPath === "/courses",
      children: [
        { name: "Java", href: "/courses/Java", icon: CommandLineIcon },
      ],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
      current: router.asPath === "/settings",
    },
  ];

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#1C1C1F] dark:hover:text-white hover:bg-indigo-50";
  const currentItemStyling =
    "text-gray-900 dark:text-white bg-indigo-50 dark:bg-[#303335]/75 dark:hover:bg-[#1C1C1F] hover:bg-indigo-100";

  if (status === "loading") {
    return (
      <div className="back-layer grid grid-cols-5 px-2 pt-2 ">
        <div className="grid-col-1 z-index-2 grid h-screen">
          <div className="sidebar-color relative rounded-l-lg py-8 dark:border-gray-500 ">
            <div className="mb-6 mt-6 flex justify-center">
              <img src="/logo.svg" alt="next" className="w-1/3" />
            </div>
            <div className="flex justify-center">
              <div className="loading h-8 w-44 rounded"></div>
            </div>
            <div className="mt-5 flex-1 space-y-1 px-4">
              <div className="loading h-8 rounded"></div>
              <div className="loading h-8 rounded"></div>
              <div className="loading h-8 rounded"></div>
            </div>
          </div>
        </div>
        <div className="grid-col-2 background-color relative col-span-4 grid overflow-auto rounded-r-lg">
          <div className="absolute right-0 top-4">
            <div className="mr-8 ">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {session.user.onBoarded ? (
        <div className="back-layer grid grid-cols-5 px-2 pt-2 ">
          <div className="grid-col-1 z-index-2 grid h-screen">
            <div className="sidebar-color relative rounded-l-lg py-8 dark:border-gray-500 ">
              <div className="mb-6 mt-6 flex items-center justify-center">
                <img src="/logo.svg" alt="next" className="w-1/3" />
              </div>
              <div className="flex-y-grow my-8 flex justify-center px-4">
                <Greeting />
              </div>
              <div className="mt-5 flex flex-grow flex-col">
                <nav className="flex-1 space-y-1 px-2" aria-label="Sidebar">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <Link href={item.href}>
                          <div
                            className={classNames(
                              item.current
                                ? currentItemStyling
                                : menuItemStyling,
                              "group flex w-full cursor-pointer items-center rounded-md py-2 pl-2 text-sm font-medium"
                            )}
                          >
                            <item.icon
                              className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p>{item.name}</p>
                          </div>
                        </Link>
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
                                  className={classNames(
                                    item.current
                                      ? currentItemStyling
                                      : menuItemStyling,
                                    "group flex w-full items-center rounded-md py-2 pl-11 pl-6 text-sm font-medium opacity-80"
                                  )}
                                >
                                  <subItem.icon
                                    className="mr-1 h-5 w-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-gray-300"
                                    aria-hidden="true"
                                  />
                                  <p className="text-gray-700 dark:text-gray-300">
                                    {subItem.name}
                                  </p>
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
                <div className="group block flex w-full flex-shrink-0 flex-row items-center">
                  <Link href="/profile">
                    <div className="flex cursor-pointer flex-row items-center">
                      <UserCircleIcon className="text-color mr-2 h-8 w-8"></UserCircleIcon>

                      <p className="text-color">{session.user?.name}</p>
                    </div>
                  </Link>

                  <HiOutlineLogout
                    className="text-color absolute right-4 h-6 w-6 cursor-pointer"
                    onClick={() => signOut()}
                  ></HiOutlineLogout>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col-2 background-color relative col-span-4 grid overflow-auto rounded-r-lg">
            <div className="absolute right-0 top-4">
              <div className="mr-8 ">
                <ToggleTheme />
              </div>
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      ) : (
        <UIOnboarding />
      )}
    </div>
  );
};

export default Sidebar;
