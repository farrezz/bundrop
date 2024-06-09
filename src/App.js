
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </Router>

    </>
   
  );
}

export default App;
