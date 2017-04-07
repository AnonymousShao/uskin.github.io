## Usage
```js
const {Switch} = uskin;

ReactDOM.render(
  <Switch
    onChange={listener}
    labelOn="ON"
    labelOff="OFF"
    checked={true}
    width={50}
    disabled={false} />,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|onChange   |function |            |当switch的状态变化时的handler     |
|labelOn    |string   |            |on状态下显示的文字                 |
|labelOff   |string   |            |off状态下显示的文字                |
|checked    |boolean  |   false    |设置switch的初始状态是否为checked   |
|disbled    |boolean  |   false    |设置switch是否为disabled         |
|width      |number   |            |设置switch的宽度                 |
