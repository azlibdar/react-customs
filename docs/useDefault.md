# useDefault

Ensure a state always has a default value with `useDefault`.

### Usage

```jsx
import useDefault from "react-customs";

const [value, setValue] = useDefault(initialValue, defaultValue);
```

### Description

The `useDefault` hook ensures that a state variable always has a default value if it is undefined or null. This is particularly useful in scenarios where you want to guarantee that a state variable never ends up being undefined or null, maintaining consistent application behavior.

### Parameters

| Name           | Type  | Description                                                     |
| -------------- | ----- | --------------------------------------------------------------- |
| `initialValue` | `any` | The initial value to be set for the state.                      |
| `defaultValue` | `any` | The default value to be used if state is `undefined` or `null`. |

### Return values

| Name       | Type       | Description                                                                      |
| ---------- | ---------- | -------------------------------------------------------------------------------- |
| `value`    | `any`      | The current state value, or the default value if the state is undefined or null. |
| `setValue` | `function` | Function to update the state.                                                    |

### Example (Demo)

<a href="https://use-default.pages.dev/" target="_blank">useDefault (Example)</a>
