## Usage
```js
let items = [{
  title: 'Fruits',
  key: 'fruits',
  submenu: [{
    subtitle: 'Apple',
    key: '1.1',
    onClick: listener,
    href: '#apple',
    iconClass: 'glyphicon icon-overview',
    selected: true
  }, {
    subtitle: 'Strawberry',
    key: '1.2',
    onClick: listener,
    href: '#strawberry',
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Vegetables',
  key: 'vegetables',
  fold: true,
  submenu: [{
    subtitle: 'Potato',
    key: '2.1',
    onClick: listener,
    href: '#potato',
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Eggplant',
    key: '2.2',
    onClick: listener,
    href: '#eggplant',
    iconClass: 'glyphicon icon-overview'
  }]
}];

ReactDOM.render(<Menu width={300} items={items}/>, document);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|items      |array    |            |见下方items详解                  |
|width      |number   |            |menu的宽度                      |
|onClick    |function |            |item被点击时候的触发时间，item的onClick优先级较高 |

### items API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|title      |string   |            |每个子菜单的title                |
|key        |string   |             |每个子菜单的key值                |
|fold       |boolean  |             |是否折叠当前Items                | 
|submenu    |array    |             |每个子菜单的列表信息，见下方详解      |

### items: { submenu:[] } API
|Name          |Type     |Default     |Descrition                    |
|--------------|---------|------------|------------------------------|
|subtitle(必填) |string   |            |每个子列表的title                 |
|key(必填)      |string   |            |每个子列表的key值                 |
|onClick       |function |            |子列表的click事件                 |
|href          |string   |            |设置href值                      |
|iconClass     |string   |            |设置submenu的icon的class值       |
|selected      |boolean  |            |设置是否为selected状态            |
