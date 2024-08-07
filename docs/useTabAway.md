# useTabAway

Tracks the number of times a user navigates away from a tab with `useTabAway` hook.

<br>

### Usage

```jsx
import useTabAway from "react-customs";

const tabAwayCount = useTabAway();
```

### Description

This hook utilizes the `visibilitychange` event to detect when the document's visibility state changes. Each time the document becomes hidden (indicating that the user has navigated away from the tab), the hook increments a counter. The counter is then returned, providing the total number of times the user has navigated away from the tab since the component mounted.

### Return Value

| Name           | Type     | Description                                              |
| -------------- | -------- | -------------------------------------------------------- |
| `tabAwayCount` | `number` | The number of times the user switched away from the tab. |

### Example (Demo)

<a href="https://use-tab-away.pages.dev/" target="_blank">useTabAwayCount (Example)</a>
