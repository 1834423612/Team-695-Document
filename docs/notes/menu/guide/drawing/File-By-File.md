---
title: Object Files
author: igor023
icon: fluent:markdown-20-filled
createTime: 2024/08/17 01:16:39
permalink: /guide/drawing/File-By-File/
tags:
  - Guide
  - Markdown
---
## File-by-File Reference

### Map.js

- **Class:** `Map extends DrawableObject`
- **Role:** Renders the match field background.  
- **Constructor:** Takes canvas context, map image, canvas size, and render queue.  
- **Z-index:** 0 (drawn first, as background).

---

### DrawableObject.js

- **See [Shared System](#shared-system)**

---

### RenderQueue.js

- **See [Shared System](#shared-system)**

---

### Counter.js

- **Class:** `Counter extends DrawableObject`
- **Role:** Renders a text counter (score, count, etc.)
- **Options:** `count`, `show`, color, position, size, z-index.
- **Draw:** Only renders if `show` is true. Updates text from `count` on each draw.

---

### Algae.js

- **Class:** `Algae extends DrawableObject`
- **Role:** Represents an algae piece (selectable).
- **Images:** Switches between selected/unselected images for visual feedback.
- **Interaction:**  
  - `onClick({x, y})` toggles selection if click is within bounding radius.
  - `sendData()` returns selection state.

---

### Auton.js

- **Class:** `Auton`
- **Role:** Main controller for autonomous period UI.
- **Responsibilities:**
  - Sets up all major canvas elements: map, robot, pieces, algae, net, path, etc.
  - Manages a shared RenderQueue.
  - Provides helper functions for encoding/decoding field elements (e.g., coral keys, letters).
- **Interaction:** Each sub-object handles its drawing and interaction logic.

---

### coral_screen/CoralScreen.js

- **Class:** `CoralScreen`
- **Role:** Composite overlay for coral scoring.
- **Components:**
  - `Reef` (background with letters)
  - Multiple `ClickArea` (scoring targets)
  - Score indicators (text)
  - Proceed button
- **Draw:** Only active when `isSelected` is true, then orchestrates drawing of all subcomponents.

---

### coral_screen/Reef.js

- **Class:** `Reef extends DrawableObject`
- **Role:** Renders the reef image and overlays a sequence of `Letter` objects.
- **Constructor:** Selects left/right reef image depending on letter; positions/creates Letter objects.

---

### coral_screen/ClickArea.js

- **Class:** `ClickArea extends DrawableObject`
- **Role:** Clickable/scorable region.
- **Visuals:** Changes color and opacity smoothly based on value (via lerp).
- **Interaction:**  
  - `onClick()` cycles score state (not attempted, scored, missed).
  - `sendData()` returns scored/missed count.
  - `draw()` animates highlight transitions.

---

### coral_screen/Letter.js

- **Class:** `Letter extends DrawableObject`
- **Role:** Visualizes a single letter as a circle, with color for alliance.
- **Draw:** Inherits default draw, but customizes color and text.


