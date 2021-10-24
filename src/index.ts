/*
 * @Author: your name
 * @Date: 2021-08-11 23:28:51
 * @LastEditTime: 2021-10-24 21:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/index.ts
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export { default as Button } from './Button';
export { default as Menu } from './Menu';
export { default as Icon } from './Icon';
export { default as Transition } from './Transition';
export { default as Input } from './Input';
export { default as AutoComplete } from './AutoComplete';
export { default as Upload } from './Upload';
