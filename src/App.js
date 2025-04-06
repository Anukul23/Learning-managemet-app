import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import Login from './Pages/Login';
import Ragester from './Pages/Ragister';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Ragister from './Pages/Ragister';
import Corporatetraning from './Pages/Corporatetraning';
import Compliance from './Pages/Compliance';
import Upskill from './Pages/Upskill';
import Personalizedlearning from './Pages/Personalizedlearning';
import Footer from './components/Navbar/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/corporatetraning' element = {<Corporatetraning/>}/>
        <Route path='/compliance' element ={<Compliance/>}/>
        <Route path='/upskill' element ={<Upskill/>}/>
        <Route path='/personalizedlearning' element ={<Personalizedlearning/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element ={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
