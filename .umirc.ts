import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'zk-play-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'zk-play-ui',
        camel2DashComponentName: false,
        customStyleName: (name) => {
          return `./style`; // 注意：这里 ./ 不可省略
        },
      },
      'zk-play-ui',
    ],
  ],
  // more config: https://d.umijs.org/config
});
