/*
 * @Author: your name
 * @Date: 2021-08-11 20:31:14
 * @LastEditTime: 2021-08-11 20:49:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Button/demo.tsx
 */
import React from 'react';
import { Button } from 'zk-play-ui';
import './demo.less';

function BaseDemo(props) {
  return (
    <div className="button-demo--wrapper">
      <Button>defaut</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link" href="https://www.baidu.com">
        link
      </Button>
      <Button
        disabled={true}
        onClick={() => {
          console.log('123');
        }}
      >
        测试
      </Button>

      <Button size="lg">large</Button>
      <Button size="sm">small</Button>
    </div>
  );
}

export default BaseDemo;
