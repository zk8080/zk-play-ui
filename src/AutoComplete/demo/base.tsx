/*
 * @Author: your name
 * @Date: 2021-09-23 21:35:04
 * @LastEditTime: 2021-09-23 21:38:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/demo/base.tsx
 */
import React from 'react';
import { AutoComplete } from 'zk-play-ui';
import type { DataSourceType } from '..';

interface LakerPlayerProps {
  value: string;
  number: number;
}

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

const Index = () => {
  const handleFetch = (val: string) => {
    return testData.filter((item) => item.value.includes(val));
  };
  const handleSelect = (item: DataSourceType) => {
    console.log(item);
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

export default Index;
