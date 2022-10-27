import { trpc } from "../utils/trpc";
import ToggleTheme from "./ToggleTheme";

const MenuBar = () => {
  const {
    data: learnerAnalytics,
    isSuccess,
    isLoading,
  } = trpc.useQuery(["learneractivity.getLearnerActivity"]);

  const profilePicture = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-8 w-8 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );

  return (
    <div className="absolute right-8 top-8 flex flex-row items-center gap-4">
      <div className="mr-8">
        <ToggleTheme />
      </div>
      {isLoading || !isSuccess ? (
        <div className="flex items-center justify-center">
          <div
            className="spinner-border inline-block h-6 w-6 animate-spin rounded-full border-4 text-gray-300"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="text-color">{learnerAnalytics.learner.id}</div>
      )}

      <div className="icon w-12 items-end rounded-3xl p-2">
        {profilePicture}
      </div>
    </div>
  );
};

export default MenuBar;
