## Usage
```js
ReactDOM.render(
  <Slider 
    min={-100}
    max={100}
    value={78}
    step={1}
    width={240}
    onChange={listener} />,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|min(必填)   |number   |1           |slider的有效最小值                |
|max(必填)   |number   |10          |slider的有效最大值                |
|value(必填) |number   |1           |slider的初始值                   |
|step       |number   |1           |设置滑动间隔                      |
|onChange   |function |            |滑动条滑动时返回当前值              |
|width      |number   |300         |设置width的总宽                  |
|disabled   |boolean  |false       |是否设置slider为disabled         |
|hideThumb  |boolean  |false       |没有Thumb的slider样式            |
