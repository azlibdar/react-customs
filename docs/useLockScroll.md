# useLockScroll

A custom React hook that allows you to `lock` and `unlock` scrolling on the page.

<br>

### Usage

```jsx
import useLockScroll from "react-customs";

const [locked, setLockScroll] = useLockScroll(false);

const handleLockScroll = () => {
  setLockScroll(true); // lock it
};

const handleUnlockScroll = () => {
  setLockScroll(false); // unlock it
};
```

### Description

The `useLockScroll` hook provides a simple way to control the scrolling behavior of the page. When the scroll is locked, the page becomes unscrollable, which can be useful for modals, sidebars, or any scenario where you want to prevent the user from scrolling the main content.

### Parameters

| Name            | Type      | Description                                                            |
| --------------- | --------- | ---------------------------------------------------------------------- |
| `initialLocked` | `boolean` | (optional): A value to set the initial lock state. Default is `false`. |

### Return value

Returns an array containing:

- `isLocked`: A boolean indicating whether the scroll is currently locked.
- `setLockScroll`: A function to update the lock state.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-tchaur?file=src%2FApp.jsx" target="_blank">useLockScroll (Example)</a>
