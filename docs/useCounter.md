# useCounter

Manage a counter value with step, minimum, and maximum values using the `useCounter` hook.

### Usage

```jsx
import useCounter from "react-customs";

const [count, { increment, decrement, reset }] = useCounter(initialValue, options);
```

### Description

The `useCounter` hook provides a simple way to manage a numeric counter state in your React components. It offers increment, decrement, and reset functionalities while allowing you to set custom step sizes and define minimum and maximum boundaries for the counter value. This is particularly useful in scenarios where you need a counter with specific constraints and behaviors.

### Parameters

| Name           | Type      | Description                                                             |
| -------------- | --------- | ----------------------------------------------------------------------- |
| `initialValue` | `integer` | optional: The initial value for the counter. Defaults to `0`            |
| `options`      | `object`  | optional: Configuration options for the counter behavior.               |
| `options.step	` | `integer` | The increment/decrement step size. Defaults to `1`                      |
| `options.min`  | `integer` | The minimum value for the counter. Default to `Number.MIN_SAFE_INTEGER  |
| `options.max`  | `integer` | The maximum value for the counter. Defaults to `Number.MAX_SAFE_INTEGER |

### Return value

| Name        | Type       | Description                                         |
| ----------- | ---------- | --------------------------------------------------- |
| `count`     | `integer`  | The current counter value.                          |
| `increment` | `function` | Function to increment the counter by the step size. |
| `decrement` | `function` | Function to decrement the counter by the step size. |
| `reset`     | `function` | Function to reset the counter to the initial value. |

### Example (Demo)

<a href="https://use-counter.pages.dev/" target="_blank">useCounter (Example)</a>
