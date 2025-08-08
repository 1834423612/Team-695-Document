---
title: Shared Systems
author: igor023
icon: fluent:markdown-20-filled
createTime: 2024/08/17 01:16:39
permalink: /guide/drawing/Shared-Systems/
tags:
  - Guide
  - Markdown
---
## Shared System

### DrawableObject.js

- **Purpose:** Abstract base for all renderable/interactable objects.  
- **Features:**  
  - Stores geometry, context, image/text, opacity, rotation, and z-index.
  - Hit testing: bounding box, radius, triangle.
  - Handles high-DPI scaling via devicePixelRatio.
  - `draw()` — adds self to the RenderQueue.
  - `render()` — applies transforms, sets opacity, draws image or text.

### RenderQueue.js

- **Purpose:** Maintains a z-indexed queue (min-heap) of DrawableObjects.
- **Flow:**  
  1. Insert objects via `insert(obj)`.
  2. On `render()`, sorts by z-index, clears, applies transforms, and calls each object's `render()`.


