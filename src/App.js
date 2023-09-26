import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Addmedicine from './components/Addmedicine';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/add" exact element={<Addmedicine/>}/>
        <Route path="/search" exact element={<Search/>}/>
        <Route path="/delete" exect element={<Delete/>}/>
        <Route path="/view" exact element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
