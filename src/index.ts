/*
 * @Author: your name
 * @Date: 2021-08-11 23:28:51
 * @LastEditTime: 2021-08-15 17:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/index.ts
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export { default as Foo } from './Foo';
export { default as Button } from './Button';
export { default as Menu } from './Menu/menu';
export { default as MenuItem } from './Menu/menuItem';
export { default as SubMenuItem } from './Menu/subMenuItem';
