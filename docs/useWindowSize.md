# useWindowSize

Track the dimensions of the browser window with `useWindowSize`.

<br>

### Usage

```jsx
import useWindowSize from "react-customs";

const size = useWindowSize();

<h1>Width: {size.width}</h1> // get width
<h1>Height: {size.height}</h1> // get height
```

### Description

The `useWindowSize` hook is a custom React hook that tracks the dimensions of the browser window. It returns an object containing the current `width` and `height` of the window, updating these values in real-time as the window is resized. This hook is particularly useful for implementing responsive designs, adjusting layouts, and rendering components dynamically based on the size of the window.

### Return value

The useWindowSize hook returns an object with the following properties:

| Name     | Type     | Description                                  |
| -------- | -------- | -------------------------------------------- |
| `width`  | `number` | The current width of the window, in pixels.  |
| `height` | `number` | The current height of the window, in pixels. |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-tfftbd?file=src%2FApp.jsx" target="_blank">useWindowSize (Example)</a>
