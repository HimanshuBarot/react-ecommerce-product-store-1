import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/shop/productdetail/:id' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
