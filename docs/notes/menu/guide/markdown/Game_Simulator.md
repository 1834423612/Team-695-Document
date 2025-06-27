Functions

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


How to modify this for a new game:
    Use one of these template files depending on if you want stockpiling:
        https://github.com/1834423612/scoutify_test/blob/master/stockpileTemplate2024.html
        https://github.com/1834423612/scoutify_test/blob/master/nonStockPileTemplate.html
        
        TO DO: nonstockpiletemplate isn't as roboust as the stockpileTemplate

  
   Adapt lines 160-184 for the specific game you have in mind. Read the comments, as they can be descriptive.
   Then edit the forloop right after the comment:        //create a scenario tree
   Then edit the following functions: `autonScorePiece()` and `scorePiece()`
 
