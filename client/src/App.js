import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

import Carousel from './components/Carousel';

import Login from './pages/Login';
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux';
import DogProfileForm from './pages/DogProfileForm';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      {/* <Register /> */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* how to route to to dog stuff?? */}
        <Route path="/dogprofileForm" element={<DogProfileForm />} />


      </Routes>
    </div>
  );
}

export default App;
