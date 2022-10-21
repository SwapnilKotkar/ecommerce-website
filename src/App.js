import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
              <Route exact path='/' element={<Home/>} />  
              <Route exact path='/signup' element={<SignUp/>} />
              <Route exact path='/signin' element={<Signin/>} />
              <Route exact path='/productdetails/:id' element={<ProductDetails/>} />
              <Route path='*' element={<Errorpage/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
