# useDebounce

<br>

Delay updates to a value until a specified time period has elapsed with `useDebounce`

### Usage

```jsx
import useDebounce from "react-customs";

const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 1000);
```

### Description

The `useDebounce` hook delays the update of a value until a specified time period (delay) has elapsed. It is useful for optimizing performance by reducing the frequency of updates, particularly in scenarios such as search input handling, where frequent changes can lead to unnecessary computations or API calls.

### Parameters

| Name    | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| `value` | `any`    | The value to be debounced.      |
| `delay` | `number` | The delay time in milliseconds. |

### Return value

| Name             | Type  | Description          |
| ---------------- | ----- | -------------------- |
| `debouncedValue` | `any` | The debounced value. |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-apzwrt?file=src%2FApp.jsx" target="_blank">useDebounce (Example)</a>
