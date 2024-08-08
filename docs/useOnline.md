# useOnline

A custom React hook that tracks the user's online/offline status.

### Usage

```jsx
import useOnline from "react-customs";

const isOnline = useOnline();
```

### Description

The `useOnline` hook monitors the user's network status, providing a boolean value that indicates whether the user is currently online or offline. It listens to the online and offline events of the browser and updates the state accordingly.

### Return value

| Name       | Type      | Description                                                                               |
| ---------- | --------- | ----------------------------------------------------------------------------------------- |
| `isOnline` | `boolean` | A boolean value that is `true` if the user is online, and `false` if the user is offline. |

### Example (Demo)

<a href="https://github.com/azlibdar/use-online" target="_blank">useOnline (Example)</a>
