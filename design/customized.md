---
id: customized
nav: design
---

## 自定义配色

USkin提供自定义配色功能，可以修改配色文件来一键修改整个组件库的配色。

## 操作步骤

操作前，请确保USkin及依赖包安装无误，确保项目可以修改并运行

- 进入`/components/themes`，创建新的配色文件夹，例如`premium`

- 在创建的文件夹中，创建`index.less`，即`/components/themes/premium/index.less`

- 参考默认配色库`/components/themes/default/index.less`的less变量名称，对font, success, info, delete, warning颜色变量进行自定义修改

```css
//默认default配色变量
@color_info_100: #f5fdfe;
@color_info_200: #b9f1f9;
@color_info: #00afc8;
@color_info_600: #00a6be;
@color_info_700: #009db4;


//新的自定义配色变量
@color_info_100: #e0f7ff;
@color_info_200: #b9ecff;
@color_info: #42b9e5;
@color_info_600: #1797c6;
@color_info_700: #097fab;
```

- 配置自定义颜色后，编辑`/webpack.config.js`，将的`default`改成新的配色文件夹名称，如`premium`

```js
//默认值
var theme = process.env.npm_config_theme || 'default';

//改成新的配色项名称
var theme = process.env.npm_config_theme || 'premium';
```

- 运行`npm run build`对项目进行重新编译

- 查看自定义配色是否运行成功，可进入demo文件查看，例如`/docs/react_demos/button/button.html`
