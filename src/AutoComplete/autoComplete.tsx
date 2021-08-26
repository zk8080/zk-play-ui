/*
 * @Author: your name
 * @Date: 2021-08-26 22:34:12
 * @LastEditTime: 2021-08-26 23:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/index.tsx
 */
import React, { FC, useState, ChangeEvent } from 'react';
import Input, { InputProps } from '../Input/input';
import classNames from 'classnames';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (str: string) => void;
}

const prefixCls = 'zk-play-autoComplete';

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, className, value, ...resetProps } = props;

  const Cls = classNames(prefixCls, className);
  // 输入框数据
  const [inputVal, setInputVal] = useState<string>(value as string);
  // 要显示的列表数据
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputVal(val);
    if (val) {
      const result = fetchSuggestions(val);
      setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item: string) => {
    setInputVal(item);
    setSuggestions([]);
    onSelect?.(item);
  };

  // 渲染显示列表
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={Cls}>
      <Input value={inputVal} onChange={handleChange} {...resetProps} />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
