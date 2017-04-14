## Usage
```js
<InputNumber 
  min={0}
  max={100}
  value={56}
  step={2}
  onChange={this.inputNumberOnChange}
  disabled={false} />
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|min        |number   |-Infinity   |设置最小值                       |
|max        |number   |Infinity    |设置最大值                       |
|value      |number   |0           |设置初始值                       |
|step       |number   |1           |设置输入字段的合法数字间隔            |
|onChange   |function |            |当input-number的value有修改时返回value |
|disabled   |boolean  |false       |设置input-number是否该disable    |
|width      |number   |            |设置Input-number的总宽                  |
