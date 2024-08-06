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

| Hook               | Description                                      | Example                                             |
| ------------------ | ------------------------------------------------ | --------------------------------------------------- |
| useDocumentTitle   | Dynamically update the title of a webpage.       | [Example](https://use-document-title.pages.dev/)    |
| useFavicon         | Easily update the favicon of your webpage.       | [Example](https://use-favicon.pages.dev/)           |
| useDefault         | Ensure a state always has a default value.       | [Example](https://use-default.pages.dev/)           |
| usePrevious        | Track the previous and current state values.     | [Example](https://use-previous.pages.dev/)          |
| useCounter         | Manage a counter with step, min, and max values. | [Example](https://use-counter.pages.dev/)           |
| useCopyToClipboard | Simplify copying text to the clipboard           | [Example](https://use-copy-to-clipboard.pages.dev/) |

- [useLockScroll](docs/useLockScroll.md) Allows you to lock and unlock scrolling on the page.
- [useWindowSize](docs/useWindowSize.md) Track the dimensions of the browser window in real-time.
- [useQueue](docs/useQueue.md) Managing a queue data structure with a maximum size limit.
- [useStack](docs/useStack.md) Managing a stack data structure with a maximum size limit.
- [useTabAwayCount](docs/useTabAwayCount.md) Tracks the number of times a user navigates away from a tab.
- [useTheme](docs/useTheme.md) Manage and toggle between light and dark themes.
- [useDebounce](docs/useDebounce.md) Delay updates to a value until a specified time period has elapsed.

<!-- use this url to link documentaion to a hook (usehookname) all in lowercase -->
<!-- https://azlibdar.gitbook.io/react-customs/usehook -->

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

## Important Message

Please [read](MESSAGE.md) our important message about the project's background and goals.

<br>

## Contact

For any questions or feedback, please contact:

Email: azlibdar@gmail.com

<br>

Happy hacking!
