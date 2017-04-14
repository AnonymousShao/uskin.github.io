## Usage
```js
ReactDOM.render(  
  <ButtonGroup>
    <Button tag="div" value="Prev"/>
    <Button tag="div" value="Mid 1" type="delete"/>
    <Button tag="div" value="Mid 2" disabled={true}/>
    <Button tag="div" value="Next" type="create"/>
  </ButtonGroup>,
  document
);
```

## API
|Name       |Type     |Default     |Descrition                    |
|-----------|---------|------------|------------------------------|
|type       |string   |            | 默认为Button-Group横向排版，type="vertical"时竖向排版 |
|width      |number   |            |Button-Group的总长度             |
