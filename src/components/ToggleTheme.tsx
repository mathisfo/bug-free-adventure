import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon className="text-color h-8 w-8 ease-in-out hover:scale-105"></MoonIcon>
      ) : (
        <SunIcon className="text-color h-8 w-8 ease-in-out hover:scale-105"></SunIcon>
      )}
    </div>
  );
};

export default ToggleTheme;
