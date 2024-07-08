# useQueue

A custom React hook for managing a `queue` data structure with a maximum size limit.

<br>

### Usage

```jsx
import useQueue from "react-customs";

// use all methods
const { queue, enqueue, dequeue, peek, clear, isFull, isEmpty, size } = useQueue([], { maxSize: 10 });

// use specific
const { queue: myQueue, enqueue: addToQueue, dequeue: removeFromQueue } = useQueue([]);

enqueue(item); // adds new item to queue

const removedItem = dequeue(); // returns removed item

const peek = peek(); // returns null if queue is empty

clear(); // clears the queue

isFull(); // returns true if equal to max_size

isEmpty(); // returns true if queue is empty

<h1>Current queue size: {size}</h1>; // holds current size of a queue
```

### Description

`useQueue` is a custom React hook that implements a queue data structure with a configurable maximum size. It provides methods to add and remove elements, check the first element, clear the queue, and get information about the queue's state (such as whether it's empty or full).

The hook ensures that the queue doesn't exceed the specified maximum size and provides appropriate warnings when attempting to initialize with an invalid array or with more elements than the maximum size allows.

### Parameters

| Name           | Type     | Description                                                            |
| -------------- | -------- | ---------------------------------------------------------------------- |
| `initialQueue` | `array`  | (Optional) The initial items in the queue. Defaults to an empty array. |
| `options`      | `object` | (Optional)                                                             |

- `maxSize` (number): The maximum allowed size for the queue. Defaults to `Number.MAX_SAFE_INTEGER`.

### Return value

Returns an object with the following properties:

- `queue` (Array): The current queue.
- `enqueue(item)` (function): Adds an item to the end of the queue.
- `dequeue()` (function): Removes and returns the item from the front of the queue.
- `peek()` (function): Returns the item at the front of the queue without removing it.
- `clear()` (function): Clears the queue.
- `isFull` (boolean): Indicates whether the queue is full.
- `isEmpty` (boolean): Indicates whether the queue is empty.
- `size` (number): The current size of the queue.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-qyrfdf?file=src%2FApp.jsx" target="_blank">useQueue (Example)</a>
