# usePreferredDark

Detect if the user prefers dark mode with `usePreferredDark`.

<br>

### Usage

```jsx
import { usePreferredDark } from "react-customs";

function MyComponent() {
  const isDarkMode = usePreferredDark();

  return (
    <div>
      <p>The user prefers {isDarkMode ? "dark" : "light"} mode.</p>
    </div>
  );
}
```

### Description

The `usePreferredDark` hook detects if the user has set their system to prefer dark mode and responds to changes in this preference. It returns true if dark mode is preferred, and false otherwise.

### Parameters

This hook does not take any parameters.

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-7rbedq?file=src%2FApp.jsx" target="_blank">usePreferredDark (Example)</a>
