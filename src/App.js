import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/login";
import Products from "./Components/products.jsx";
import Singup from "./Components/Singup.jsx"
import Footer from "./Components/Footer.jsx"
import NOpage from "./Components/NOpage.jsx"
import Newsletter from "./Components/Newsletter"
import Men from "./Components/men/men"
import Women from './Components/women/women.jsx'
import Kids from "./Components/kids/kids.jsx"
function App() {
  return (<div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Singup/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/cart" element={<Products/>}/>
      <Route path="*" element={<NOpage/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
  </div>)
}

export default App;
