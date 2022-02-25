import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

import Carousel from './components/Carousel';

import Login from './pages/Login';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">

    <Carousel/>

      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
       

      </Routes>
    </div>
  );
}

export default App;
