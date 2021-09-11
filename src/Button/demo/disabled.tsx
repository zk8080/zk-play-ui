import React from 'react';
import { Button } from 'zk-play-ui';
import './index.less';

function BaseDemo() {
  return (
    <div className="button-demo--wrapper">
      <Button disabled={true}>disabled</Button>
      <Button disabled={true} btnType="primary">
        disabled
      </Button>
      <Button disabled={true} btnType="danger">
        disabled
      </Button>
      <Button disabled={true} btnType="link">
        disabled
      </Button>
    </div>
  );
}

export default BaseDemo;
