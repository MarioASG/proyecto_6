import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Projects from './views/Projects/Projects';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>

  );
}

export default App;
