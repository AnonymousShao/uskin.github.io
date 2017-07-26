---
id: notification
nav: components
---

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
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>notification的title，不设置则没有title</td>
    </tr>
    <tr>
      <td>content</td>
      <td>String</td>
      <td></td>
      <td>notification的content</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>notification的类型，包括默认值，info,success,warning,danger</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>notification的宽度</td>
    </tr>
  </tbody>
</table>
