import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/login";
import Singup from "./Components/Singup.jsx"
import Footer from "./Components/Footer.jsx"
import NOpage from "./Components/NOpage.jsx"
function App() {
  return (<div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Singup/>}/>
      <Route path="*" element={<NOpage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>)
}

export default App;
