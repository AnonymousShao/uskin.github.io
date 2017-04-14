## Usage
```jsx
ReactDOM.render(
  <Button
    value="Create"
    onClick={listener}
    type="create"
    size="sm" />,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|onClick    |function |            |click事件的handler              |
|value      |string   |            |Button的文字                    |
|btnKey     |String   |            |Button的key值，在时间代理中区分每个Button |
|iconClass  |string   |            |Button的icon类名                |
|type       |string   |            |类型包括默认，create, delete, warning, cancel, status |
|size       |string   |            |大小包括默认，xl,lg,sm,xs         |
|tag        |string   |            |默认生成tag为Button，当tag="div"时生成div标签 |
|initial    |boolean  |false       |Button的宽度适应于文字长度          |
|selected   |boolean  |false       |Button是否为selected状态         |
|disabled   |boolean  |false       |Button是否为disabled状态         |
