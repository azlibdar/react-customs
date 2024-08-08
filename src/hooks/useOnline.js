import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);

  const handleOnline = () => setOnline(true);
  const handleOffline = () => setOnline(false);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
