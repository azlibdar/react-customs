# useLockScroll

A custom React hook that allows you to `lock` and `unlock` scrolling on the page.

<br>

### Usage

```jsx
import useLockScroll from "react-customs";

const setLock = useLockScroll();

setLock(true);
setLock(false);
```

### Description

The `useLockScroll` hook allows you to easily lock and unlock scrolling on the document body. This can be useful for modals, sidebars, or any component that requires the background to be unscrollable.

### Parameters

| Name            | Type      | Description                                                            |
| --------------- | --------- | ---------------------------------------------------------------------- |
| `initialLocked` | `boolean` | (optional): A value to set the initial lock state. Default is `false`. |

### Return value

| Name      | Type       | Description                                         |
| --------- | ---------- | --------------------------------------------------- |
| `setLock` | `function` | Function to lock (true) or unlock (false) scrolling |

### Example (Demo)

<a href="https://use-lock-scroll.pages.dev/" target="_blank">useLockScroll (Example)</a>
