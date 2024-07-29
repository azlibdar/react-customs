# useTheme

Manage and toggle between light and dark themes with `useTheme`

<br>

### Usage

```jsx
import useTheme from "react-customs";

const { theme, setTheme, toggleTheme } = useTheme();

<h1>Current theme: {theme}</h1>;

const handleToggleTheme = () => {
  toggleTheme(); // Toggles between light and dark themes
};

const handleChangeTheme = (newTheme) => {
  setTheme(newTheme); // Sets the theme to either 'light' or 'dark'
};
```

tailwind-config.js

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", //  add this line
};
```

### Description

The `useTheme` hook manages the current theme of your application and provides functionality to toggle between light and dark modes. It reads the theme preference from localStorage or detects the user's system preference on initial load. The hook also allows programmatic theme changes and automatically applies the selected theme to the document. The selected theme is stored in the localStorage for persistence across page reloads.

### Return value

| Name          | Type       | Description                                                        |
| ------------- | ---------- | ------------------------------------------------------------------ |
| `theme`       | `string`   | The current theme, either "light" or "dark".                       |
| `setTheme`    | `function` | Function to set the theme to a specific value ("light" or "dark"). |
| `toggleTheme` | `function` | Function to toggle between "light" and "dark" themes.              |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-qc184w?file=src%2FApp.jsx" target="_blank">useTheme (Example)</a>
