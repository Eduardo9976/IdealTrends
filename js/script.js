import Slide from './modules/Slide.js';
import SubMenu from './modules/SubMenu.js';

const slide = new Slide(".container", ".slider-controls").init();
const subMenu = new SubMenu(".container-submenuOne", ".container-submenuTwo").init();