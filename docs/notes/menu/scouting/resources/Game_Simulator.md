---
title: Game Simulator
author: zyxwzyxw
createTime: 2025/06/19 19:40:17
permalink: /scouting/resources/game-simulator/
tags:
  - Scouting
  - Game Simulator
---

## How to modify this for a new game  

::: warning TODO
`nonStockPileTemplate` isn't as robust as the `stockpileTemplate2024`
:::

:::: steps

1. **STEP 1**

   Use one of these template files depending on if you want stockpiling:  

   ::: tip Links
   - <https://github.com/1834423612/scoutify_test/blob/master/stockpileTemplate2024.html>  
   - <https://github.com/1834423612/scoutify_test/blob/master/nonStockPileTemplate.html>
   :::

2. **STEP 2**

   Adapt lines `160-184` for the specific game you have in mind. Read the comments, as they can be descriptive.

3. **STEP 3**

   Then edit the forloop right after the comment: `//create a scenario tree`  

4. **STEP 4**

   Last edit the following functions: `autonScorePiece()` and `scorePiece()`

5. **END**
::::

## Functions

- `l()`:  
  **parameters**: ...  
  **return**:  
  **use**: shorthand print

- `inputToggled()`:  
  **parameters**:  
  **return**:  
  **use**: when the display for user input is toggled

- `calculate()`:  
  **parameters**:  
  **return**:  
  **use**: reloads page with user input

- `encodeScenario(String)`:  
  **parameters**:  
  - `String`: numerical string of length equal to length of iteratingArrays  
  **return**: `UINT`  
  **use**: compresses readable form of a scenario into a number

- `decodeScenario(UINT)`:  
  **parameters**:  
  - `UINT`  
  **return**: numerical string  
  **use**: decompresses a number into a readable form of a scenario

- `scorePiece(UINT, Boolean)`:  
  **parameters**:  
  - `UINT`: compressed scenario  
  - `Boolean`: true if alreadyHoldingAndPositioned  
  **return**:  
  **use**: simulates a robot scoring a piece(s)

- `addPlotData(UINT, String)`:  
  **parameters**:  
  - `UINT`: compressed scenario  
  - `String`: an action the robot does  
  **return**:  
  **use**: pushes plot data to arrays

- `updatedata(UINT)`:  
  **parameters**:  
  - `UINT`: compressed scenario  
  **return**:  
  **use**: updates which scenario’s data is being displayed in the right side of split screen

- `autonScorePiece(UINT)`:  
  **parameters**:  
  - `UINT`: compressed scenario  
  **return**:  
  **use**: simulates a robot scoring a piece(s) in auton
