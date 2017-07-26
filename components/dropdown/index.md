---
id: dropdown
nav: components
---

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
<table>
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items">见下方items详解</a></td>
    </tr>
  </tbody>
</table>

**items**
<table id="items">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>每个子菜单的title，如果不设置不显示title</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个子菜单的key值</td>
    </tr>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items-items">每个子菜单的列表信息，见下方详解</a></td>
    </tr>
  </tbody>
</table>

**items: { items:[] }**
<table id="items-items">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个子列表的title</td>
    </tr>
    <tr>
      <td>key(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个子列表的key值</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>子列表的click事件</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为disabled状态</td>
    </tr>
    <tr>
      <td>danger</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为danger状态</td>
    </tr>
  </tbody>
</table>
