const { override,
   fixBabelImports,
    addWebpackAlias,
    addLessLoader
   } = require('customize-cra')
const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, '.', dir)
// }
const modifyVars=require('./lessVars')
module.exports = override(
  addLessLoader({
    javascriptEnabled:true,
    modifyVars
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)