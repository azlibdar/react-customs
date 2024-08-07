import { useState, useEffect, useCallback } from "react";

const useTabAway = () => {
  const [tabAwayCount, setTabAwayCount] = useState(0);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setTabAwayCount((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  return tabAwayCount;
};

export default useTabAway;
