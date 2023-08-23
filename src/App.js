// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'

function App() {

  const [user,setloginuser] = useState({})

  return (
    <div className="flex-row w-100 h-100 justify-items-center align-items-center bg-cover bg-red-400">
      <Router>
        <Routes>
          <Route path='/' element={user && user._id? <Homepage />: <Login/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
     {/* <Homepage/>
     <Login />
     <Register /> */}
    </div>
  );
}

export default App;
