import { useCallback, useState } from "react";

function isValidInteger(value) {
  return Number.isInteger(value);
}

function checkTypes(initialValue, step, min, max) {
  if (!isValidInteger(initialValue) || !isValidInteger(step) || !isValidInteger(min) || !isValidInteger(max)) {
    throw new Error("All parameters must be integers");
  }
}

const useCounter = (
  initialValue = 0,
  { step = 1, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER } = {}
) => {
  checkTypes(initialValue, step, min, max);

  if (initialValue < min) initialValue = min;
  if (initialValue > max) initialValue = max;

  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const nextCount = prevCount + step;
      return nextCount > max ? max : nextCount;
    });
  }, [max, step]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const nextCount = prevCount - step;
      return nextCount < min ? min : nextCount;
    });
  }, [min, step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return [count, { increment, decrement, reset }];
};

export default useCounter;
