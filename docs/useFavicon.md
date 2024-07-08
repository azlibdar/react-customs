## useFavicon

Easily update the favicon of your webpage with `useFavicon`.

<br>

### Usage

```jsx
import { useFavicon } from "react-customs";

const setFavicon = useFavicon("../public/vite.svg");

const handleSetFavicon = () => {
  setFavicon("https://upload.wikimedia.org/wikip... .png");
};
```

### Description

The `useFavicon` hook is a simple way to manage the favicon of your webpage. It initializes the favicon with an optional URL and provides a function to change the favicon dynamically. This is useful for applications that need to update the favicon based on user actions or state changes.

### Parameters

| Name         | Type     | Description                                        |
| ------------ | -------- | -------------------------------------------------- |
| `initailUrl` | `string` | (Optional) The initial favicon URL to set.         |
| `url`        | `string` | The URL of the favicon to be set for the document. |

### Example

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-yxlf9s?file=src%2FApp.jsx" target="_blank">useFavicon (Example)</a>
