---
title: mermaid-5.snippet
author: kjch
createTime: 2024/08/07 17:10:38
permalink: /article/hki0rwmm/
---
````md
```er Er Example
CAR ||--o{ NAMED-DRIVER : allows
CAR {
    string registrationNumber
    string make
    string model
}
PERSON ||--o{ NAMED-DRIVER : is
PERSON {
    string firstName
    string lastName
    int age
}
```
````
