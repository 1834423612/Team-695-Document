---
title: Advanced
author: pengzhanbo
icon: ic:outline-auto-fix-high
outline: 2
createTime: 2024/03/05 16:27:59
permalink: /guide/markdown/advance/
tags:
  - Guide
  - markdown
---

## 卡片

对于想要突出显示的内容，可以将其放在 卡片容器 `::: card` 中。

如果需要在空间足够时并排显示多个卡片，可以使用 `card-grid` 容器，包裹 多个卡片。

### 语法

```md
<!-- 单个卡片 -->
::: card title="标题" icon="twemoji:astonished-face"

这里是卡片内容。
:::

<!-- 多个卡片 -->
:::: card-grid

::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::::
```

卡片 支持 可选的 `title` 和 `icon`。 其中， icon 支持传入 图片链接，也可以传入 iconify 图标名。

### 示例

**输入：**

```md
::: card title="卡片标题" icon="twemoji:astonished-face"

这里是卡片内容。
:::
```

**输出：**

::: card title="卡片标题" icon="twemoji:astonished-face"

这里是卡片内容。
:::

**输入：**

```md
:::: card-grid
::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::
::::
```

**输出：**

:::: card-grid
::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::
::::

::: info
如果你更喜欢通过组件的方式使用 卡片，你可以查看 [卡片组件](/guide/features/component/#card) 。
:::

## 步骤

有时候，你需要将内容 划分为递进的步骤展示，你可以使用 `steps` 容器 实现。

### 语法

在 `steps` 容器内，使用 有序列表 （或无序列表） 来表示步骤。你可以在 容器内使用 任意 markdown 语法。

````md
::: steps

1. 步骤 1

  相关内容

2. 步骤 2

  相关内容

:::
````

### 示例

输入：

````md
:::: steps
1. 步骤 1

   ```ts
   console.log('Hello World!')
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
::::
````

输出：

:::: steps

1. 步骤 1

   ```ts
   console.log('Hello World!')
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
::::

## 选项组

在 Markdown 中支持选项卡。

你需要将选项卡包装在 `tabs` 容器中。

你可以在 `tabs` 容器中添加一个 id 后缀，该后缀将用作选项卡 id。
所有具有相同 id 的选项卡将共享相同的切换事件。

```md
::: tabs#fruit

<!-- 这里，fruit 将用作 id，它是可选的 -->

<!-- 选项卡内容 -->

:::
```

在这个容器内，你应该使用 `@tab` 标记来标记和分隔选项卡内容。

在 `@tab` 标记后，你可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为选项卡标题。

```md
::: tabs

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```

默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。

```md
::: tabs

@tab 标题 1

<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

<!-- tab 1 内容 -->

@tab 标题 2#值 2

<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

<!-- tab 2 内容 -->

:::
```

你可以在每个选项卡中使用 Vue 语法和组件，并且你可以访问 value 和 isActive，
表示选项卡的绑定值和选项卡是否处于激活状态。

**输入：**

````
::: tabs
@tab npm

npm 应该与 Node.js 被一同安装。

@tab pnpm

```sh
corepack enable
corepack use pnpm@8
```

:::
````

**输出：**

::: tabs
@tab npm

npm 应该与 Node.js 被一同安装。

@tab pnpm

```sh
corepack enable
corepack use pnpm@8
```

:::

## “隐秘”文本

有时候，你不想直接把文本内容毫无保留的展示出来，想要保留一些 隐秘性，
可能是为了引起读者的好奇心，也可能纯粹是故意增加点阅读障碍，让文章变得更加有趣。

为了满足这种小小的心思，主题提供了一个 **“隐秘”文本** 的有趣小功能。它看起来像这样：

:::demo-wrapper
你知道吗， !!鲁迅!! 曾说过：“ !!我没说过这句话！!! ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的
力量！于是，!!我在床上翻了个身!! ！
:::

读者不能直接阅读到完整的内容，部分的内容被 “遮住”，需要鼠标悬停到内容上，才能看到被遮住的内容。

### 配置

该功能默认不启用，你需要在 `theme` 配置中启用。

::: code-tabs
@tab .vuepress/config.ts

```ts
export default defineUserConfig({
  theme: plumeTheme({
    plugins: {
      markdownPower: {
        plot: true,
      },
    }
  })
})
```

:::

`markdownPower.plot` 支持传入 `boolean | PlotOptions` 类型

```ts
interface PlotOptions {
  /**
   * 是否启用 `!! !!`  markdown （该标记为非标准标记，脱离插件将不生效）
   * 如果设置为 false， 则表示不启用该标记，只能使用 <Plot /> 组件
   * @default true
   */
  tag?: boolean

  /**
   * 遮罩层颜色
   */
  mask?: string | { light: string, dark: string }

  /**
   * 文本颜色
   */
  color?: string | { light: string, dark: string }

  /**
   * 触发方式
   *
   * @default 'hover'
   */
  trigger?: 'hover' | 'click'
}
```

### 语法

```md
!!需要隐秘的内容!!
```

如果不想使用 非标准的 `!! !!` 标记语法，你可以将 `plot.tag` 设置为 `false` ，
然后使用 [`<Plot />`](/guide/features/component/#plot) 组件替代。

### 示例

输入：

```md
你知道吗， !!鲁迅!! 曾说过：“ !!我没说过这句话！!! ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的
力量！于是，!!我在床上翻了个身!! ！
```

输出：

:::demo-wrapper
你知道吗， !!鲁迅!! 曾说过：“ !!我没说过这句话！!! ” 令我醍醐灌顶，深受启发，浑身迸发出无可匹敌的
力量！于是，!!我在床上翻了个身!! ！
:::

## 示例容器

有时候，你可能需要在 内容中补充一些 示例，但期望能与 其它内容 分隔开来呈现。
主题支持在 Markdown 文件中添加示例容器。

### 语法

````md
::: demo-wrapper
添加你的示例
:::
````

### 选项

- `title="xxx"`：标题
- `no-padding`：不添加内边距
- `img`: 仅包含图片时使用
- `height="xxx"`: 高度

### 示例

仅包含图片:

```md
::: demo-wrapper img no-padding
![hero](https://theme-plume.vuejs.press/images/custom-hero.png)
:::
```

**输出：**
::: demo-wrapper img no-padding
![hero](https://theme-plume.vuejs.press/images/custom-hero.png)
:::

包含 markdown 语法：

```md
::: demo-wrapper title="标题"
### 三级标题

这是示例容器中的内容。
:::
```

**输出：**
::: demo-wrapper title="标题"

### 三级标题

这是示例容器中的内容。
:::

包含 html /vue 代码：

```md
::: demo-wrapper
<h1 class="your-demo-title">这是标题</h1>
<p class="your-demo-paragraph">这是段落</p>

<style>
  .your-demo-title {
    color: red;
  }
  .your-demo-paragraph {
    color: blue;
  }
</style>
:::
```

**输出：**
::: demo-wrapper

<h1 class="your-demo-title">这是标题</h1>
<p class="your-demo-paragraph">这是段落</p>

<style>
  .your-demo-title {
    color: red !important;
  }
  .your-demo-paragraph {
    color: blue !important;
  }
</style>

:::

## iconify 图标

在 Markdown 文件中使用 [iconify](https://iconify.design/) 的图标。 主题一方面提供了
[`<Icon />`](../功能/组件.md#图标) 组件来支持在 markdown 中使用图标，

一方面，主题还提供了另一种可选的方式，以更简单的方式，在 Markdown 中使用图标，并且将 图标资源编译到
本地静态资源中。

### 配置

该功能默认不启用，你需要在 `theme` 配置中启用。

::: code-tabs
@tab .vuepress/config.ts

```ts
export default defineUserConfig({
  theme: plumeTheme({
    plugins: {
      markdownPower: {
        icons: true,
      },
    }
  })
})
```

:::

同时，该功能还需要你额外安装 `@iconify/json` 依赖。

::: code-tabs
@tab pnpm

```sh
pnpm add @iconify/json
```

@tab yarn

```sh
yarn add @iconify/json
```

@tab npm

```sh
npm install @iconify/json
```

:::

### 语法

```md
:[collect:name]:
```

设置图标大小和颜色

```md
:[collect:name size]:
:[collect:name /color]:
:[collect:name size/color]:
```

`iconify` 拥有非常多的图标，这些图标被分组为不同的 `collect`，每个 `collect` 都有自己的
图标。

你可以从 <https://icon-sets.iconify.design/> 中获取 collect 和 name。

### 示例

输入：

```md
:[ion:logo-markdown]:
```

输出：

:[ion:logo-markdown]:

该语法为行内语法，因此，你可以在同一行中跟其他 markdown 语法 一起使用。

输入：

```md
github: :[tdesign:logo-github-filled]:
修改颜色：:[tdesign:logo-github-filled /#f00]:
修改大小：:[tdesign:logo-github-filled 36px]:
修改大小颜色：:[tdesign:logo-github-filled 36px/#f00]:

彩色图标 :[skill-icons:vscode-dark 36px]:
```

输出：

github: :[tdesign:logo-github-filled]:
修改颜色：:[tdesign:logo-github-filled /#f00]:
修改大小：:[tdesign:logo-github-filled 36px]:
修改大小颜色：:[tdesign:logo-github-filled 36px/#f00]:

彩色图标 :[skill-icons:vscode-dark 36px]:

## can I use

此功能默认不启用，你可以在配置文件中启用它。

::: code-tabs
@tab .vuepress/config.ts

```ts
export default defineUserConfig({
  theme: plumeTheme({
    plugins: {
      markdownPower: {
        caniuse: true, // [!code highlight]
      },
    }
  })
})
```

:::

在编写文章时， 提供嵌入 [can-i-use](https://caniuse.com/) WEB feature 各平台支持说明 的功能。

方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。

在你的 文章 markdown文件中，使用以下格式：

``` md
@[caniuse](feature)
```

为了方便使用，主题提供了工具支持：[caniuse 特性搜索](/tools/caniuse/)，你可以直接使用该工具
帮助生成 markdown 代码。

### 语法

``` md
@[caniuse](feature)
@[caniuse{browser_versions}](feature)
@[caniuse embed_type](feature)
@[caniuse embed_type{browser_versions}](feature)
```

- `feature`

   必填。 正确取值请参考 [caniuse-embed.vercel.app](https://caniuse-embed.vercel.app/zh-CN)

- `{browser_versions}`

  可选。当前特性在多个版本中的支持情况。

  默认值为: `{-2,1}`

  格式： `{past,future}`  取值范围为 `-5 ~ 3`

  - 小于`0` 表示低于当前浏览器版本的支持情况
  - `0` 表示当前浏览器版本的支持情况
  - 大于`0` 表示高于当前浏览器版本的支持情况

- `embed_type`

  可选。 资源嵌入的类型。

  类型： `'embed' | 'image'`

  默认值为：`'embed'`

:::caution
不再推荐使用 image 类型，建议使用 embed 类型，主题更换了 embed 实现技术方案，
现在的 embed 类型优势已远远超过 image 类型，加载速度更快，体积更小，交互体验更好。
:::

### 示例

**获取 css 伪类选择器 `:dir()` 在各个浏览器的支持情况：**

```md
@[caniuse](css-matches-pseudo)
```

效果：

@[caniuse](css-matches-pseudo)

**以图片的形式，获取 css 伪类选择器 `:dir()` 在各个浏览器的支持情况：**

```md
@[caniuse image](css-matches-pseudo)
```

效果：

@[caniuse image](css-matches-pseudo)

**获取 css 伪类选择器 `:dir()` 特定范围浏览器的支持情况：**

```md
@[caniuse{-2,3}](css-matches-pseudo)
```

效果：

@[caniuse{-2,3}](css-matches-pseudo)

## 导入文件

主题支持在 Markdown 文件中导入文件切片。

导入文件 默认不启用，你可以通过配置来启用它。

::: code-tabs
@tab .vuepress/config.ts

```ts
export default defineUserConfig({
  theme: plumeTheme({
    plugins: {
      markdownEnhance: {
        include: true, // [!code highlight]
      },
    }
  })
})
```

:::

### 语法

使用 `<!-- @include: filename -->` 导入文件。

如果要部分导入文件，你可以指定导入的行数:

- `<!-- @include: filename{start-end} -->`
- `<!-- @include: filename{start-} -->`
- `<!-- @include: filename{-end} -->`

同时你也可以导入文件区域:

- `<!-- @include: filename#region -->`

::::tip 文件区域
文件区域是 vscode 中的一个概念，区域内容被 `#region` 和 `#endregion` 注释包围。

<!-- @include: ../../snippet/include-1.snippet.md -->
::::

### 高级

你还可以设置一个对象来自定义包含文件路径和包含行为。

```ts
interface IncludeOptions {
  /**
   * 处理 include 文件路径
   *
   * @default (path) => path
   */
  resolvePath?: (path: string, cwd: string | null) => string
  /**
   * 是否深度导入包含的 Markdown 文件
   *
   * @default false
   */
  deep?: boolean
  /**
   * 是否使用 `<!-- @include: xxx -->` 代替 `@include: xxx` 导入文件
   *
   * @default true
   */
  useComment?: boolean
  /**
   * 是否解析包含的 Markdown 文件的里的相对图像路径
   *
   * @default true
   */
  resolveImagePath?: boolean
  /**
   * 是否解析包含的 Markdown 文件的里的文件相对路径
   *
   * @default true
   */
  resolveLinkPath?: boolean
}
```

例如: 你可以使用 @src 作为源文件夹的别名。

::: code-tabs
@tab .vuepress/config.ts

```ts{5-11}
export default defineUserConfig({
  theme: plumeTheme({
    plugins: {
      markdownEnhance: {
        include: {
          resolvePath: (file) => {
            if (file.startsWith('@src'))
              return file.replace('@src', path.resolve(__dirname, '..'))

            return file
          },
        },
      },
    }
  })
})
```

:::

此外，如果你想将 Markdown 文件直接放在实际文件旁边，但不希望它们呈现为页面，
你可以在 VuePress 配置中设置 `pagePatterns` 选项。
有关详细信息，请参阅 [pagePatterns](https://vuejs.press/zh/reference/config.html#pagepatterns)。

::: code-tabs
@tab .vuepress/config.ts

```ts
export default defineUserConfig({
  // 现在任何带有 `.snippet.md` 扩展名的文件都不会呈现为页面
  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'], // [!code ++]
  theme: plumeTheme({
    plugins: {
      markdownEnhance: {
        include: true,
      },
    }
  })
})
```

:::

### 示例

在项目中有一个 `foo.snippet.md` 文件：
:::: code-tabs
@tab foo.snippet.md

```md
### 三级标题

这是 foo.snippet.md 文件中的内容。

::: info
提示容器包括的内容
:::

<!-- region snippet -->
这里是被 `<!-- region snippet -->` 包裹的内容。

通过 `<!-- @include: ./foo.snippet.md#snippet -->` 来引入。
<!-- endregion snippet -->
```

::::

使用 `<!-- @include: ./foo.snippet.md -->` 导入文件：

:::: demo-wrapper title="Include by file"
<!-- @include: ../../snippet/include-2.snippet.md -->
::::

使用 `<!-- @include: ./foo.snippet.md{5-7} -->` 导入文件内的 5 到 7 行：

:::: demo-wrapper title="Include by lines"
<!-- @include: ../../snippet/include-2.snippet.md{5-7} -->
::::

使用 `<!-- @include: ./foo.snippet.md#snippet -->` 导入 `snippet` 区域

:::: demo-wrapper title="Include by file region"
<!-- @include: ../../snippet/include-2.snippet.md#snippet -->
::::
