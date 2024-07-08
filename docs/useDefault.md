## useDefault

Ensure a state variable always has a default value with `useDefault`.

<br>

### Usage

```jsx
import { useDefault } from "react-customs";

const initialValue = "Select any";
const defaultValue = "My Default Value";
const [name, setName] = useDefault(initialValue, defaultValue);
```

### Description

The `useDefault` hook ensures that a state variable always has a default value if it is undefined or null. This is particularly useful in scenarios where you want to guarantee that a state variable never ends up being undefined or null, maintaining consistent application behavior.

### Parameters

| Name           | Type  | Description                                                     |
| -------------- | ----- | --------------------------------------------------------------- |
| `initialValue` | `any` | The initial value to be set for the state.                      |
| `defaultValue` | `any` | The default value to be used if state is `undefined` or `null`. |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-haei2u?file=src%2FApp.jsx" target="_blank">useDefault (Example)</a>
