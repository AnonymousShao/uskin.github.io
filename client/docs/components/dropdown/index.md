## Usage
```js
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

ReactDOM.render(<Dropdown items={items} onClick={listener} />, document);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|items      |array    |            |见下方items详解                  |
|onClick    |function |            |点击item时候触发，返回参数(e, item) |

### items API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|title      |string   |            |每个子菜单的title，如果不设置不显示title |
|key        |string   |            |每个子菜单的key值                 |
|items      |array    |            |每个子菜单的key值                 |

### items: { items:[] } API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|title(必填) |string   |            |每个子列表的title                |
|key(必填)   |string   |            |每个子列表的key值                 |
|disabled   |boolean  | false      |是否设置为disabled状态            |
|danger     |boolean  | false      |是否设置为danger状态              |
|children   |array    |            |每个子菜单的子菜单列表信息，见下方详解   |

### items: { items:[ children: [] ] } API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|title(必填) |string   |            |每个子列表的title                 |
|key(必填)   |string   |            |每个子列表的key值                 |
|disabled   |boolean  | false      |是否设置为disabled状态            |
|danger     |boolean  | false      |是否设置为danger状态              |
|items      |array    |            |每个children的items列表信息，见items详解  |
