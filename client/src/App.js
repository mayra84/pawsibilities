import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Map from './pages/Map'

// import Carousel from './components/Carousel';

import Login from './pages/Login';
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import DogProfileForm from './components/DogProfileForm';
import HealthCalendar from './pages/HealthCalendar';
import AboutUs from './pages/AboutUs';
import Discover from './pages/Discover';
import DogProfile from './pages/DogProfile';
import { useEffect } from 'react';
import { checkUser } from './redux/reducers/userReducer';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser)
  },[dispatch])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />

        {/* how to route to to dog stuff?? */}
        <Route path="/dogprofile" element={<DogProfile/>} />
        <Route path="/healthcalendar" element={<HealthCalendar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/discover" element={<Discover />} />

        {/* <Route path="dogdrop" element={ <DogDrop /> } /> */}
        {/* <Route path="/currentday" element={<Current} */}
      </Routes>
    </div>
  );
}

export default App;
