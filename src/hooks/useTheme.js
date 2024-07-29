import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme) => {
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
      root.setAttribute("data-theme", theme);
    };

    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const changeTheme = useCallback((newTheme) => {
    setTheme(newTheme);
  }, []);

  return { theme, setTheme: changeTheme, toggleTheme };
};

export default useTheme;
