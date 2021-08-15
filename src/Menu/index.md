<!--
 * @Author: your name
 * @Date: 2021-08-15 17:34:05
 * @LastEditTime: 2021-08-15 17:37:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Menu/index.md
-->

## Menu

Demo:

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenuItem } from 'zk-play-ui';

export default () => (
  <Menu defaultIndex={'0'} defaultOpenSubMenus={['3']}>
    <MenuItem>menu</MenuItem>
    <MenuItem disabled>menu1</MenuItem>
    <MenuItem>menu2</MenuItem>
    <SubMenuItem title="drop">
      <MenuItem>test1</MenuItem>
      <MenuItem>test2</MenuItem>
    </SubMenuItem>
  </Menu>
);
```
