import React from 'react';
import { Upload } from 'zk-play-ui';
import type { UploadFile } from 'zk-play-ui/es/Upload/upload';

const defaultFileList: UploadFile[] = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading',
    percent: 30,
  },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 },
];

export default () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    defaultFileList={defaultFileList}
  />
);
