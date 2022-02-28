import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Map from './pages/Map'

// import Carousel from './components/Carousel';

import Login from './pages/Login';
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      {/* <Register /> */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/map" element={<Map/>} />

      </Routes>
    </div>
  );
}

export default App;
