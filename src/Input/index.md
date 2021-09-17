---
title: Input 输入框
group:
  title: Input 输入框
nav:
  title: '组件'
  path: /components
---

## Input

### 基本使用

```tsx
import React from 'react';
import { Input } from 'zk-play-ui';

export default () => (
  <Input style={{ width: '300px' }} placeholder="please input some value" />
);
```

### 禁用

```tsx
import React from 'react';
import { Input } from 'zk-play-ui';

export default () => (
  <Input style={{ width: '300px' }} placeholder="disabled" disabled />
);
```

### 图标

```tsx
import React from 'react';
import { Input } from 'zk-play-ui';

export default () => (
  <Input
    style={{ width: '300px' }}
    placeholder="input with icon"
    icon="search"
  />
);
```

### 前缀后缀

```tsx
import React from 'react';
import { Input } from 'zk-play-ui';

export default () => (
  <>
    <Input
      style={{ width: '300px' }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: '300px' }} defaultValue="google" append=".com" />
  </>
);
```

### 尺寸

```tsx
import React from 'react';
import { Input } from 'zk-play-ui';

export default () => (
  <>
    <Input style={{ width: '300px' }} defaultValue="large size" size="lg" />
    <Input style={{ width: '300px' }} defaultValue="default size" />
    <Input style={{ width: '300px' }} placeholder="small size" size="sm" />
  </>
);
```
