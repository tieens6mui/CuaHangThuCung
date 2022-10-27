import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Admin  from "./components/Admin";

import { Provider } from "./Context";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { Actions } from "./Actions";


function App() {
 
  return (
 
  
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Admin' component={Admin} />
      </Switch>
    </Router> 
    
   

    
  );
}

export default App;
