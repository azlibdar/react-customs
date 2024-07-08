# useTabAwayCount

Tracks the number of times a user navigates away from a tab with `usetabAwayCount` hook.

<br>

### Usage

```jsx
import { useTabAwayCount } from "react-customs";

const tabAwayCount = useTabAwayCount();

<h1>{tabAwayCount}</h1>;
```

### Description

This hook utilizes the `visibilitychange` event to detect when the document's visibility state changes. Each time the document becomes hidden (indicating that the user has navigated away from the tab), the hook increments a counter. The counter is then returned, providing the total number of times the user has navigated away from the tab since the component mounted.

This can be useful for monitoring user engagement and detecting when users switch between tabs.

### Parameters

This hook does not take any parameters.

### Return Values

- `tabAwayCount` (number): The number of times the user has navigated away from a tab.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-42xkwz?file=src%2FApp.jsx" target="_blank">useTabAwayCount (Example)</a>
