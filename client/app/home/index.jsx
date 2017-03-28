import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import { URL } from '../constant';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'This is Home page'
    };
  }

  getWelcomPage() {
    return (
      <div className="welcome-page">
        <p className="title">
          <span className="head-title">USkin</span>
          <span className="sub-title">React组件库及配色方案</span>
        </p>
        <div className="btn-area">
          <a className="button button-green">开发指南</a>
          <a className="button button-white">
            <img className="icon-github" src="/client/image/icon-github.png" />
            GitHub
          </a>
        </div>
        <div className="stuff-area">
          <img className="stuff wp-coffee" src="/client/image/home-wp-coffee.png" />
          <img className="stuff wp-pencil" src="/client/image/home-wp-pencil.png" />
          <img className="stuff wp-computer" src="/client/image/home-wp-computer.png" />
          <img className="stuff wp-hand" src="/client/image/home-wp-hand.png" />
          <img className="stuff wp-mouse" src="/client/image/home-wp-mouse.png" />
          <img className="stuff wp-paper" src="/client/image/home-wp-paper.png" />
        </div>
      </div>
    );
  }

  getContentPage() {
    return (
      <div className="content-page">
        <div className="content white-type">
          <div className="inner">
            <div className="img-area">
              <img src="/client/image/home-content-puzzle.png" />
            </div>
            <div className="text-area">
              <p>包罗万象</p>
              <span>提供丰富多样的组件和组件模式，页面功能全能覆盖、繁简模式切换自如。</span>
            </div>
          </div>
        </div>
        <div className="content gray-type">
          <div className="inner">
            <div className="text-area">
              <p>挥洒自如</p>
              <span>大方简洁的扁平化设计，配合色彩自由定义，组件与页面整体风格浑然天成、相得益彰。</span>
            </div>
            <div className="img-area">
              <img src="/client/image/home-content-paint.png" />
            </div>
          </div>
        </div>
        <div className="content white-type">
          <div className="inner">
            <div className="img-area">
              <img src="/client/image/home-content-person.png" />
            </div>
            <div className="text-area">
              <p>身量小巧</p>
              <span>使用不着痕迹，React模块结构清晰，完整的文档、用例和单元测试助力开发。</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { HOME } = URL;
    const WelcomePage = this.getWelcomPage;
    const ContentPage = this.getContentPage;

    return (
      <div className="home">
        <NavBar url={HOME} />
        <WelcomePage />
        <ContentPage />
      </div>
    );
  }
}

export default Home;
