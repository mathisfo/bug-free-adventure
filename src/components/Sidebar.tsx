import { useRouter } from "next/router";
import { useState } from "react";
import Greeting from "./Greeting";
import { ChartBarIcon, FolderIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { trpc } from "../utils/trpc";
import { Disclosure } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();

  const items = [
    { title: "Java", target: "/courses" },
    { title: "Python", target: "/courses" },
  ];

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
        { name: "Java", href: "/courses" },
        { name: "Python", href: "/courses" },
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

  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#503597] dark:hover:text-white hover:bg-indigo-50";
  const currentItemStyling =
    "text-violet-800 dark:text-white bg-indigo-100 dark:bg-[#6f69ee] dark:hover:bg-[#847FF7] hover:text-gray-900 hover:bg-indigo-50";

  return (
    <div className="sidebar-background-color relative ml-4 h-full rounded-l-lg border-r-2 py-16 ">
      <div className="flex flex-shrink-0 justify-center px-2">
              <Greeting />
            </div>
      <div className="mt-5 flex flex-grow flex-col">
              <nav
                className="flex-1 space-y-1 bg-white px-2"
                aria-label="Sidebar"
              >
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
                    <Disclosure as="div" key={item.name} className="space-y-1">
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
                                className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
    </div>
  );
};

export default Sidebar;
