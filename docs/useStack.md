# useStack

A custom React hook for managing a `stack` data structure with a maximum size limit.

<br>

### Usage

```jsx
import useStack from "react-customs";

// use all methods
const { stack, push, pop, peek, clear, isFull, isEmpty, size } = useStack([], { maxSize: 10 });

// use specific
const { stack: myStack, push: addToStack, pop: removeFromStack } = useStack([]);

push(item); // adds new item to stack

const removedItem = pop(); // returns removed item

const peek = peek(); // returns null if stack is empty else top element

clear(); // clears the stack

isFull(); // returns true if equal to max_size

isEmpty(); // returns true if queue is empty

<h1>Current stack size: {size}</h1>; // holds current size of a stack
```

### Description

`useStack` is a custom React hook that implements a stack data structure with a configurable maximum size. It provides methods to add (push) and remove (pop) elements, check the top element (peek), clear the stack, and get information about the stack's state (such as whether it's empty or full).

### Parameters

| Name           | Type     | Description                                                            |
| -------------- | -------- | ---------------------------------------------------------------------- |
| `initialStack` | `array`  | (Optional) The initial items in the stack. Defaults to an empty array. |
| `options`      | `object` | (Optional)                                                             |

- `maxSize` (number): The maximum allowed size for the stack. Defaults to `Number.MAX_SAFE_INTEGER`.

### Return value

Returns an object with the following properties:

- `stack` (Array): The current stack.
- `push(item)` (function): Adds an item to the top of the stack.
- `pop()` (function): Removes and returns the item from the top of the stack.
- `peek()` (function): Returns the item at the top of the stack without removing it.
- `clear()` (function): Clears the stack.
- `isFull` (boolean): Indicates whether the stack is full.
- `isEmpty` (boolean): Indicates whether the stack is empty.
- `size` (number): The current size of the stack.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-bxtmgt?file=src%2FApp.jsx" target="_blank">useStack (Example)</a>
