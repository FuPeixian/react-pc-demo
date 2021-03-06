import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '@/pages/Login';
import Layout from '@/pages/Layout';
import {Button} from 'antd'

function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Button type='primary'>hahah</Button>
        <Routes>
          {/* 创建路由path 和组件对应关系 */}
          <Route path='/' element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
