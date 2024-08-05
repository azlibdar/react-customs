# useFavicon

Easily update the favicon of your webpage with `useFavicon`.

### Usage

```jsx
import { useFavicon } from "react-customs";

const setFavicon = useFavicon(); // or
const setFavicon = useFavicon(initialURL);

setFavicon("https://upload.wikimedia.org/wikip... .png");
```

### Description

The `useFavicon` hook provides a simple way to set and update the favicon of your application dynamically. It can be initialized with an initial favicon URL and allows you to change the favicon at any point by using the returned setFavicon function.

### Parameters

| Name         | Type     | Description                                 |
| ------------ | -------- | ------------------------------------------- |
| `initailUrl` | `string` | (Optional) The initial URL for the favicon. |

### Return value

| Name         | Type       | Description                        |
| ------------ | ---------- | ---------------------------------- |
| `setFavicon` | `function` | Function to update the favicon URL |

### Example (Demo)

<a href="https://use-favicon.pages.dev/" target="_blank">useFavicon (Example)</a>
