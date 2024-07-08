import { useCallback, useEffect, useState } from "react";

const useQueue = (initialQueue = [], { maxSize = Number.MAX_SAFE_INTEGER } = {}) => {
  if (!Array.isArray(initialQueue)) {
    console.warn("useQueue: initialQueue must be an array. An empty array will be used instead.");
    initialQueue = [];
  }

  if (initialQueue.length > maxSize) {
    console.warn(
      `useQueue: initialQueue size (${initialQueue.length}) exceeds maxSize (${maxSize}). The queue will be truncated.`
    );
    initialQueue = initialQueue.slice(0, maxSize);
  }

  const [queue, setQueue] = useState(initialQueue);
  const [isFull, setIsFull] = useState(initialQueue.length === maxSize);
  const [isEmpty, setIsEmpty] = useState(initialQueue.length === 0);

  useEffect(() => {
    setIsEmpty(queue.length === 0);
    setIsFull(queue.length >= maxSize);
  }, [queue, maxSize]);

  const enqueue = useCallback(
    (item) => {
      if (queue.length >= maxSize) {
        throw new Error("Queue is full!");
      }
      setQueue((prevQueue) => [...prevQueue, item]);
      return true;
    },
    [queue.length, maxSize]
  );

  const dequeue = useCallback(() => {
    if (isEmpty) {
      throw new Error("Cannot dequeue from an empty queue");
    }
    const item = queue[0];
    setQueue((prevQueue) => prevQueue.slice(1));
    return item;
  }, [isEmpty, queue]);

  const peek = useCallback(() => {
    if (isEmpty) {
      return null;
    }
    return queue[0];
  }, [isEmpty, queue]);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  const size = queue.length;

  return { queue, enqueue, dequeue, peek, clear, isFull, isEmpty, size };
};

export default useQueue;
