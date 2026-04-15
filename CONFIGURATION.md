# 网站配置指南

## 1. 基本信息 — `_config.yml`

这是最核心的配置文件，控制全站的名字、签名、社交链接。

```yaml
title: 张洪凯              # 导航栏左上角的名字
description: 软件工程师 · 摄影爱好者 · 音乐聆听者   # 侧边栏签名

author:
  name: 张洪凯             # 侧边栏显示的名字
  email: zhk800@example.com
  github: zhk800           # GitHub 用户名，侧边栏图标链接自动拼接
```

---

## 2. 头像

当前侧边栏是一个文字占位符（显示"张"字）。换成真实头像有两种方式：

**方式 A：用图片文件（推荐）**

把头像图片放到 `assets/img/avatar.jpg`，然后编辑 `index.html` 第 8 行：

```html
<!-- 把这行 -->
<div class="sidebar-avatar">张</div>

<!-- 换成这行 -->
<img class="sidebar-avatar" src="/assets/img/avatar.jpg" alt="头像">
```

同时在 `_sass/_layout.scss` 找到 `.sidebar-avatar`，把渐变背景那些属性替换成：

```scss
.sidebar-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
}
```

**方式 B：保留文字占位符**

只改 `index.html` 第 8 行里的汉字：

```html
<div class="sidebar-avatar">洪</div>
```

---

## 3. 网站 Favicon（浏览器标签页图标）

把图标文件放到项目根目录，然后在 `_layouts/default.html` 的 `<head>` 里加一行：

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<!-- 或者 PNG 格式 -->
<link rel="icon" href="/favicon.png" type="image/png">
```

推荐尺寸：`favicon.ico`（32×32）或 `favicon.png`（建议 192×192）。

---

## 4. 知乎链接

`index.html` 第 15 行，把链接改成你的个人主页：

```html
<a href="https://www.zhihu.com/people/你的知乎ID" ...>
```

---

## 5. 文章 — `_posts/` 目录

每篇文章是一个 Markdown 文件，文件名格式：`YYYY-MM-DD-slug.md`。

front matter 完整示例：

```yaml
---
layout: post
title: "文章主标题"
subtitle: "副标题，显示在主标题下方"   # 可选
date: 2026-04-10
tags: [技术, 思考]                     # 控制侧边栏 tag 筛选
image: /assets/img/posts/cover.jpg    # 可选，文章列表缩略图
excerpt: "自定义摘要，不写则自动截取正文前140字"  # 可选
---

正文内容...
```

**tags 说明：** 你在 front matter 里写了哪些 tag，侧边栏就会自动出现对应的筛选按钮，无需手动维护。

---

## 6. 音乐卡片 — `_data/music.yml`

每条记录对应 Life 页的一张音乐卡片：

```yaml
- title: "歌曲名"
  artist: "艺术家"
  album: "专辑名"
  cover: /assets/img/music/cover.jpg   # 封面图，建议正方形
  note: "一句话感受，斜体显示"           # 可选
```

---

## 7. Journey — `_data/journey.yml`

每条记录对应 Life 页的一张 Journey 卡片：

```yaml
- src: /assets/img/journey/photo1.jpg
  title: "照片标题"
  location: "拍摄地点"
  featured: true    # 可选，预留字段
```

页面会显示图片卡片和地点信息。

---

## 8. 图片资源建议目录结构

```
assets/
  img/
    avatar.jpg          # 头像
    posts/              # 文章封面图
      cover1.jpg
    music/              # 音乐封面
      album1.jpg
    photos/             # 摄影作品
      photo1.jpg
```

---

## 9. 公式支持（MathJax）

站点已启用 MathJax，文章中可直接写 LaTeX：

**行内公式：**

```md
这是质能方程：$E = mc^2$。
```

**块级公式：**

```md
$$
\int_0^1 x^2\,dx = \frac{1}{3}
$$
```

**避免误触发公式解析：**

如果你只是想显示美元符号，前面加反斜杠：

```md
价格是 \$19.9
```

---

## 快速对照表

| 想改什么 | 改哪个文件 | 改哪里 |
| --- | --- | --- |
| 网站名/导航左上角 | `_config.yml` | `title:` |
| 侧边栏签名 | `_config.yml` | `description:` |
| 侧边栏名字 | `_config.yml` | `author.name:` |
| GitHub 链接 | `_config.yml` | `author.github:` |
| 知乎链接 | `index.html` | 第 15 行 href |
| 头像 | `index.html` | 第 8 行 |
| Favicon | `_layouts/default.html` | `<head>` 加 link 标签 |
| 文章内容 | `_posts/*.md` | front matter + 正文 |
| 音乐卡片 | `_data/music.yml` | 增删条目 |
| Journey 卡片 | `_data/journey.yml` | 增删条目 |

```bash
bundle exec jekyll serve --livereload
```
