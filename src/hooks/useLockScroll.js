import { useCallback, useLayoutEffect, useState } from "react";

const useLockScroll = (initialLocked = false) => {
  const [isLocked, setIsLocked] = useState(initialLocked);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    const updateBodyStyle = () => {
      document.body.style.overflow = isLocked ? "hidden" : originalStyle;
    };

    updateBodyStyle();

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);

  const setLock = useCallback((value) => {
    if (typeof value === "boolean") {
      setIsLocked(value);
    } else {
      throw new Error("Value must be a boolean");
    }
  }, []);

  return setLock;
};

export default useLockScroll;
