import React from 'react';
import { Button, Icon, Upload } from 'zk-play-ui';

export default () => (
  <Upload
    action="https://getman.cn/mock/upload"
    name="my_file"
    data={{ test: '123' }}
    drag={true}
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>Drag file over to upload</p>
  </Upload>
);
