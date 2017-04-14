## Usage
```js
ReactDOM.render(
  <Tip
    title="Note:"
    content="Life is tough, but I'm tougher"
    type="info"
    width={200} />,
  document
);
```

## API
|Name         |Type     |Default     |Descrition                    |
|-------------|---------|------------|------------------------------|
|title        |string   |            |tip的title，不设置则没有title     |
|content      |string   |            |tip的content                  |
|width        |number   |            |tip的宽度                      |
|type         |string   |            |tip的类型，包括默认值，info,success,warning,danger  |
|showIcon     |boolean  |false       |是否显示title前面的icon，根据不用的type有不同的icon     |
|icon         |string   |            |自定义icon                     |
|enableClose  |boolean  |false       |是否显示关闭按钮                  |
|isAutoHide   |boolean  |false       |是否3秒后自动关闭                 |
