## Usage
```js
ReactDOM.render(
  <Pagination 
    onClick={this.paginationOnClick}
    total={200}
    perPage={20}
    current={7} />,
  document
);
```

## API
|Name         |Type     |Default     |Descrition                         |
|-------------|---------|------------|-----------------------------------|
|onClick      |function |            |页码点击时返回被点击的页码值(number, e)   |
|onClickLabel |function |            |first, last, prev, next被点击时返回被点击的按钮(status, e) |
|total(必填)   |number   |            |总元素的数量                           |
|current（必填）|number   |            |当前页码                              |
|labelOnly    |boolean  |false       |是否只显示标签的pagination              |
|label        |Object   |            |需要显示的标签信息，参数有{prev: true, next: true, first: true, last: true}   |
