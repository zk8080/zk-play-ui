import React from 'react';
import { Upload, Button } from 'zk-play-ui';

const defaultFileList = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading' as const,
    percent: 30,
  },
  {
    uid: '122',
    size: 1234,
    name: 'xyz.md',
    status: 'success' as const,
    percent: 30,
  },
  {
    uid: '121',
    size: 1234,
    name: 'eyiha.md',
    status: 'error' as const,
    percent: 30,
  },
];

export default () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    defaultFileList={defaultFileList}
  >
    <Button btnType="primary">上传文件</Button>
  </Upload>
);
