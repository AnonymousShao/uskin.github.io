## Usage
```jsx
const items = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Store',
  href: '#store'
}, {
  name: 'Phones',
  href: '#phone'
}];

ReactDOM.render(<Breadcrumb items={items} onClick={listener} />, document);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|items      |array    |     []     |见下方items详解                  |
|onClick    |function |            |onClick时间的监听器              |

### items
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|name       |string   |            |每个item的名称                   |
|href       |string   |            |每个item的跳转地址                |
