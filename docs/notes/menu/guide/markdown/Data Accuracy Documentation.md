# `Data Accuracy Documentation`

# `Backend`

## `CONSTANTS:`

- `TBAAPINAMES`  
  - `Array of Strings`  
  - `Names from the TBA (The Blue Alliance) to be able to automatically sort for the data that we need from the TBA api.`  
- `NewTBANAMES`  
  - `Array of Strings`  
  - `The resulting names from the filteredData object that APIData returns`  
- `DBNAMES`  
  - `Array of Strings`  
  - `Names for the keys for our database to sort for the data we need`  
- `OFFSET`  
  - `Int`  
  - `Length of TBAAPINAMES used in DataBaseData to get the scouters for each match`

## `FUNCTIONS:`

- `APIData`  
  - `Parameters: none`  
  - `Returns: Array containing:`   
    - `Object of Match Scoring data filtered from TBA API using TBAAPINAMES`  
    - `Object of which teams played in each match`  
- `DataBaseData`  
  - `Parameters: none`  
  - `Returns: Array containing:`  
    - `Object of Match Scoring data from our database using DBNAMES`  
    - `Object of which teams played in each match`  
- `combinedData`  
  - `Parameters: none`  
  - `Returns: JSON of an Array containing:`  
    - `NewTBANAMES`  
    - `Collected data in the format:` 

`let collectedData = {`  
	`“1”: {`  
		`red: {`   
			`teams: [“695”, “696”, “697”], // scouter[1] should be the scouter for teams[1]`  
			`scouters: [“john”, “nate”, “alex”],`  
			`autoAmpNoteCount: [`  
	`{x: 2, y: 3},`  
	`{x: 4, y: 4},`  
	`{...}`  
`],`  
`autoSpeakerNoteCount: [...],`  
`teleopSpeakerNoteCount: [...],`  
`teleopAmpNoteCount: [...]`			  
`}`  
`blue: {`  
	`teams: [...],`  
			`scouters: [...],`  
			`autoAmpNoteCount: [...],`   
`autoSpeakerNoteCount: [...],`  
`teleopSpeakerNoteCount: [...],`  
`teleopAmpNoteCount: [...]`		  
`}`  
`},`  
`“2”: {`  
	`...`  
`}`  
`...`  
`};`

# `Frontend`

## `FUNCTIONS:`

- `backEndData()`  
  - `Returns: JSON from combined data`  
- `calculateRegression(), generateRegressionLine(), getRegressionData()`  
  - `Returns: list of (x,y) points that make a regression line of the data points imputed`  
- `drawCharts()`  
  - `Takes the data from backEndData(), filters by selectedValue, and can take optional additional filter values for scouters or teams`  
  - `Draws charts for the blue and red alliances with a y=x line a regression line from the data points, and all the points from backEndData()`  
- `formatOptionText()`  
  - `Function to convert camelCase to human-readable format`  
- `main()`  
  - `Makes the dropdowns for the page`  
  - `Calls drawCharts`  
  - `Adds event listeners for clicks on the dropdowns to update the graphs`

# `New Season Guide`

## `TO BE CHANGED`

`—IMPORTANT: LIST OF WHAT DATA IS GRABBED IN THE CONSTATS NEED TO BE IN THE SAME ORDER`

- `TBAAPINAMES: to list of relevant metrics`  
- `NewTBANAMES: to the result of the names used in the list returned by APIDATA`  
- `DBNAMES: to the names of relevant metrics returned by the database call`  
- `SQL CALL IN getScoutifyMatchData() function: to get the data that will be grabbed from database`  
  - `Will be the same kind of data that is grabbed from TBA API`