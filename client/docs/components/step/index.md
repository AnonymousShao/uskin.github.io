## Usage
```js
let items = [{
  name: 'step 1',
  value: '0'
}, {
  name: 'step 2',
  value: '1'
}, {
  name: 'step 3',
  value: '2',
  selected: true
}];

ReactDOM.render(
  <Step
    items={items}
    onClick={listener}
    width={600} />,
  document
);
```

## API
|Name        |Type     |Default     |Descrition                    |
|------------|---------|------------|------------------------------|
|items       |array    |            |见下方items详解                  |
|onClick     |function |            |当step点击时的Handler，返回该元素的所有信息  |
|width       |number   |            |设置steps的总长度                |
|disabled    |boolean  |false       |设置是否让用户可点击每个step        |
|consecutive |boolean  |false       |设置是否step前n个都是被选中状态      |

## API
|Name        |Type     |Default     |Descrition                    |
|------------|---------|------------|------------------------------|
|name        |string   |            |每个元素的显示名称                 |
|default     |boolean  |            |设置是否是被选中状态               |
