---
title: include-2.snippet
author: kjch
createTime: 2024/08/07 17:10:38
permalink: /article/1qha2ox8/
---
### 三级标题

这是 foo.snippet.md 文件中的内容。

:::info
提示容器包括的内容
:::

<!-- region snippet -->
这里是被 `<!-- region snippet -->` 包裹的内容。

通过 `<!-- @include: ./foo.snippet.md#snippet -->` 来引入。

<!-- endregion snippet -->
