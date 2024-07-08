# useCopyToClipboard

Simplify copying text to the clipboard with `useCopyToClipboard`, handling cross-browser compatibility for you.

<br>

### Usage

```jsx
import useCopyToClipboard from "react-customs";

const [copiedText, copyText] = useCopyToClipboard();

copyText("Hello world!");
```

### Description

The `useCopyToClipboard` hook abstracts the complexity of copying text to the clipboard in a cross-browser compatible manner. It utilizes the modern `navigator.clipboard.writeText` method if available, providing a more efficient and secure way to copy text. In case the `writeText` method is not supported by the browser, it falls back to a traditional method using the `document.execCommand("copy")` approach.

### Parameters

This hook does not take any parameters directly but the copyText function expects a single argument:

| Name   | Type     | Description                             |
| ------ | -------- | --------------------------------------- |
| `text` | `string` | The text to be copied to the clipboard. |

### Example (Demo)

<a href="https://stackblitz.com/edit/vitejs-vite-pqwcbb-ufpahd?file=src%2FApp.jsx" target="_blank">useCopyToClipboard (Example)</a>
