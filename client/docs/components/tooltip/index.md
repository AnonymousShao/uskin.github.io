## Usage
```js
ReactDOM.render(
  <Tooltip
    content="I'm a tooltip"
    type="top"
    width={200} />,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|content    |string   |            |tooltip的content               |
|type       |string   |            |类型有默认值和error的type         |
|shape      |string   |            |tooltip的类型，包括默认值，top, top-left, top-right, right, right-top, right-bottom, bottom, bottom-left, bottom-right, left, left-top, left-bottom |
|width      |number   |            |tooltip的宽度                   |
|hide       |boolean  |false       |是否隐藏tooltip                 |
