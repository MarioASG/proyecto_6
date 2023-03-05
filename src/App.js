import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from "./views/Home/Nav/Navbar";



function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>

  );
}

export default App;

