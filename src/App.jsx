
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Shop from './components/pages/Shop/shop.jsx';
import Main from './components/pages/main/main.jsx';




function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
  </BrowserRouter>

  
}

export default App;
