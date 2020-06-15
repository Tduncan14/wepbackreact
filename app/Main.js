import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';

import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

function Main(){

    return(
   <Router>
  
  <Header/>
  
  <Switch>
      <Route  exact path="/" component={HomeGuest}/>

      <Route  exact path="/about" component={About}/>

      <Route exact path ="/Term" component ={Terms} />
  </Switch>
   
   <Footer/>
   </Router>
    )
}


ReactDOM.render(<Main/>, document.querySelector('#app'))

if(module.hot){

    module.hot.accept
}