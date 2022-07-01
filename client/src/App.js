import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map'
import Login from './pages/Login';
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux';
import DogProfileForm from './components/DogProfileForm';
import HealthCalendar from './pages/HealthCalendar';
import AboutUs from './pages/AboutUs';
import Discover from './pages/Discover';
import DogProfile from './pages/DogProfile';
import { useEffect } from 'react';
import { checkUser } from './redux/reducers/userReducer';
import Healthcare from './pages/Healthcare';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dogprofileForm" element={<DogProfileForm />} />
        <Route path="/map" element={<Map />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/dogprofile" element={<DogProfile />} />
        <Route path="/healthcalendar" element={<HealthCalendar />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </div>
  );
}

export default App;
