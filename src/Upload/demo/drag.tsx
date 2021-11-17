import React from 'react';
import { Button, Icon, Upload } from 'zk-play-ui';

export default () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="my_file"
    data={{ test: '123' }}
    drag={true}
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>Drag file over to upload</p>
  </Upload>
);
