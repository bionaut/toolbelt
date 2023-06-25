# ViewportTrap Component

`ViewportTrap` is a headless React component that helps ensure that its children are always visible within the viewport. This is particularly useful for UI elements like tooltips or dropdowns that might be hidden or cut-off due to their position near the edge of the viewport.

[Storybook DEMO](https://bionaut.github.io/toolbelt/?path=/story/viewporttrap--viewport-trap-story)

## Installation

To use `ViewportTrap`, simply import it in your React project:

```jsx
import { ViewportTrap } from 'react-viewport-trap';
```

## Usage

Wrap the component that you want to keep in the viewport with `ViewportTrap`:

```jsx
<ViewportTrap>
  <MyTooltip />
</ViewportTrap>
```

The `ViewportTrap` component works by observing the visibility of its wrapper in the viewport using the Intersection Observer API. When the wrapper is not fully visible, `ViewportTrap` adjusts the position of the target child element so that it stays within the viewport.

Check 