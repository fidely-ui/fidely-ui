# Changelog

## 2.3.0

### Minor Changes

- [#274](https://github.com/fidely-ui/fidely-ui/pull/274) [`eeadf0b`](https://github.com/fidely-ui/fidely-ui/commit/eeadf0ba85324dd303d32baf65993e7ab92aba81) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - feat(pin-input): add `PinInput.Group` and `PinInput.Separator` components with styling

- [#275](https://github.com/fidely-ui/fidely-ui/pull/275) [`5cfa88b`](https://github.com/fidely-ui/fidely-ui/commit/5cfa88b965e2e50715ec6fbf813804702cdff145) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Exported `useAccordionItemContext`: Enables external access to individual accordion item state.

  Exported `UseAccordionProps` and `UseAccordionReturn`: provides better TypeScript support.

- [#273](https://github.com/fidely-ui/fidely-ui/pull/273) [`9e636dc`](https://github.com/fidely-ui/fidely-ui/commit/9e636dc691ecbd18fe40ae9ec0c5e9a86a5e56d2) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - `feat(command-input)`: remove platform detection, and fix SSR hydration mismatch

### Patch Changes

- [#271](https://github.com/fidely-ui/fidely-ui/pull/271) [`72a3a72`](https://github.com/fidely-ui/fidely-ui/commit/72a3a728ae7df23058ec3f5afc604067a8c0cecb) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Update react and react-dom peer dependencies to support version 19 and pandacss/dev to 1.7.0.

- Updated dependencies [[`72a3a72`](https://github.com/fidely-ui/fidely-ui/commit/72a3a728ae7df23058ec3f5afc604067a8c0cecb), [`eeadf0b`](https://github.com/fidely-ui/fidely-ui/commit/eeadf0ba85324dd303d32baf65993e7ab92aba81)]:
  - @fidely-ui/panda-preset@2.3.0

## 2.2.3

### Patch Changes

- Updated dependencies [[`1c47b4c`](https://github.com/fidely-ui/fidely-ui/commit/1c47b4c0b8520f669f72af01ec6c750cdd28168a)]:
  - @fidely-ui/panda-preset@2.2.3

## 2.2.2

### Patch Changes

- Updated dependencies [[`1207fa9`](https://github.com/fidely-ui/fidely-ui/commit/1207fa994c0a81209fa7bb12ab2a82d63c36a55b), [`e46ae09`](https://github.com/fidely-ui/fidely-ui/commit/e46ae0996c0fc839d0057c9a22fa0a5db6eef1b3)]:
  - @fidely-ui/panda-preset@2.2.2

## 2.2.1

### Patch Changes

- [#229](https://github.com/fidely-ui/fidely-ui/pull/229) [`34b40de`](https://github.com/fidely-ui/fidely-ui/commit/34b40de91db22a93e49b23dabddc23fcdc6ef034) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Fix slot typing mismatches in `Table` and `Clipboard` components.

- [#227](https://github.com/fidely-ui/fidely-ui/pull/227) [`2ee6c71`](https://github.com/fidely-ui/fidely-ui/commit/2ee6c7101cbfff0c4b3fc64da99c9a11c5878366) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Change **`CardDescription`** default element from `div` to `p` while preserving polymorphism

- Updated dependencies [[`44e51e4`](https://github.com/fidely-ui/fidely-ui/commit/44e51e4f351066c5617165dd38ef662348eb582d), [`c033b2e`](https://github.com/fidely-ui/fidely-ui/commit/c033b2e5350b0c8c904a1a0a1e439139f6033ac2)]:
  - @fidely-ui/panda-preset@2.2.1

## 2.2.0

### Minor Changes

- Add `data-avatar-group` & `data-group-item` support and automatic border styling to **AvatarGroup**.

### Patch Changes

- [#212](https://github.com/fidely-ui/fidely-ui/pull/212) [`d45c338`](https://github.com/fidely-ui/fidely-ui/commit/d45c338cbe068ed170dc3d66612bbf41e41b48d8) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - fix **button** correct isLoading & disabled behavior

- Fix `AvatarGroup` overlap stacking behavior.

## 2.1.0

### Minor Changes

- Add **full** size variant to Dialog

### Patch Changes

- Updated dependencies []:
  - @fidely-ui/panda-preset@2.1.0

## 2.0.2

### Patch Changes

- Fixed an issue where the Select trigger lost its active border when the dropdown content opened.

- Updated dependencies []:
  - @fidely-ui/panda-preset@2.0.2

## 2.0.1

### Patch Changes

- fix(command-input): prevent crash and correctly resolve default keyboard shortcuts when the shortcut prop is omitted

- Updated dependencies []:
  - @fidely-ui/panda-preset@2.0.1

## 2.0.0

### Major Changes

- [#185](https://github.com/fidely-ui/fidely-ui/pull/185) [`48240ec`](https://github.com/fidely-ui/fidely-ui/commit/48240ec0ec34a4cb2dc75dc5d2356fbef7305b23) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Upgrade Fidely UI to **v2** with breaking changes and a new modular architecture.

  ## Breaking Changes
  - Removed `@fidely-ui/styled-system` package
  - Removed ripple effects from `Button` and related keyframes
  - Removed `SkeletonText` component
  - Removed `FloatInput` component
  - Removed `ark-ui` from presets
  - Removed unused collections
    - createFileTreeCollection
    - createTreeCollection,
    - FilePathTreeNode,
    - FlatTreeNode,
    - TreeCollection,
    - TreeCollectionOptions,
    - TreeNode,
  - Added presets anatomy (new structure)

  ## Changes
  - Added `Unstyled` type to all slot components and `unstyled` prop to `makeStyleContext`
  - Added Fidely factory API
  - Added new `Popover` component with documentation
  - Added new `Icon` component with documentation
  - Added `size` variants to `InputGroup`
  - Added `size` variants to `CommandInput`
  - Added `isOpen` prop to `CommandInput` to track open/close state when used with `Dialog` or `Combobox`
  - Added size variants to `CommandInput` and `InputGroup`
  - Refactored `CommandInput` using `useCommand` hook and `isOpen` prop
  - Updated global `::selection` background style
  - Re-exported `ark-ui` locales

### Patch Changes

- [#190](https://github.com/fidely-ui/fidely-ui/pull/190) [`8d6a55c`](https://github.com/fidely-ui/fidely-ui/commit/8d6a55c5f6c3af176b857a9b0d165cb19b0c2860) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - fix: CommandInput key-shortcuts causing mismatch Meta/Ctrl keys

- [#188](https://github.com/fidely-ui/fidely-ui/pull/188) [`f0eac70`](https://github.com/fidely-ui/fidely-ui/commit/f0eac70aaa7556ec96d6023f618561c5c1738781) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Replaced bundled styles with panda ship manifest (panda.buildinfo.json) to allow user-defined prefixes and hashing.

- Updated dependencies [[`8d6a55c`](https://github.com/fidely-ui/fidely-ui/commit/8d6a55c5f6c3af176b857a9b0d165cb19b0c2860), [`f0eac70`](https://github.com/fidely-ui/fidely-ui/commit/f0eac70aaa7556ec96d6023f618561c5c1738781), [`48240ec`](https://github.com/fidely-ui/fidely-ui/commit/48240ec0ec34a4cb2dc75dc5d2356fbef7305b23)]:
  - @fidely-ui/panda-preset@2.0.0

## 1.3.0

### Minor Changes

- Introduce Menu, HoverCard, and Marquee components with preset styles
- Export style context helpers
- Refine interactions and styling across tabs, badges, and marquee

### Patch Changes

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.3.0
  - @fidely-ui/styled-system@1.3.0

## 1.2.0

### Minor Changes

- Introduced a new Profile component and updated the Persona component to use it, including renaming `imgSize` to `size` for consistency.
- Added `stickyHeader` support to the Table component for improved usability.
- Updated `fidelyPreset` to allow calling it without options by applying default configuration automatically.
- Fixed the password-input visibility icon size.
- Fixed inconsistent icon sizes in the command-input component.

### Patch Changes

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.2.0
  - @fidely-ui/styled-system@1.2.0

## 1.1.0

### Minor Changes

- Release 1.1.0 stable: pre-exit beta. Includes new `PasswordInput` and `Combobox` components, improved slot recipes, and internal consistency updates across input-based components, fix select, combobox, password input invalid state.

- [#84](https://github.com/fidely-ui/fidely-ui/pull/84) [`f581895`](https://github.com/fidely-ui/fidely-ui/commit/f581895df8dff8ecfd846536b9667697e173b281) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - feat: add `PasswordInput` and `Combobox` components

### Patch Changes

- [#76](https://github.com/fidely-ui/fidely-ui/pull/76) [`f024cb4`](https://github.com/fidely-ui/fidely-ui/commit/f024cb4b390306aa8b7eb3037207e885977cf403) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - externize fidely styled system

- [#74](https://github.com/fidely-ui/fidely-ui/pull/74) [`1ac097b`](https://github.com/fidely-ui/fidely-ui/commit/1ac097bfa1972617f0317bcbccbe88729f08c562) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Fix: cleanup build output and remove extra external deps

- [`2b2d0c2`](https://github.com/fidely-ui/fidely-ui/commit/2b2d0c2876695ed03b1ac1e66fc8bdddc71ae544) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - Rename package scope from @snaps-ui to @fidely-ui and prepare first beta release

- [#75](https://github.com/fidely-ui/fidely-ui/pull/75) [`2e910a4`](https://github.com/fidely-ui/fidely-ui/commit/2e910a470dbf5955fe6aa0bfc7bb603e22c899d6) Thanks [@chimobi-justice](https://github.com/chimobi-justice)! - fix: bundle Panda CSS recipes inside @fidely-ui/react

- Updated dependencies [[`f024cb4`](https://github.com/fidely-ui/fidely-ui/commit/f024cb4b390306aa8b7eb3037207e885977cf403), [`1ac097b`](https://github.com/fidely-ui/fidely-ui/commit/1ac097bfa1972617f0317bcbccbe88729f08c562), [`f581895`](https://github.com/fidely-ui/fidely-ui/commit/f581895df8dff8ecfd846536b9667697e173b281), [`2b2d0c2`](https://github.com/fidely-ui/fidely-ui/commit/2b2d0c2876695ed03b1ac1e66fc8bdddc71ae544), [`2e910a4`](https://github.com/fidely-ui/fidely-ui/commit/2e910a470dbf5955fe6aa0bfc7bb603e22c899d6)]:
  - @fidely-ui/panda-preset@1.1.0
  - @fidely-ui/styled-system@1.1.0

## 1.1.0-beta.4

### Minor Changes

- feat: add `PasswordInput` and `Combobox` components
  - Introduced new `PasswordInput` component with toggle visibility functionality and full theming support.
  - Added new `Combobox` component with keyboard navigation, async loading, and slot-based styling.
  - Updated recipes and slot recipes to include styles for both components.
  - Improved internal consistency across input-based components.

  This release adds two new components and represents a minor version bump.

### Patch Changes

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.1.0-beta.4
  - @fidely-ui/styled-system@1.1.0-beta.4

## 1.0.1-beta.3

### Patch Changes

- externize fidely styled system

- Updated dependencies []:
  - @fidely-ui/styled-system@1.0.1-beta.3
  - @fidely-ui/panda-preset@1.0.1-beta.3

## 1.0.1-beta.2

### Patch Changes

- fix: bundle Panda CSS recipes inside @fidely-ui/react

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.0.1-beta.2

## 1.0.1-beta.1

### Patch Changes

- Fix: cleanup build output and remove extra external deps

- Updated dependencies []:
  - @fidely-ui/panda-preset@1.0.1-beta.1
  - @fidely-ui/styled-system@1.0.1-beta.1

## 1.0.1-beta.0

### Patch Changes

- Rename package scope from @snaps-ui to @fidely-ui and prepare first beta release

- Updated dependencies []:
  - @fidely-ui/styled-system@1.0.1-beta.0
  - @fidely-ui/panda-preset@1.0.1-beta.0
