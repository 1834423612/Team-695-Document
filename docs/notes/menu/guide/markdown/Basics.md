---
title: Basics
author: kjch
icon: fluent:markdown-20-filled
createTime: 2024/08/17 01:16:39
permalink: /guide/markdown/basic/
tags:
  - Guide
  - Markdown
---

<Card title="Path" icon="bi:folder-fill">
    This page was located at
    <Badge type="tip" text="docs/notes/menu/guide/markdown/Basics.md" />
</Card>

::: info
This document is forked from [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/cookbook/markdown/),
licensed under the [MIT](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE) license.
:::

::: warning Attention!
**This document was using Google translate convert from a Chinese version, some words might have mistakes.**  
The original document was located at: [VuePress Plume Theme - Markdown Basic (CN Version ONLY)](https://theme-plume.vuejs.press/guide/markdown/basic/)
:::

Markdown is a markup language that can be written using a plain text editor. With simple markup syntax, it allows plain text content to have certain formatting.

The goal of Markdown is to achieve "readability and writability".  

## General overview

A document written in Markdown format should be able to be published as plain text and not look like it is composed of many tags or formatting instructions. Markdown syntax is influenced by some existing text-to-HTML formats, including [Setext][1], [atx][2], [Textile][3], [reStructuredText][4], [Grutatext][5], and [EtText][6]. However, the biggest inspiration actually comes from the plain text email format.

Therefore, Markdown syntax is composed entirely of punctuation marks, carefully selected to look like what they mean. For example, enclosing a word with asterisks looks like *emphasis*. Markdown lists look like, well, lists. If you have used email, the quoting style looks exactly like quoting a piece of text.

Markdown has a series of derivative versions that are used to extend the functionality of Markdown (such as tables, footnotes, embedded HTML, etc.). These features are not originally available in Markdown, but they allow Markdown to be converted into more formats, such as LaTeX and Docbook. Some well-known enhanced versions of Markdown include Markdown Extra, MultiMarkdown, Maruku, etc. These derivative versions are either based on tools, such as Pandoc, or based on websites, such as GitHub and Wikipedia. They are basically compatible in syntax, but have some changes in syntax and rendering effects.

## Usage

The syntax of Markdown has a main purpose: to be used as a language for *writing* web content. The focus of Markdown is to make files easier to read and write. Therefore, the formatting syntax of Markdown only covers the range that plain text can cover.

Markdown syntax is concise, easy to learn, and more powerful than plain text, so many people use it to write blogs. The world's most popular blogging platform, WordPress, supports Markdown very well.

It is used to write documentation and saved as `README.md` in the software directory.

In addition, we can quickly convert Markdown into presentation slides, Word product documents, LaTeX papers, or even complete minimum viable prototypes with very little code. In the field of data science, Markdown is widely used and has greatly promoted the historical process of dynamic reproducible research.

### Inline HTML

Tags that are not covered by Markdown can be directly written in the file using HTML. There is no need to indicate whether it is HTML or Markdown; just add the tags directly.

Only block elements ── such as `<div>`, `<table>`, `<pre>`, `<p>`, etc. ── must be preceded and followed by empty lines to separate them from the content. And the start and end tags of these (elements) should not be indented with tabs or spaces. Markdown parsers have intelligent judgment and can avoid adding unnecessary `<p>` tags before and after block tags.

For example, add an HTML table in a Markdown file:

```md
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

Please note that Markdown syntax will not be processed in HTML block tags. For example, you cannot use Markdown-style `*emphasis*` inside an HTML block.

### Automatic Conversion of Special Characters

In HTML files, there are two characters that need special handling: `<` and `&`. The `<` symbol is used for opening tags, and the `&` symbol is used to mark HTML entities. If you want to use these symbols as they are, you must use the entity form, such as `&lt;` and `&amp;`.

The `&` symbol can easily confuse people who write web files. If you want to type "AT&T", you have to write it as "`AT&amp;T`", and you have to convert the `&` symbol in the URL, if you want to link to `http://images.google.com/images?num=30&q=larry+bird`

You have to convert the URL to:

```html
http://images.google.com/images?num=30&amp;q=larry+bird
```

before putting it in the `href` attribute of the link tag. Needless to say, it is easy to forget, and it may be the most common error detected by HTML standard checks.

Markdown allows you to use these symbols directly, but you need to be careful with the use of escape characters. If you use the `&` symbol in an HTML entity, it will not be converted, but in other cases, it will be converted to `&amp;`. So if you want to insert a copyright symbol in the file, you can write it like this:

```md
&copy;
```

Markdown will not modify this text, but if you write it like this:

```md
AT&T
```

Markdown will convert it to:

```html
AT&amp;T
```

A similar situation also occurs with the `<` symbol because Markdown supports [inline HTML](#inline-html). If you use the `<` symbol as an HTML tag, Markdown will not convert it, but if you write:

```md
4 < 5
```

Markdown will convert it to:

```html
4 &lt; 5
```

However, it should be noted that within the code range, whether it is inline or block, the `<` and `&` symbols will *always* be converted to HTML entities. This feature allows you to easily write HTML code using Markdown (compared to HTML, in HTML syntax, you need to convert all `<` and `&` to HTML entities in order to write HTML code in HTML files).

---

## Block Elements

### Paragraphs and Line Breaks

A paragraph consists of one or more consecutive lines, and one or more empty lines separate different paragraphs (an empty line is defined as a line that appears empty when displayed; for example, if a line contains only whitespace and tabs, it will also be considered empty). Generally, paragraphs do not need to be indented with whitespace or line breaks.

The phrase "one or more consecutive lines" implies that Markdown allows forced line breaks within paragraphs. This feature is different from most other text-to-HTML formats (including MovableType's "Convert Line Breaks" option), which convert each line break into a `<br />` tag.

<!-- markdownlint-disable MD038 -->

If you *really* want to insert a `<br />` tag, just add two or more spaces (` `) or a backslash (`/`) at the end of the line, and then press Enter.

<!-- markdownlint-enable MD038 -->

Yes, it does require more effort to insert `<br />`, but the method of "converting each line break into `<br />`" is not suitable for Markdown. Markdown's email-style [block quotes][bq] and multi-paragraph [lists][l] are more convenient and easier to read when using line breaks for typesetting.

### Headings

Headings can display the structure of the document.

Markdown supports two forms of heading syntax: [Setext][1] and [atx][2] styles.

Setext style uses underlines, using `=` (highest level heading) and `-` (second level heading), for example:

```md
# This is an H1

## This is an H2
```

Any number of `=` and `-` can be used.

Atx (recommended) style is to insert 1 to 6 `#` at the beginning of the line, corresponding to heading levels 1 to 6, for example:

- H1: `# Header 1`
- H2: `## Header 2`
- H3: `### Header 3`
- H4: `#### Header 4`
- H5: `##### Header 5`
- H6: `###### Header 6`

### Blockquotes

Markdown uses email-style block quotes. If you are familiar with quoting in email messages, you know how to create a block quote in a Markdown file. It looks like you are forcing a line break and then adding `>` at the beginning of each line:

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Markdown also allows you to only add `>` at the beginning of the first line of a paragraph:

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Block quotes can have levels (e.g., quotes within quotes) by adding different numbers of `>` according to the level:

```md
> This is the first level of quoting.
>
> > This is a nested blockquote.
>
> Back to the first level.
```

Block quotes can also use other Markdown syntax, including headings, lists, code blocks, etc.:

```md
> ## This is a header.
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");
```

Any standard text editor can easily create email-style block quotes. For example, in BBEdit, you can select the text and then choose "Increase Quote Level" from the menu.

### Lists

Markdown supports ordered lists and unordered lists.

Unordered lists use a hyphen as the list marker (asterisks and plus signs can also be used):

```md
- Red
- Green
- Blue
```

You can also use (not recommended):

```md
- Red
- Green
- Blue

* Red
* Green
* Blue
```

Ordered lists use numbers followed by a period:

```md
1. Bird
2. McHale
3. Parish
```

It is important to note that the numbers used in the list markers do not affect the HTML output. The above list will generate the following HTML markup:

```html
<ol>
  <li>Bird</li>
  <li>McHale</li>
  <li>Parish</li>
</ol>
```

If you write the list markers as:

```md
1. Bird
1. McHale
1. Parish
```

You will still get the same HTML output. The key is that you can make the numbers in the Markdown file match the output results, or you can be lazy and just write `1` without worrying about the correctness of the numbers.

List items are usually placed flush with the left margin, but they can also be indented with up to three spaces. The list marker must be followed by at least one space or tab.

To make the list look better, you can organize the content with consistent indentation:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

But if you are lazy, you don't necessarily need to:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

If list items are separated by empty lines, Markdown will wrap the content of each item with `<p>` tags when outputting. For example:

```md
- Bird
- Magic
```

will be converted to:

```html
<ul>
  <li>Bird</li>
  <li>Magic</li>
</ul>
```

But this:

```md
- Bird

- Magic
```

will be converted to:

```html
<ul>
  <li><p>Bird</p></li>
  <li><p>Magic</p></li>
</ul>
```

List items can contain multiple paragraphs, and each paragraph under an item must be indented with 4 spaces or one tab:

```md
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

If you indent every line, it will look much better. Of course, if you are lazy, Markdown also allows:

```md
- This is a list item with two paragraphs.

  This is the second paragraph in the list item. You're
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

- Another item in the same list.
```

If you want to include a block quote within a list item, the `>` must be indented:

```md
- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.
```

Of course, it is possible to accidentally create a list item, like this:

```md
1986. What a great season.
```

In other words, when a *number-period-space* appears at the beginning of a line, you can avoid this situation by adding a backslash before the period.

```md
1986\. What a great season.
```

### Code Blocks

Code blocks that are related to code writing or tag language source code usually have pre-formatted code blocks. Generally, we do not want them to be formatted as regular paragraphs in the file, but to be displayed as they are. Markdown uses `<pre>` and `<code>` tags to wrap code blocks.

Creating a code block in Markdown is simple, just indent it with 4 spaces or 1 tab. For example, the following input:

```md
This is a normal paragraph:

This is a code block.
```

Markdown will convert it to:

```html
<p>This is a normal paragraph:</p>

<pre>
  <code>This is a code block.</code>
</pre>
```

The indentation (4 spaces or 1 tab) will be removed. For example:

```md
Here is an example of AppleScript:

tell application "Foo"
beep
end tell
```

will be converted to:

```html
<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
  beep
end tell
</code></pre>
```

A code block will continue until a line without indentation is encountered (or the end of the file).

In a code block, `&`, `<`, and `>` will be automatically converted to HTML entities. This makes it very easy to insert HTML source code for example purposes using Markdown. Just copy and paste, and add indentation, Markdown will handle the rest. For example:

````md
```
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```
````

will be converted to:

```html
<pre>
  <code>&lt;div class="footer"&gt;
  &amp;copy; 2004 Foo Corporation
&lt;/div&gt;</code>
</pre>
```

In a code block, general Markdown syntax will not be converted, such as an asterisk will remain an asterisk. This means that you can easily write Markdown-related files using Markdown syntax.

If you want to include code blocks represented by Markdown in a code block, you can nest them.

`````md
````md
```js
const a = 1
```
````
`````

will be rendered as

````md
```js
const a = 1
```
````

### Horizontal Rules

You can create a horizontal rule by using three or more asterisks, hyphens, or underscores on a single line. There should be no other content in the line. You can also insert spaces between the asterisks. The following examples can all create horizontal rules:

```html
---(recommended) * * * *** ***** - - - ---------------------------------------
```

## Inline Elements

### Links

Markdown supports two forms of link syntax: *inline* and *reference* styles.

In both forms, the link text is marked with square brackets `[ ]`.

To create an inline link, simply immediately follow the square brackets with parentheses containing the URL link. If you want to add a title attribute to the link text, enclose the title text in double quotes after the URL. For example:

```html
This is [an example](http://example.com/ "Title") inline link. [This
link](http://example.net/) has no title attribute.
```

This will produce:

```html
<p>
  This is <a href="http://example.com/" title="Title">an example</a> inline
  link.
</p>

<p><a href="http://example.net/">This link</a> has no title attribute.</p>
```

If you want to link to a resource on the same host, you can use a relative path:

```md
See my [About](/about/) page for details.
```

Reference-style links use another set of square brackets immediately following the parentheses of the link text, and the label used to identify the link is filled in the second set of square brackets:

```md
This is [an example][id] reference-style link.
```

Then, anywhere in the file, you can define the link content for this label:

```md
[id]: http://example.com/ "Optional Title Here"
```

The link definition has the following format:

- Square brackets, which contain the ID of the link
- A colon
- One or more spaces or tabs
- The URL of the link
- Optionally, a title can be added using single quotes, double quotes, or parentheses

The following three link definitions are equivalent:

```md
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
```

**Note:** There is a known issue with Markdown.pl 1.0.1 that ignores link titles enclosed in single quotes.

URLs can also be enclosed in square brackets:

```md
[id]: http://example.com/ "Optional Title Here"
```

You can also place the title attribute on the next line, or add some indentation for better readability if the URL is too long:

```md
[id]: http://example.com/longish/path/to/resource/here "Optional Title Here"
```

URL definitions are only used when generating the links and do not appear directly in the file.

Link labels can contain letters, numbers, spaces, and punctuation marks, but they are **not** case-sensitive. Therefore, the following two links are the same:

```md
[link text][a]
[link text][a]
```

The *shortcut reference link* feature allows you to omit specifying the link label. In this case, the link label and link text are considered the same. To use a shortcut reference link, simply add an empty set of square brackets after the link text. For example, if you want to link "Google" to google.com, you can simplify it as:

```md
[Google][]
```

Then define the link content:

```md
[google]: http://google.com/
```

Since the link text may contain spaces, the shortcut label can also contain multiple words:

```md
Visit [Daring Fireball][] for more information.
```

Then define the link:

```md
[daring fireball]: http://daringfireball.net/
```

Link definitions can be placed anywhere in the file. I prefer to place them directly after the paragraph where the link appears, but you can also place them at the end of the file, like footnotes.

Here is an example of a reference-style link:

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"
```

If you prefer to use link names instead, you can write:

```md
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"
```

Both of the above formats will generate the following HTML:

```html
<p>
  I get 10 times more traffic from
  <a href="http://google.com/" title="Google">Google</a> than from
  <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
  or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.
</p>
```

Here is the same paragraph written in Markdown using inline style, provided for comparison:

```md
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
```

The reference-style links in Markdown are not only easier to write, but also easier to read. Comparing the above examples, the article using reference-style links has only 81 characters, while the article using inline links has 176 characters. If written in pure HTML format, it would have 234 characters. In HTML format, there are more tags than text.

Using reference-style links in Markdown allows the file to resemble the final result produced by a browser, allowing you to move some markup-related information outside of the paragraph text. This allows you to add links without interrupting the reading experience of the article.

### Emphasis

Markdown uses asterisks (`*`) and underscores (`_`) to mark emphasized words. Words surrounded by a single asterisk or underscore will be wrapped in `<em>` tags, while words surrounded by double asterisks or underscores will be wrapped in `<strong>` tags. For example:

```md
**double asterisks** (recommended)

**double underscores** (recommended)

_single asterisks_

_single underscores_
```

will be rendered as:

```html
<em>single asterisks</em>

<em>single underscores</em>

<strong>double asterisks</strong>

<strong>double underscores</strong>
```

You can use whichever style you prefer, but the opening and closing symbols must match.

Emphasis can also be inserted directly within text:

```md
un*frigging*believable
```

However, if there is whitespace on both sides of the asterisks or underscores, they will be treated as regular symbols.

If you want to insert literal asterisks or underscores before and after text, you can use backslashes:

```md
\*this text is surrounded by literal asterisks\*
```

### Code

To mark a small piece of inline code, you can enclose it in backticks (`` ` ``), for example:

```md
Use the `printf()` function.
```

will produce:

```md
<p>Use the <code>printf()</code> function.</p>
```

If you want to insert backticks within code, you can use multiple backticks to open and close the inline code:

```md
``There is a literal backtick (`) here.``
```

This syntax will produce:

```html
<p><code>There is a literal backtick (`) here.</code></p>
```

The starting and ending backticks of a code span can be surrounded by whitespace, with one space after the starting backtick and one space before the ending backtick. This allows you to insert backticks at the beginning of the code span:

```md
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

will produce:

```html
<p>A single backtick in a code span: <code>`</code></p>

<p>A backtick-delimited string in a code span: <code>`foo`</code></p>
```

In a code span, the `&` and square brackets will be converted to HTML entities, making it easier to insert HTML code. The following example:

```md
Please don't use any `<blink>` tags.
```

will be converted to:

```html
<p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>
```

You can also write it as:

```md
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
```

to produce:

```html
<p>
  <code>&amp;#8212;</code> is the decimal-encoded equivalent of
  <code>&amp;mdash;</code>.
</p>
```

### Images

It is not straightforward to design a "natural" syntax for inserting images in plain text applications.

Markdown uses a syntax similar to links to mark images, allowing for both inline and reference styles.

The syntax for inline images looks like this:

```md
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

Here is a detailed description:

- An exclamation mark `!`
- Square brackets, which contain the alternative text for the image
- Parentheses, which contain the URL of the image, and optionally, a title enclosed in quotes

The syntax for reference-style images looks like this:

```md
![Alt text][id]
```

"ID" is the name of the image reference, and the definition of the image reference is the same as for link references:

```md
[id]: url/to/image "Optional title attribute"
```

So far, Markdown does not have a way to specify the width and height of images. If you need to do so, you can use the regular `<img>` tag.

### Other Text Styles

- Strikethrough: `~~delete~~`
- Paragraphs: Leave a blank line between paragraphs
- Line Breaks: End a line with two spaces

---

## Miscellaneous

### Automatic Links

Markdown supports a shorter syntax for handling URLs and email addresses. If enclosed in square brackets, Markdown will automatically convert them into links. The link text will be the same as the link location. For example:

```md
<http://example.com/>
```

will be converted to:

```html
<a href="http://example.com/">http://example.com/</a>
```

Automatic email links work in a similar way, but Markdown performs an encoding conversion process, converting the text characters into hexadecimal HTML entities. This format can confuse some email address harvesting bots. For example:

```md
<address@example.com>
```

will be converted to:

```html
<a
  href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;"
  >&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a
>
```

In a web browser, this text will become a clickable <address@example.com> link.

(This method can confuse some bots, but it cannot block all of them. However, it is better than doing nothing. In any case, publishing your email address will eventually attract spam.)

### Escape Characters

Markdown can use backslashes to insert symbols that have other meanings in the syntax. For example, if you want to emphasize text by using asterisks around it (without using the `<em>` tag), you can add a backslash before the asterisks:

```md
\*literal asterisks\*
```

Markdown supports using backslashes before the following symbols to insert them as regular symbols:

- `\` Backslash
- `` ` `` Backtick
- `*` Asterisk
- `_` Underscore
- `{}` Curly braces
- `[]` Square brackets
- `()` Parentheses
- `#` Hash
- `+` Plus sign
- `-` Minus sign
- `.` Period
- `!` Exclamation mark

## Keyboard Shortcuts

| Rendered Effect | Markdown   | Shortcut       |
| --------------- | ---------- | -------------- |
| **Bold**        | `**text**` | Ctrl/⌘ + B     |
| _Emphasize_     | `*text*`   | Ctrl/⌘ + I     |
| `Inline Code`   | \`code\`   | Select, then `` ` `` |

## Tables

|       Left      |       Center       |      Right       |
| :-------------- | :----------------: | ---------------: |
| Left using `:-` | Center using `:-:` | Right using `-:` |
|        b        |      aaaaaaaaa     |        a         |
|        c        |        aaaa        |        a         |

In your markdown style should be add like this:

```markdown{1-2}
|       Left      |       Center       |      Right       | // [!code focus]
| :-------------- | :----------------: | ---------------: | // [!code focus]
| Left using `:-` | Center using `:-:` | Right using `-:` |
|        b        |      aaaaaaaaa     |        a         |
|        c        |        aaaa        |        a         |
```

[1]: http://docutils.sourceforge.net/mirror/setext.html
[2]: http://www.aaronsw.com/2002/atx/
[3]: http://textism.com/tools/textile/
[4]: http://docutils.sourceforge.net/rst.html
[5]: http://www.triptico.com/software/grutatxt.html
[6]: http://ettext.taint.org/doc/
[bq]: #blockquotes
[l]: #lists
