# React
安装脚手架
```npm install -g create-react-app```
问题总结
- React 打包 `yarn run build` 后打开页面空白报错
解决方案：`package.json` 添加属性 `homepage`
```packjson
"homepage": "."
```
