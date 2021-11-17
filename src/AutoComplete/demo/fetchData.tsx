import React from 'react';
import { AutoComplete } from 'zk-play-ui';

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const Index = () => {
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

  const renderOption = (item: any) => {
    const itemWithGithub = item;
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

export default Index;
