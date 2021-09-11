import React from 'react';
import { Button } from 'zk-play-ui';
import './index.less';

function BaseDemo() {
  return (
    <div className="button-demo--wrapper">
      <Button>defaut</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link" href="https://www.baidu.com">
        link
      </Button>
    </div>
  );
}

export default BaseDemo;
