---
id: dropdown-button
nav: components
---

## Usage
```js
let btn = {
  value: 'Dropdown Button',
  iconClass: 'more'
};
let items = [{
  items: [{
    title: 'Change Security Group',
    key: '0'
  }, {
    title: 'Change Passoword',
    key: '1'
  }]
}, {  
  title: 'Volume Ops',
  key: 'volume',
  items: [{
    title: 'Termitate',
    key: '2',
    danger: true
  }, {
    title: 'Remove Volume',
    key: '3',
    disabled: true
  }]
}];

ReactDOM.render(
  <DropdownButton
    buttonData={btn}
    dropdownItems={dropdownItems}
    dropdownOnClick={listener}
    dropdownStyle={{ width: 164 }}
  />,
  document
);
```

## API
|Name            |Type     |Default     |Descrition                    |
|----------------|---------|------------|------------------------------|
|dropdownOnClick |function |            |点击item时候触发，返回参数(e, item) |
|buttonData      |object   |            |参数有{ value: string, iconClass: string } |
|dropdownItems   |object   |            |与Dropdown的items接口参数一直      |
|dropdownStyle   |object   |            |Dropdown的样式                  |
|disabled        |false    |            |是否禁止dropdown的按钮            |
