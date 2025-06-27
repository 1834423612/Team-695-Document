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
