---
title: add-page
author: kjch
createTime: 1969/12/31 19:00:00
permalink: /guide/lnnpirqi/
---
# Adding a page
1. Add the EJS file in client/templates. The EJS file should have a div with id="page-holder" whose content will be loaded to client/templates/template.ejs when the user clicks on the page. Copy an existing page in client/templates if you need help.
2. Add js to the page in client/static/scripts. Import the script in client/templates/template.ejs in the 	```<head>``` tag
```js
    <script type="module" src="../static/scripts/YOUR-SCRIPT.js" defer></script>
```
3. Add the router in server/routers.
```js
const database = require("../database/database.js")
const express = require("express")
const gameConstants = require("../game.js")
const { consoleLog } = require("../utility")
const router = express.Router()
const SQL = require('sql-template-strings')
const socketManager = require("../sockets.js")

router.get("/", function (req, res) { //only gets used if the url == alliance-selector
    res.render("PAGE-NAME", {
        data: {}
    })
})

router.post("/", function (req, res) {
    const body = req.body
    return res.status(200).send({info: "hi!"})
})

module.exports = router
```
5. Add these two lines of code in server.js, replacing PAGE with the name of your EJS file.
```js
const X = require(path.resolve(serverDirectory, routeDirectory, "PAGE.js"))

app.use("/PAGE", X)
```
6. If you'd like the page to show up in the bottom bar, add a button footer.ejs. Replace PAGE with the name of your page. Then, edit bottombar.js to include your page. Add the path to your page in the path constant in utility.js
```html
<div class="button-wrapper">
    <button type="button" class="PAGE-button" id="PAGE-button" page="PAGE">
        <img class="footer-icon" src="../static/images/match-strategy.png">
        <p class="footer-subtext">Strategy</p>
    </button>
</div>
```
7. To include your page in the top right panel, go to header.ejs and add a button or a link in the dropdown-content div. Then, add code for the button (if necessary) in bottomBar.js
```js
const btn = document.getElementById("button-id")
btn.addEventListener("click", () =>  {
    requestPage(paths.URPage)
    hideHighlight(hoverButton)
})
    ```

