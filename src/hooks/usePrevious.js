import { useState, useEffect, useRef } from "react";

const usePrevious = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const previousRef = useRef(null);

  useEffect(() => {
    previousRef.current = state;
  }, [state]);

  return [previousRef.current, state, setState];
};

export default usePrevious;
