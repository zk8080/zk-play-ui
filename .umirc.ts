/*
 * @Author: your name
 * @Date: 2021-09-12 23:18:12
 * @LastEditTime: 2021-09-17 21:18:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/.umirc.ts
 */
import { defineConfig } from 'dumi';
import path from 'path';

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
          // return `./style`; // 注意：这里 ./ 不可省略
          // 由于demo文件夹和style同级，所以使用path.resolve拼接绝对定位
          return `${path.resolve('src')}/${name}/style/index.ts`;
        },
      },
      'zk-play-ui',
    ],
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  base: '/zk-play-ui',
  publicPath: '/zk-play-ui/',
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
