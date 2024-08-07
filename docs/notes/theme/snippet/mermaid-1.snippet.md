---
title: mermaid-1.snippet
author: kjch
createTime: 2024/08/07 17:10:38
permalink: /article/iuwh9stv/
---
````md
```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```
````
