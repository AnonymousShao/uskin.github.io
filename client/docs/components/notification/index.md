## Usage
```js
ReactDOM.render(
  <Notification
    title="Note:"
    content="Life is tough, but I'm tougher"
    type="info"
    width={200} />,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                            |
|-----------|---------|------------|--------------------------------------|
|title      |string   |            |notification的title，不设置则没有title    |
|content    |string   |            |notification的content                  |
|type       |string   |            |包括默认值，info,success,warning,danger  |
|width      |number   |            |notification的宽度                      |
