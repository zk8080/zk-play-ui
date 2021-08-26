<!--
 * @Author: your name
 * @Date: 2021-08-26 23:04:57
 * @LastEditTime: 2021-08-26 23:18:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/index.md
-->

## AutoComplete

### 基本使用

```tsx
import React from 'react';
import { AutoComplete } from 'zk-play-ui';

const testData = ['apple', 'orange', 'green', 'yellow', 'red', 'blue'];

export default () => {
  const handleFetch = (val) => {
    return testData.filter((item) => item.includes(val));
  };
  const handleSelect = (val) => {
    console.log(val);
  };
  return (
    <AutoComplete fetchSuggestions={handleFetch} onSelect={handleSelect} />
  );
};
```
