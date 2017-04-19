import React from 'react';
import menu from './menu';
import { URL } from '../../constant';
import getPage from '../../common/getPage';

class Customized extends React.Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    return (
      <div>
        <h2>配色方案</h2>
        <p>Uskin提供自定义颜色配置方案，用户可以修改配色来轻松完成组件及网站的风格调整。</p>
        <h2>字体颜色</h2>
        <ul>
          <li style={{ color: '#333333' }}>标题：#333333 This is Title.</li>
          <li style={{ color: '#666666' }}>正文：#666666 This is Content.</li>
          <li style={{ color: '#C6C6C6' }}>失效文字：#C6C6C6 This is Disabled Content.</li>
        </ul>
        <br/>
        <h2>调色板</h2>
        <h4>主题：Info Color</h4>
        <ul className="design-color-pallet">
          <li style={{ backgroundColor: '#10afe6' }}>#10afe6</li>
          <li style={{ backgroundColor: '#eeeeee' }}>eeeeee</li>
          <li style={{ backgroundColor: '#fffeff' }}>eeeeee</li>
          <li style={{ backgroundColor: '#aaaaaa' }}>eeeeee</li>
          <li className="dark" style={{ backgroundColor: '#333333' }}>eeeeee</li>
          <li style={{ backgroundColor: '#666666' }}>eeeeee</li>
        </ul>
        <h4>成功：Success Color</h4>
        <h4>危险：Danger Color</h4>
        <h4>警告：Warning Color</h4>
        <h4>灰色：Gray Color</h4>
        <h4>禁用：Disabled Color</h4>
      </div>
    );
  }

  render() {
    return getPage(menu, URL.DESIGN_COLOR, this.getContent());
  }
}

export default Customized;
