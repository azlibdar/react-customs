<div align="center">
  <img width="1920" alt="react-customs-banner" src="https://github.com/azlibdar/react-customs/assets/121456353/c5d7f20f-0482-463b-a39b-62a47c6c5206">

# React Customs

A collection of essential React hooks built with JavaScript.

Compatible with React `v18.0.0+`

<br>

![npm version](https://img.shields.io/npm/v/react-customs.svg)
![license](https://img.shields.io/npm/l/react-customs)
![downloads](https://img.shields.io/npm/dm/react-customs)

</div>

<br>

## Installation

```shell
npm install react-customs

or

npm i react-customs
```

<br>

## Hooks and Documentation

For documentation, please visit the [GitBook URL](https://azlibdar.gitbook.io/react-customs)

<br>

| Hook               | Description                                       | Example                                             |
| ------------------ | ------------------------------------------------- | --------------------------------------------------- |
| useDocumentTitle   | Dynamically update the title of a webpage.        | [Example](https://use-document-title.pages.dev/)    |
| useFavicon         | Easily update the favicon of your webpage.        | [Example](https://use-favicon.pages.dev/)           |
| useDefault         | Ensure a state always has a default value.        | [Example](https://use-default.pages.dev/)           |
| usePrevious        | Track the previous and current state values.      | [Example](https://use-previous.pages.dev/)          |
| useCounter         | Manage a counter with step, min, and max values.  | [Example](https://use-counter.pages.dev/)           |
| useCopyToClipboard | Simplify copying text to the clipboard.           | [Example](https://use-copy-to-clipboard.pages.dev/) |
| useLockScroll      | Lock and unlock scrolling on the page.            | [Example](https://use-lock-scroll.pages.dev/)       |
| useWindowSize      | Track the dimensions of the browser window.       | [Example](https://use-window-size.pages.dev/)       |
| useQueue           | Managing a queue data structure with a max size.  | [Example](https://use-queue.pages.dev/)             |
| useStack           | Managing a stack data structure with a max size.  | [Example](https://use-stack.pages.dev/)             |
| useTabAway         | Number of times a user navigates away from a tab. | [Example](https://use-tab-away.pages.dev/)          |
| useTheme           | Manage and toggle between light and dark themes.  | [Example](https://use-theme.pages.dev/)             |
| useDebounce        | Delay updates to a value.                         | [Example](https://use-theme.pages.dev/)             |

<br>

## Quick Example

```jsx
import { useDocumentTitle } from "react-customs";

function App() {
  useDocumentTitle("Hello world!");

  return <h1>No so happy hacking!</h1>;
}

export default App;
```

<br>

## Contributing

We welcome contributions! Please read our [Contribution Guide](CONTRIBUTING.md) before submitting any pull requests.

<br>

## Contact

For any questions or feedback, please contact:

Email: azlibdar@gmail.com

<br>

Happy hacking!
