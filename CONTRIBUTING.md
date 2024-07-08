# Contributing to react-customs ✨

Hello there! We're excited that you're interested in contributing to react-customs. This guide will help you understand how to contribute effectively to our React hooks library.

> **Important:** Use JavaScript only for all contributions.

<br>

## Table of Contents

- [Contribution Types](#contribution-types)
  - [1. Developing a New Hook](#1-developing-a-new-hook)
  - [2. Making a minor change to a hook](#2-making-a-minor-change-to-a-hook)
  - [3. Making a major change to a hook](#3-making-a-major-change-to-a-hook)
  - [4. Making a patch change to a hook](#4-making-a-patch-change-to-a-hook)
  - [5. Fixing typo](#5-fixing-typos)
- [Branch Usage](#branch-usage)
- [Pull Request Process](#pull-request-process)

<br>

## Contribution Types

There are 5 ways you can contribute:

<br>

### 1. Developing a New Hook

- First, open an issue proposing the new hook.
- Use the `feature` branch for your work.
- **Update the version in package.json:**
  - Increment the middle number. For example, change `1.0.0` to `1.1.0`.
  - Alternatively, you can use `npm version minor`.
- In the _docs_ folder, create a new file following the same structure as existing hook documentation.
- In the _README.md_ file, update the list by adding the new hook.
- **For providing usage examples:**
  - Use external links for demos, preferably CodeSandbox or similar platforms where both code and preview are visible.
  - Note: When developing new hooks, they won't be available on npm immediately. Use a local version of the hook for your demo initially.
  - After your pull request is merged and a new version is published, update your demo to use the npm version.

<br>

### 2. Making a Minor Change to a Hook

A minor change adds new functionality in a backwards-compatible manner. Existing code will continue to work without modification.

> **Example:** Adding a new optional parameter to a hook

<br>

Before:

```jsx
const [value, setValue] = useCustomHook("key", "defaultValue");
```

<br>

After:

```jsx
const [value, setValue] = useCustomHook("key", "defaultValue", { syncAcrossTabs: true });
```

This is a minor change because existing code using useCustomHook will not break.

<br>

#### Process

- Open an issue related to this change.
- Use the `feature` branch for non-breaking changes.
- Update examples if necessary, following the same process as for new hooks.
- Update documentation accordingly.
- **For versioning:**
  - Use `npm version minor`, or
  - Manually increment the middle number in the version in package.json (e.g., `1.0.0` to `1.1.0`).

<br>

### 3. Making a Major Change to a Hook

A major change introduces incompatibilities with previous versions. Users will need to modify their code to upgrade to this version.

> **Example:** Changing the API of an existing hook

<br>

Before:

```jsx
const [value, setValue] = useCustomHook("key", "defaultValue");
```

<br>

After:

```jsx
const { value, setValue, removeItem } = useCustomHook("key", "defaultValue");
```

This is a major change because existing code using useCustomHook will break and need to be updated.

<br>

#### Process

- Open an issue related to this change.
- Use the `major` branch for breaking changes.
- Update examples, following the same process as for new hooks.
- Update documentation accordingly.
- **For versioning:**
  - Use `npm version major`, or
  - Manually increment the first number in the version in package.json (e.g., `1.0.0` to `2.0.0`).

<br>

### 4. Making a Patch Change to a Hook

A patch change makes backwards-compatible bug fixes. These changes improve the functionality without changing the API.

> **Example:** Fixing a bug where useCustomHook doesn't update other tabs

<br>

Before (with bug):

```jsx
const [value, setValue] = useCustomHook("key", "defaultValue");
// Value doesn't update across tabs
```

<br>

After (Patch Change):

```jsx
const [value, setValue] = useCustomHook("key", "defaultValue");
// Value now updates correctly across all tabs
```

<br>

#### Process

- Use the `patch` branch for non-breaking bug fixes.
- If documentation needs to be altered, please do so.
- For versioning:
  - Use `npm version patch`, or
  - Manually increment the last number in the version in package.json (e.g., `1.0.0` to `1.0.1`).

<br>

### 5. Fixing Typos

- Use the `typo-fix` branch for typo fixes.
- If documentation needs to be corrected, make the necessary changes.
- No version change is needed for typo fixes.

<br>

## Branch Usage

We have pre-created the following branches for you to use:

- `feature` for adding new hooks and minor non-breaking changes
- `major` for major breaking changes
- `patch` for non-breaking changes or bug fixes
- `typo-fix` for typo corrections

Please use these existing branches for your contributions. Do not create new branches with different names.

<br>

## Pull Request Process

**1) Fork the repository.**

**2) Clone your fork locally**

```shell
git clone https://github.com/azlibdar/react-customs.git

cd react-customs
```

**3) Installing Dependencies**

```shell
nom install
```

**4) Check out the appropriate branch based on your contribution type (major, feature, patch, or typo-fix).**

```shell
# For a major change
git checkout major

# For a new feature or minor change
git checkout feature

# For a patch change
git checkout patch

# For fixing typos
git checkout typo-fix
```

**5) Make your changes.**

**6) Push to your fork.**

```shell
git add .
git commit -m "Description of your changes"
git push origin <branch-name>
```

**7) Submit a pull request to the original repository.**

<br>

Thank you for contributing to react-customs! Your efforts help make this project better for everyone.
