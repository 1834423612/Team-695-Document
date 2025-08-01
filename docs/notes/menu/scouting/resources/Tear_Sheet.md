---
title: Tear Sheet
author: zyxwzyxw
createTime: 2025/08/01 17:23:04
permalink: /scouting/resources/tear-sheet/
tags:
  - Scouting
  - Tear Sheet
---

## 🧠 Function Documentation

## 📁 server.mjs

### `const frcEvent`, `const compKey`

- **Use**: Change these based on the event

### `let admin`, `let update`

- **Use**: Must be set to `true` to enable data update

### `async function updateDB()`

- **Parameters**: none  
- **Return**: none  
- **Use**: Updates the database using data from Blue Alliance

### `async function getData()`

- **Parameters**: none  
- **Return**: Event data  
- **Use**: Retrieves data from Blue Alliance

## 🌐 index.html

### `const frcEvent`

- **Use**: Update this for each event

### `function element(tagName, innerHTML = "", appendTo = document.body, id = null)`

- **Parameters**:
  - `tagName`: HTML tag
  - `innerHTML`: optional content
  - `appendTo`: parent element
  - `id`: optional ID
- **Return**: HTML element  
- **Use**: Generates and appends an HTML element

### `async function fetchFromEndpoint()`

- **Parameters**: none  
- **Return**: Data from server  
- **Use**: Fetches data from `server.mjs`

### `function ageListTable()`

- **Parameters**: none  
- **Return**: HTML table  
- **Use**: Displays age info for each team

### `function updateTable()`

- **Parameters**: none  
- **Return**: none  
- **Use**: Refreshes the age table

### `function calculateMedian(Int[] values)`

- **Parameters**: Array of integers  
- **Return**: Median value  
- **Use**: Calculates median of values

### `function getMedian(int i)`

- **Parameters**: Index `i`  
- **Return**: Median of team `i`  
- **Use**: Retrieves median from team list

### `async function main()`

- **Parameters**: none  
- **Return**: none  
- **Use**: Main execution function

---
