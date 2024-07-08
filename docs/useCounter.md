# useCounter

<br>

Manage a counter value with step, minimum, and maximum values using the `useCounter` hook.

### Usage

```jsx
import useCounter from "react-customs";

const [count, { increment, decrement, reset }] = useCounter(0, { step: 1, min: -10, max: 10 });

<h1>{count}</h1>;

onClick = { increment };
onClick = { decrement };
onClick = { reset };
```

### Description

The `useCounter` hook returns an array containing the current `count` and an object with methods to manipulate the count (`increment`, `decrement`, and `reset`). It ensures the count stays within specified bounds and accepts custom `step` values for incrementing and decrementing.

### Parameters

| Name           | Type      | Description                                                  |
| -------------- | --------- | ------------------------------------------------------------ |
| `initialValue` | `integer` | optional: The initial value for the counter. Defaults to `0` |
| `options`      | `object`  | optional                                                     |

- `step`: integer, The step value for incrementing and decrementing. Defaults to `1`
- `min`: integer, The minimum value for the counter. Defaults to `Number.MIN_SAFE_INTEGER`
- `max`: integer, The maximum value for the counter. Defaults to `Number.MAX_SAFE_INTEGER`

### Return value

| Name      | Type      | Description                                 |
| --------- | --------- | ------------------------------------------- |
| `count`   | `integer` | The current counter value.                  |
| `actions` | `object`  | An object containing the following methods: |

- `increment()`: Increases the counter by the step value.
- `decrement()`: Decreases the counter by the step value.
- `reset()`: Resets the counter to the initial value.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-zq3def?file=src%2FApp.jsx" target="_blank">useCounter (Example)</a>
