import React from 'react';
import { Button } from 'zk-play-ui';
import './index.less';

function BaseDemo() {
  return (
    <div className="button-demo--wrapper">
      <Button size="lg">large</Button>
      <Button>default</Button>
      <Button size="sm">small</Button>
    </div>
  );
}

export default BaseDemo;
