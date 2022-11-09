import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  MoonIcon, SunIcon
} from "@heroicons/react/24/outline";

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
      onClick={(e) => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MoonIcon className="text-color h-8 w-8 hover:scale-105 ease-in-out"></MoonIcon> : <SunIcon className="text-color h-8 w-8 hover:scale-105 ease-in-out"></SunIcon>}
    </div>
  );
};

export default ToggleTheme;
