import Nav from './Components/navbar/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import Shopcat from "./pages/Shopcat";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from './Components/Footer/Footer'; 
import Item from './Components/Item/Item';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Nav />  

      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path ="/womens" element={<Shopcat banner={women_banner} catgeory="women"/>}/>
        <Route path='/mens' element={<Shopcat banner={men_banner} catgeory="men"/>}/>
        <Route path='/kids' element={<Shopcat banner={kid_banner} catgeory="kid"/>}/>
        <Route path='/Product'element={<Product />}/>
        <Route path=":Productid" element={<Product/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Item" element={<Item />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
