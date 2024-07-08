import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }
    return false;
  });

  const handleToggle = useCallback((value) => {
    if (typeof value === "boolean") {
      setState(value);
    } else if (value === undefined || value === null) {
      setState((prevState) => !prevState);
    } else {
      throw new Error("Invalid value provided to setToggle. Only boolean values are allowed or use without any value.");
    }
  }, []);

  return [state, handleToggle];
};

export default useToggle;
