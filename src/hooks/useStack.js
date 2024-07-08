import { useCallback, useEffect, useState } from "react";

const useStack = (initialStack = [], { maxSize = Number.MAX_SAFE_INTEGER } = {}) => {
  if (!Array.isArray(initialStack)) {
    console.warn("useStack: initialStack must be an array. An empty array will be used instead.");
    initialStack = [];
  }

  if (initialStack.length > maxSize) {
    console.warn(
      `useStack: initialStack size (${initialStack.length}) exceeds maxSize (${maxSize}). The stack will be truncated.`
    );
    initialStack = initialStack.slice(0, maxSize);
  }

  const [stack, setStack] = useState(initialStack);
  const [isFull, setIsFull] = useState(initialStack.length === maxSize);
  const [isEmpty, setIsEmpty] = useState(initialStack.length === 0);

  useEffect(() => {
    setIsEmpty(stack.length === 0);
    setIsFull(stack.length >= maxSize);
  }, [stack, maxSize]);

  const push = useCallback(
    (item) => {
      if (stack.length >= maxSize) {
        throw new Error("Stack Overflow!");
      }
      setStack((prevStack) => [item, ...prevStack]);
      return true;
    },
    [maxSize]
  );

  const pop = useCallback(() => {
    if (isEmpty) {
      throw new Error("Stack Underflow!");
    }
    const item = stack[0];
    setStack((prevStack) => prevStack.slice(1));
    return item;
  }, [isEmpty, stack]);

  const peek = useCallback(() => {
    if (isEmpty) {
      return null;
    }
    return stack[0];
  }, [isEmpty, stack]);

  const clear = useCallback(() => {
    setStack([]);
  }, []);

  const size = stack.length;

  return { stack, push, pop, peek, clear, isFull, isEmpty, size };
};

export default useStack;
