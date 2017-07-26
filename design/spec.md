---
id: spec
nav: design
---

## 设计规范

- **字体** 

默认字体采用Helvetica Neue，默认字体大小为12px。

```css
@font_family: "Helvetica Neue", Helvetica, arial, "Microsoft Yahei", "微软雅黑", "宋体", sans-serif;
```

- **默认字体颜色**

非黑的字体颜色既能提高舒适度，也能搭配默认或用户设定的组件库主题色

```css
@color_font: #252f3d;
```

- **边框角**

大部分组件出现边框角，包括button或input框。默认采用2px的圆角边，提高多种组件组合时最佳视觉体验。

```css
@border_radius: 2px;
```

