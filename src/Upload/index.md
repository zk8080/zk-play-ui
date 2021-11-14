---
title: Upload 上传组件
group:
  title: Upload 上传组件
nav:
  title: '组件'
  path: /components
---

## Upload

### 基本使用

```tsx
import React from 'react';
import { Upload } from 'zk-play-ui';

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
```
