# usePrevious

Track the previous and current state values with `usePrevious`.

<br>

### Usage

```jsx
import usePrevious from "react-customs";

const [previousValue, currentValue, setValue] = usePrevious(initialValue);
```

### Description

The `usePrevious` hook allows you to track the previous value of a state variable. This can be useful for comparisons or performing actions based on changes in state.

### Parameters

| Name           | Type  | Description                             |
| -------------- | ----- | --------------------------------------- |
| `initialValue` | `any` | The initial value to set for the state. |

### Return value

| Name            | Type       | Description                                    |
| --------------- | ---------- | ---------------------------------------------- |
| `previousValue` | `any`      | The previous value of the state variable.      |
| `currentValue`  | `any`      | The current value of the state variable.       |
| `setValue`      | `function` | Function to update the current state variable. |

### Example (Demo)

<a href="https://use-previous.pages.dev/" target="_blank">usePrevious (Example)</a>
