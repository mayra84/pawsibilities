import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
    <Carousel/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/register" element={ <Register /> } />
       

      </Routes>
    </div>
  );
}

export default App;
