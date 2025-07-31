📁 server.mjs
frcEvent, compKey

type: const

use: change these based on the event

admin, update

type: let

use: must be set to true to enable data update

async function updateDB()

parameters: none

return: none

use: updates the database using data from Blue Alliance

async function getData()

parameters: none

return: event data

use: retrieves data from Blue Alliance

🌐 index.html
frcEvent

type: const

use: update this for each event

function element(tagName, innerHTML = "", appendTo = document.body, id = null)

parameters:

tagName: HTML tag

innerHTML: optional content

appendTo: parent element

id: optional ID

return: HTML element

use: generates and appends an HTML element

async function fetchFromEndpoint()

parameters: none

return: data from server

use: fetches data from server.mjs

function ageListTable()

parameters: none

return: HTML table

use: displays age info for each team

function updateTable()

parameters: none

return: none

use: refreshes the age table

function calculateMedian(Int[] values)

parameters: array of integers

return: median value

use: calculates median of values

function getMedian(int i)

parameters: index i

return: median of team i

use: retrieves median from team list

async function main()

parameters: none

return: none

use: main execution function
