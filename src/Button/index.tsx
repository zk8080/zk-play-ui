/*
 * @Author: your name
 * @Date: 2021-08-22 16:26:20
 * @LastEditTime: 2021-08-24 22:13:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Button/index.tsx
 */
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
// import './index.less';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 按钮禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 按钮大小
   * @default sm
   */
  size?: ButtonSize;
  /**
   * @description 按钮类型
   * @default default
   */
  btnType?: ButtonType;
  /**
   * @description 按钮子元素
   */
  children: React.ReactNode;
  /**
   * @description 点击跳转的地址，同a标签href
   */
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const prefixCls = 'zk-play-btn';

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    size = 'sm',
    disabled,
    btnType,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType}`]: btnType,
    [`${prefixCls}-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
