import { useRouter } from "next/router";
import { useState } from "react";
import Greeting from "./Greeting";

const Sidebar = ({ target }: { target: string }) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const [open, setOpen] = useState(false);

  const items = [
    { title: "Java", target: "/courses" },
    { title: "Python", target: "/courses" },
  ];

  const settings = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="text-color h-8 w-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const chevron_down = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
  const chevron_right = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  const menuItemStyling =
    "text-color hover:text-gray-900 dark:hover:bg-[#503597] dark:hover:text-white hover:bg-indigo-50";
  const currentItemStyling =
    "text-violet-800 dark:text-white bg-indigo-100 dark:bg-[#6f69ee] dark:hover:bg-[#847FF7] hover:text-gray-900 hover:bg-indigo-50";

  const onClick = async (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    await router.push(target);
  };

  return (
    <div className="sidebar-background-color relative ml-4 h-full rounded-l-lg border-r-2 py-16">
      <Greeting name="Johanne" />
      <ul className="mt-16 space-y-2">
        <li onClick={(e) => onClick("/dashboard", e)}>
          <a
            className={`${
              path[path.length - 1] == "dashboard"
                ? currentItemStyling
                : menuItemStyling
            } mx-8 flex h-12 cursor-pointer  items-center gap-2 text-ellipsis whitespace-nowrap rounded-2xl px-6  text-sm transition duration-300 ease-in-out`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            Dashboard
          </a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a
            className={`${
              open || path[path.length - 1] == "courses"
                ? currentItemStyling
                : menuItemStyling
            } mx-8 flex h-12 cursor-pointer  items-center gap-2 text-ellipsis whitespace-nowrap rounded-2xl px-6  text-sm transition duration-300 ease-in-out`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Courses
            <div className="self-center pl-10">
              {!open ? chevron_right : chevron_down}
            </div>
          </a>
        </li>
        {open && (
          <ul className="ml-4 space-y-2">
            {items.map((item) => {
              return (
                <li key={item.title} onClick={(e) => onClick(item.target, e)}>
                  <a
                    className={`${
                      path[path.length - 1] == "courses"
                        ? currentItemStyling
                        : menuItemStyling
                    } mx-8 flex h-12 cursor-pointer  items-center gap-2 text-ellipsis whitespace-nowrap rounded-2xl px-6  text-sm transition duration-300 ease-in-out`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </ul>
      <div
        className="absolute left-8 bottom-8 flex cursor-pointer flex-row hover:animate-spin"
        onClick={(e) => onClick("/settings", e)}
      >
        {settings}
      </div>
    </div>
  );
};

export default Sidebar;
