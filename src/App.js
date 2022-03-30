
import './App.css';
import Friends from './componets/Friends/Friends';
import About from './componets/About/About';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home/Home';
import NOF from './componets/NOF/NOF';

function App() {
  return (
    <div className="App">
      <h1>Hello routers world .</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='*' element={<NOF></NOF>}></Route>
      </Routes>
    </div>
  );
}

export default App;
