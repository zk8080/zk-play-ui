import React from 'react';
import { Icon } from 'zk-play-ui';
import { ThemeProps } from 'zk-play-ui/es/Icon/index.d';
import './index.less';

const themeArr = [
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
        return (
          <Icon
            key={index}
            icon={'apple-alt'}
            theme={item as ThemeProps}
            size="5x"
          />
        );
      })}
    </div>
  );
};

export default IconDemo;
