---
title: Setup
author: alexfinger21
createTime: 2025/07/31 19:45:23
permalink: /scouting/scoutify-router/
---
## Intro

Routers serve as a way to fragment the server code into page-specific JS files. Routers are imported in **server/server.js** like so:
![](https://t9011117189.p.clickup-attachments.com/t9011117189/2f053ebf-b16a-49c8-8cd4-bfe1f8e798d5/image.png)
Let's take a look at the admin-page router, which is concise but still incorporates all router functions:
![](https://t9011117189.p.clickup-attachments.com/t9011117189/1ee81d18-b79f-4c85-a644-f95d75140b21/image.png)
![](https://t9011117189.p.clickup-attachments.com/t9011117189/153bae54-a4f6-4089-b5cf-ec22186a26f1/image.png)
![](https://t9011117189.p.clickup-attachments.com/t9011117189/116c66b1-f957-476a-ae83-ecbe5bf2388c/image.png)

## Adjustments

Although there is definitely some codebase maintenance to be done (the database queries should be placed under **database/database.js** and then imported), the basic elements are still there:
*   Create an express router - express.Router()
*   The router then functions exactly the same as any express URL endpoint handler
*   For each request method (e.g. GET/POST), define a handler function
*   Return value using res (can be anything like rendering EJS using **res.render** or just returning json using **res.send** methods)
*   Finally, export the router using the CommonJS module.exports convention (**module.exports = router)**

It's that simple!
