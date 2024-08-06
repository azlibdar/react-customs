# useWindowSize

Track the dimensions of the browser window in real-time with `useWindowSize`.

### Usage

```jsx
import useWindowSize from "react-customs";

const { width, height } = useWindowSize();
```

### Description

The `useWindowSize` hook allows you to get the current width and height of the browser window. The hook updates the dimensions whenever the window is resized.

### Return value

| Name          | Type     | Description                                  |
| ------------- | -------- | -------------------------------------------- |
| `size`        | `object` | The current window size                      |
| `size.width`  | `number` | The current width of the window, in pixels.  |
| `size.height` | `number` | The current height of the window, in pixels. |

### Example (Demo)

<a href="https://use-window-size.pages.dev/" target="_blank">useWindowSize (Example)</a>
