import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';
import Home from './components/Home';
import CreatePost from './components/CreatePost'; 
import FlashMessage from './components/FlashMessag';
import ViewSinglePost from './components/ViewSinglePost'; 

import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios';

Axios.defaults.baseURL ='http://localhost:8080'

function Main(){

    
    const [loggedIn , setLoggedIn] = useState(Boolean(localStorage.getItem('token')))


    const [FlashMessages, setFlashMessages] = useState([])


    function addFlashMessage(msg){

        setFlashMessages(prev => prev.concat(msg))
    }


    return(
   <Router>
       <FlashMessage  messages={FlashMessages}/>
  
  <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
  
  <Switch>
      {/* <Route  exact path="/" component={loggedIn ?Home : HomeGuest}/> */}

      <Route exact path = "/">
          {loggedIn ? <Home /> : <HomeGuest />}
      </Route>

      <Route  exact path="/about" component={About}/>

     <Route exact path = "/create-post" component >
         <CreatePost addFlashMessage={addFlashMessage} 
         />

         
     </Route>


      <Route exact path ="/post/:id" component={ViewSinglePost} />

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