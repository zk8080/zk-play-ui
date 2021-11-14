import React, { FC } from 'react';
import { ThemeProps } from '../Icon/index';
export interface ProgressProps {
  /**
   * @description 百分比
   */
  percent: number;
  /**
   * @description 进度条高度
   */
  strokeHeight?: number;
  /**
   * @description 是否显示百分比文案
   */
  showText?: boolean;
  /**
   * @description 进度条样式
   */
  styles?: React.CSSProperties;
  /**
   * @description 进度条主题色
   */
  theme?: ThemeProps;
}

const prefixCls = 'zk-play-progress-bar';

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div className={prefixCls} style={styles}>
      <div
        className={`${prefixCls}-outer`}
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`${prefixCls}-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};
export default Progress;
