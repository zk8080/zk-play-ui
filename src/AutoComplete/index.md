---
title: AutoComplete 自动完成
group:
  title: AutoComplete 自动完成
nav:
  title: '组件'
  path: /components
---

## AutoComplete

### 基本使用

```tsx
import React from 'react';
import { AutoComplete } from 'zk-play-ui';
import type { DataSourceType } from 'zk-play-ui/es/AutoComplete/autoComplete.d';

interface LakerPlayerProps {
  value: string;
  number: number;
}
// interface GithubUserProps {
//   login: string;
//   url: string;
//   avatar_url: string;
// }

const testData = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 },
];

export default () => {
  const handleFetch = (val) => {
    return testData.filter((item) => item.value.includes(val));
  };
  const handleSelect = (val) => {
    console.log(val);
  };
  const renderOption = (item: DataSourceType) => {
    const lakerPlayerItem = item as DataSourceType<LakerPlayerProps>;
    return (
      <>
        <h2>Name: {lakerPlayerItem.value}</h2>
        <p>Number: {lakerPlayerItem.number}</p>
      </>
    );
  };
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={handleSelect}
      renderOption={renderOption}
    />
  );
};
```

## 异步获取数据

```tsx
import React from 'react';
import { AutoComplete } from 'zk-play-ui';
import type { DataSourceType } from 'zk-play-ui/es/AutoComplete/autoComplete.d';

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

export default () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };

  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>url: {itemWithGithub.url}</p>
      </>
    );
  };
  return (
    <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} />
  );
};
```
