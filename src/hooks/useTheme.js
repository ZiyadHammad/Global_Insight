import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('theme', theme)
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
 
  const toggleTheme = () => { 
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme };
};
