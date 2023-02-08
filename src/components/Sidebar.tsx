import { Disclosure } from "@headlessui/react";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Spinner } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiOutlineLogout } from "react-icons/hi";
import SignIn from "./auth/SignIn";
import Greeting from "./Greeting";
import Onboarding from "./onboarding/Onboarding";
import UIOnboarding from "./onboarding/UIOnboarding";
import ToggleTheme from "./ToggleTheme";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();
  const iconPath = process.env.PUBLIC_URL + "/icons/";

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
      children: [{ name: "Java", href: "/courses/Java" }],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
      current: router.asPath === "/settings",
    },
  ];

  const { data: session, status } = useSession();

  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#1C1C1F] dark:hover:text-white hover:bg-indigo-50";
  const currentItemStyling =
    "text-gray-900 dark:text-white bg-indigo-50 dark:bg-[#303335]/75 dark:hover:bg-[#1C1C1F] hover:bg-indigo-100";

  <div className="mx-auto w-full rounded-md p-4">
    <div className="flex animate-pulse space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="loading h-8 rounded"></div>
        <div className="loading h-8 rounded"></div>
        <div className="loading h-8 rounded"></div>
        <div className="loading h-8 rounded"></div>
        <div className="loading h-8 rounded"></div>
      </div>
    </div>
  </div>;

  if (status === "loading") {
    return (
      <div className="back-layer grid grid-cols-5 px-2 pt-2 ">
        <div className="grid-col-1 z-index-2 grid h-screen">
          <div className="sidebar-color relative rounded-l-lg py-8 dark:border-gray-500 ">
            <div className="mb-12 mt-12 flex justify-center">
              {/*
              Uncomment when logo is found
               <Image
                src="/logo.svg"
                alt="next"
                layout="fill"
                className="w-1/3"
              /> */}
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
          <div className="w-full">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {session ? (
        <div>
          {!session.user?.onBoarded ? (
            <UIOnboarding />
          ) : (
            <div className="back-layer grid grid-cols-5 px-2 pt-2 ">
              <div className="grid-col-1 z-index-2 grid h-screen">
                <div className="sidebar-color relative rounded-l-lg py-8 dark:border-gray-500 ">
                  <div className="mb-12 mt-6 flex justify-center">
                    <img src="/logo.svg" alt="next" className="w-1/3" />
                  </div>
                  <div className="flex flex-shrink-0 justify-center px-2">
                    <Greeting />
                  </div>
                  <div className="mt-5 flex flex-grow flex-col">
                    <nav className="flex-1 space-y-1 px-2" aria-label="Sidebar">
                      {navigation.map((item) =>
                        !item.children ? (
                          <div key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? currentItemStyling
                                  : menuItemStyling,
                                "group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium"
                              )}
                            >
                              <item.icon
                                className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                                      className={classNames(
                                        item.current
                                          ? currentItemStyling
                                          : menuItemStyling,
                                        "group flex w-full items-center rounded-md py-2 pl-11 pl-2 text-sm font-medium opacity-60"
                                      )}
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
                        <div className="text-color">{session.user?.name}</div>
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
                <div className="w-full">{children}</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Sidebar;
