import { useCallback, useLayoutEffect, useState } from "react";

const useLockScroll = (initialLocked = false) => {
  const [isLocked, setIsLocked] = useState(initialLocked);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPaddingRight = originalStyle.paddingRight;

    const lockScroll = () => {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    };

    const unlockScroll = () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };

    if (isLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
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
