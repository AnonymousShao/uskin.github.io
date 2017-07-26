---
id: breadcrumb
nav: components
---

## Usage
```js
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

### API

<table id="api">
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
      <td>[]</td>
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
      <td>name(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个item的路由名称</td>
    </tr>
    <tr>
      <td>href</td>
      <td>String</td>
      <td></td>
      <td>每个item的地址</td>
    </tr>
  </tbody>
</table>