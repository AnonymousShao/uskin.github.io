## Usage
```js
let items = [{
  name: 'Overview',
  key: '0'
}, {
  name: 'Account Recharge',
  key: '1',
  default: true
}, {
  name: 'Recharge Record',
  key: '2',
  disabled: true
}];

ReactDOM.render(<Tab items={items} size="small"/>, document);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|items      |array    |            |见下方items详解                 |
|onClick    |function |            |非disabled的tab被点击时候的事件，返回参数(e, item) |
|type       |string   |            |type="sm"为small样式，否则为默认样式  |

## items API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|name       |string   |            |每个tab的显示名称                 |
|key        |string   |            |每个tab的唯一key值                |
|default    |boolean  |            |是否为初始选中状态                 |
|disabled   |boolean  |            |是否设置为disabled               |
