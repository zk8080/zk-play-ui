/*
 * @Author: your name
 * @Date: 2021-08-26 22:34:12
 * @LastEditTime: 2021-09-06 21:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/index.tsx
 */
import React, {
  FC,
  useState,
  ChangeEvent,
  ReactElement,
  useEffect,
  KeyboardEvent,
  useRef,
} from 'react';
import Input, { InputProps } from '../Input/input';
import classNames from 'classnames';
import Icon from '../Icon/index';
import useDebounce from '@/hooks/useDebounce';
import useClickOutside from '@/hooks/useClickOutside';

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
  // 高亮下标
  const [hightlightIdx, setHightlightIdx] = useState<number>(-1);
  // 输入值防抖
  const debounceInputVal = useDebounce(inputVal);
  // 是否为输入框输入 fix select时重新执行异步加载
  const triggerSearchRef = useRef<boolean>(false);
  // 当前容器Ref
  const EleRef = useRef<HTMLDivElement>(null);
  // 当点击当前容器外部时，清空列表
  useClickOutside(EleRef, () => {
    setSuggestions([]);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputVal(val);
    triggerSearchRef.current = true;
  };

  const handleSelect = (item: DataSourceType) => {
    setInputVal(item.value);
    setSuggestions([]);
    onSelect?.(item);
    triggerSearchRef.current = false;
  };

  const hightlight = (index: number) => {
    if (index < 0) index = 0;
    if (index > suggestions.length) {
      index = suggestions.length - 1;
    }
    setHightlightIdx(index);
  };

  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      // 回车键
      case 13:
        if (suggestions[hightlightIdx]) {
          handleSelect(suggestions[hightlightIdx]);
        }
        break;
      // 上箭头
      case 38:
        hightlight(hightlightIdx - 1);
        break;
      // 下箭头
      case 40:
        hightlight(hightlightIdx + 1);
        break;
      // ESC
      case 27:
        setSuggestions([]);
        break;
      default:
        break;
    }
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
          const itemCls = classNames('suggestions-item', {
            'item-hightlight': index === hightlightIdx,
          });
          return (
            <li
              className={itemCls}
              key={index}
              onClick={() => handleSelect(item)}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    if (debounceInputVal && triggerSearchRef.current) {
      const result = fetchSuggestions(debounceInputVal);
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
    setHightlightIdx(-1);
  }, [debounceInputVal]);

  return (
    <div className={Cls} ref={EleRef}>
      <Input
        value={inputVal}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...resetProps}
      />
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
