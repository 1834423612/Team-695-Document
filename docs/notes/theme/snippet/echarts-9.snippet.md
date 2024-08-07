---
title: echarts-9.snippet
author: kjch
createTime: 2024/08/07 17:10:38
permalink: /article/gu5zc8y4/
---
````md
::: echarts Tree
```js
const data = await fetch(
  '/data/flare.json',
).then(res => res.json())

const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  series: [
    {
      type: 'tree',
      data: [data],
      top: '18%',
      bottom: '14%',
      layout: 'radial',
      symbol: 'emptyCircle',
      symbolSize: 7,
      initialTreeDepth: 3,
      animationDurationUpdate: 750,
      emphasis: {
        focus: 'descendant',
      },
    },
  ],
}

const height = 600
```
:::
````
