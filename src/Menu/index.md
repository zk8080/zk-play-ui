---
title: Menu 导航菜单
group:
  title: Menu 导航菜单
nav:
  title: '组件'
  path: /components
---

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
