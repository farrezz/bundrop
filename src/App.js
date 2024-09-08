
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Confirmation" element={<Confirmation/>}/>
      </Routes>
    </Router>

    </>
   
  );
}

export default App;
