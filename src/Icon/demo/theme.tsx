/*
 * @Author: your name
 * @Date: 2021-09-12 23:18:12
 * @LastEditTime: 2021-09-23 21:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Icon/demo/theme.tsx
 */
import React from 'react';
import { Icon } from 'zk-play-ui';
import type { ThemeProps } from '..';
import './index.less';

const themeArr: ThemeProps[] = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

const IconDemo = () => {
  return (
    <div className="icon-demo--wrapper">
      {themeArr.map((item, index) => {
        return <Icon key={index} icon={'apple-alt'} theme={item} size="5x" />;
      })}
    </div>
  );
};

export default IconDemo;
