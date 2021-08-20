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
import { Menu } from 'zk-play-ui';

export default (props) => (
  <Menu
    defaultIndex="0"
    className="test"
    defaultOpenSubMenus={['4']}
    mode="vertical"
  >
    <Menu.Item>active</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.Item className="test-xyz">xyz</Menu.Item>
    <Menu.SubMenuItem title="dropdown">
      <Menu.Item>drop1</Menu.Item>
    </Menu.SubMenuItem>
    <Menu.SubMenuItem title="opened">
      <Menu.Item>opened1</Menu.Item>
    </Menu.SubMenuItem>
  </Menu>
);
```
