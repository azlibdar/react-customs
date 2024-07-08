# reactCustoms

A collection of essential, server-safe custom React hooks for modern web development.

Compatible with React `v18.0.0+`

<br>

![npm version](https://img.shields.io/npm/v/react-customs.svg)
![license](https://img.shields.io/npm/l/react-customs)
![downloads](https://img.shields.io/npm/dm/react-customs)

<br>

## Installation

```shell
npm install react-customs

or

npm i react-customs
```

<br>

## Hooks and Documentation

For detailed documentation on each hook, click on the links below.

- [useDocumentTitle](docs/useDocumentTitle.md) Dynamically update the title of a webpage.
- [useFavicon](docs/useFavicon.md) Easily update the favicon of your webpage.
- [useDefault](docs/useDefault.md) Ensure a state variable always has a default value.
- [usePrevious](docs/usePrevious.md) Track the previous and current state values.
- [useCounter](docs/useCounter.md) Manage a counter value with step, minimum, and maximum values.

<br>

## Quick Example

```jsx
import { useDocumentTitle } from "react-customs";

function App() {
  useDocumentTitle("Hello world!");

  return <h1>Happy hacking!</h1>;
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
