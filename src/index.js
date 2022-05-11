import React from 'react';
import ReactDom  from 'react-dom'
import App from './App';
// 导入antd样式文件 tips:如果引入的是 /antd.css 会报警告，以下是 issues 的解决办法
import 'antd/dist/antd.min.css'

// 引入index.scss文件
import './index.scss'

ReactDom.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)