// export default {
//   esm: 'babel',
//   cjs: 'babel',
// };

// esm -> es module 浏览器环境
// cjs -> nodejs 环境（测试|ssr）
// umd -> 通过浏览器 script 引入的方式
// 默认 esm: 'rollup' 打包在一起，无法实现按需加载

export default {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
    minify: false,
    importLibToEs: true,
  },
  cjs: 'babel',
  umd: {
    file: 'zk-play-ui',
    minFile: true,
    sourcemap: true,
  },
  lessInBabelMode: false,
  extractCSS: true,
  runtimeHelpers: true,
};
