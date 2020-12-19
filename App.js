import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Domain from './components/pages/Domain';
import Booking from './components/pages/Booking';
import Store from './components/pages/Store';
import Blog from './components/pages/Blog';
import Email from './components/pages/Email';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home'  exact component={Home} />
        <Route path='/domain' component={Domain} />
        <Route path='/booking' component={Booking} />
        <Route path='/store' component={Store} />
        <Route path='/blog' component={Blog} />
        <Route path='/email' component={Email} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
