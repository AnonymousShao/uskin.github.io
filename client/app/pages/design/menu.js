import { URL } from '../../constant';

const menu = [{
  title: '设计规范',
  links: [{
    link: URL.DESIGN_SPEC,
    data: '设计规范'
  }, {
    link: URL.DESIGN_COLOR,
    data: '配色方案',
    selected: true
  }, {
    link: URL.DESIGN_CUSTOMIZED,
    data: '自定义配色'
  }]
}];

export default menu;
