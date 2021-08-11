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

      <Button size="lg">large</Button>
      <Button size="sm">small</Button>
    </div>
  );
}

export default BaseDemo;
