import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';
import Home from './components/Home';
import CreatePost from './components/CreatePost'; 

import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios';

Axios.defaults.baseURL ='http://localhost:8080'

function Main(){

    
    const [loggedIn , setLoggedIn] = useState(Boolean(localStorage.getItem('token')))


    return(
   <Router>
  
  <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
  
  <Switch>
      {/* <Route  exact path="/" component={loggedIn ?Home : HomeGuest}/> */}

      <Route exact path = "/">
          {loggedIn ? <Home /> : <HomeGuest />}
      </Route>

      <Route  exact path="/about" component={About}/>

     <Route exact path = "/create-post" component ={CreatePost} />

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