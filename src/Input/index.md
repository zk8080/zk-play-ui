<!--
 * @Author: your name
 * @Date: 2021-08-23 21:46:25
 * @LastEditTime: 2021-08-23 22:03:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Input/index.md
-->

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
