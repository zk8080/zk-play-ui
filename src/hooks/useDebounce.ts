/*
 * @Author: your name
 * @Date: 2021-08-30 22:43:02
 * @LastEditTime: 2021-08-30 22:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/hooks/useDebounce.ts
 */
import { useState, useEffect } from 'react';

/**
 * 防抖自定义hooks
 */
const useDebounce = (value: any, delay = 300) => {
  const [debounceVal, setDebounceVal] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
