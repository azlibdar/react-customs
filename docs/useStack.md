# useStack

A custom React hook for managing a `stack` data structure with a maximum size limit.

### Usage

```jsx
import useStack from "react-customs";

const { stack, push, pop, peek, clear, isFull, isEmpty, size } = useStack([], { maxSize: 10 });
```

### Description

The `useStack` hook provides a stack data structure with methods to push and pop items, check the size and state of the stack, and clear it. You can specify an initial stack and a maximum size for the stack.

### Parameters

| Name              | Type     | Description                                                                   |
| ----------------- | -------- | ----------------------------------------------------------------------------- |
| `initialStack`    | `array`  | (Optional) The initial items in the stack. Defaults to an empty array.        |
| `options`         | `object` | Optional settings for the stack.                                              |
| `options.maxSize` | `number` | The maximum allowed size for the stack. Defaults to `Number.MAX_SAFE_INTEGER` |

### Return value

| Name      | Type       | Description                                                     |
| --------- | ---------- | --------------------------------------------------------------- |
| `stack`   | `array`    | The current state of the stack.                                 |
| `push`    | `function` | Function to add an item to the top of the stack.                |
| `pop`     | `function` | Function to remove an item from the top of the stack.           |
| `peek`    | `function` | Function to view the top item of the stack without removing it. |
| `clear`   | `function` | Function to clear the stack.                                    |
| `isFull`  | `boolean`  | Whether the stack is full.                                      |
| `isEmpty` | `boolean`  | Whether the stack is empty.                                     |
| `size`    | `number`   | The current size of the stack.                                  |

### Example (Demo)

<a href="https://use-stack.pages.dev/" target="_blank">useStack (Example)</a>
