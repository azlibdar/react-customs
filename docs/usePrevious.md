# usePrevious

Track the previous and current state values with `usePrevious`.

<br>

### Usage

```jsx
import { usePrevious } from "react-customs";

const [prevCount, count, setCount] = usePrevious(0);
```

### Description

The `usePrevious` hook returns `[prev, curr, setCurr]` where:

- `prev` is the previous value of the state variable.
- `curr` is the current value of the state variable.
- `setCurr` is the function to update the current value of the state variable.

This hook is particularly useful for tracking changes in a variable over renders and enabling actions or updates based on previous state.

### Parameters

| Name           | Type  | Description                             |
| -------------- | ----- | --------------------------------------- |
| `initialValue` | `any` | The initial value to set for the state. |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-rvmjjp?file=src%2FApp.jsx" target="_blank">usePrevious (Example)</a>
