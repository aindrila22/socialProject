import React from 'react';
import Navbar from './Design/Navbar';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import SignUp from './Screens/SignUp'
import SignIn from './Screens/SignIn'

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Route exact path="/"><Home/></Route>
<Route exact path="/signup"><SignUp/></Route>
<Route exact path="/signin"><SignIn/></Route>
<Route exact path="/profile"><Profile/></Route>
</BrowserRouter>

</>
  );
}

export default App;
