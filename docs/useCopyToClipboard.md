# useCopyToClipboard

A custom React hook to copy text to the clipboard, with a fallback method for older browsers.

### Usage

```jsx
import useCopyToClipboard from "react-customs";

const [copiedText, copyToClipboard] = useCopyToClipboard();
```

### Description

The `useCopyToClipboard` hook allows you to easily copy text to the clipboard from within your React components. It uses the modern `navigator.clipboard.writeText` method if available, with a fallback to a more traditional method for older browsers that do not support the Clipboard API.

### Return value

This hook does not take any parameters directly but the copyText function expects a single argument:

| Name              | Type       | Description                                     |
| ----------------- | ---------- | ----------------------------------------------- |
| `copiedText`      | `string`   | The most recently copied text.                  |
| `copyToClipboard` | `function` | Function to copy a given text to the clipboard. |

### Example (Demo)

<a href="https://use-copy-to-clipboard.pages.dev/" target="_blank">useCopyToClipboard (Example)</a>
