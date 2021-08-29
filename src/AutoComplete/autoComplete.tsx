/*
 * @Author: your name
 * @Date: 2021-08-26 22:34:12
 * @LastEditTime: 2021-08-29 21:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/index.tsx
 */
import React, { FC, useState, ChangeEvent, ReactElement } from 'react';
import Input, { InputProps } from '../Input/input';
import classNames from 'classnames';
import Icon from '../Icon/index';
interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (
    str: string,
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const prefixCls = 'zk-play-autoComplete';

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    className,
    value,
    renderOption,
    ...resetProps
  } = props;

  const Cls = classNames(prefixCls, className);
  // 输入框数据
  const [inputVal, setInputVal] = useState<string>(value as string);
  // 要显示的列表数据
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  // 是否显示loading
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputVal(val);
    if (val) {
      const result = fetchSuggestions(val);
      if (result instanceof Promise) {
        setLoading(true);
        result.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(result);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item: DataSourceType) => {
    setInputVal(item.value);
    setSuggestions([]);
    onSelect?.(item);
  };

  // 动态渲染模版
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  // 渲染显示列表
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={Cls}>
      <Input value={inputVal} onChange={handleChange} {...resetProps} />
      {loading && (
        <ul>
          <Icon icon="spinner" spin></Icon>
        </ul>
      )}
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
