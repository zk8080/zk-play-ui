/*
 * @Author: your name
 * @Date: 2021-09-06 21:18:22
 * @LastEditTime: 2021-09-06 21:19:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/hooks/useClickOutside.tsx
 */
import { RefObject, useEffect } from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
