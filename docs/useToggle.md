# useToggle

Toggle a boolean state with `useToggle`.

<br>

### Usage

```jsx
import { useToggle } from "react-customs";

const [on, setOn] = useToggle(); // default false

const handleToggleTrue = () => {
  setOn(true); // sets state to true
};

const handleToggleFalse = () => {
  setOn(false); // sets state to false
};

const handleToggle = () => {
  setOn(); // toggles state
};

const handleToggle = () => {
  setOn("anything, not boolean"); // throws an error
};
```

### Description

The `useToggle` hook provides functionality to toggle a boolean state. It returns an array `[state, handleToggle]` where:

- `state` is the current boolean value (true or false).
- `handleToggle` is a function to toggle the state. It accepts a boolean parameter to explicitly set the state or toggles to the opposite state if no parameter is provided. An error is thrown if a non-boolean value is passed to setToggle.

This hook is useful for managing boolean state toggling with validation for safer usage.

### Parameters

| Name           | Type      | Description                                     |
| -------------- | --------- | ----------------------------------------------- |
| `initialValue` | `boolean` | The initial boolean value (default is `false`). |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-q8fcyc?file=src%2FApp.jsx" target="_blank">useToggle (Example)</a>
