import React,{useState,useReducer} from 'react';
import ReactDOM from 'react-dom';


import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import { useImmerReducer } from "use-immer";

import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';
import Home from './components/Home';
import CreatePost from './components/CreatePost'; 
import FlashMessage from './components/FlashMessag';
import ViewSinglePost from './components/ViewSinglePost'; 
// import ExampleContext from './ExampleContext'


import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios';

Axios.defaults.baseURL ='http://localhost:8080'

function Main(){


    const intialState = {
        loggedIn: Boolean(localStorage.getItem('token')),
        flashMessages: []
    }


    function ourReducer(draft,action){


        

        switch (action.type) {
            case "login":
                 draft.loggedIn = true 
                 break;
           
             
            case "logout":
                  draft.loggedIn =  false
                  break;
           

            case "flashMessage":
                 draft.flashMessages.push(action.value)
                 break;
           
          }
            



    }


    const [state,dispatch] = useImmerReducer(ourReducer,intialState)

    
    // const [loggedIn , setLoggedIn] = useState(Boolean(localStorage.getItem('token')))


    // const [FlashMessages, setFlashMessages] = useState([])


    // function addFlashMessage(msg){

    //     setFlashMessages(prev => prev.concat(msg))
    // }


    return(
        // with useState <ExampleContext.Provider value={{addFlashMessage,setLoggedIn}}>

        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
   <Router>
       <FlashMessage  messages={state.flashMessages}/>
  
  <Header/>
  
  <Switch>
      {/* <Route  exact path="/" component={loggedIn ?Home : HomeGuest}/> */}

      <Route exact path = "/">
          {state.loggedIn ? <Home /> : <HomeGuest />}
      </Route>

      <Route  exact path="/about">

          <About/>
      </Route>

     <Route exact path = "/create-post" >
         <CreatePost 
         />


     </Route>


      <Route exact path ="/post/:id" component={ViewSinglePost} />

      <Route exact path ="/Term" component ={Terms} />
  </Switch>
   
   <Footer/>
   </Router>

   </DispatchContext.Provider>

   </StateContext.Provider>
    )
}


ReactDOM.render(<Main/>, document.querySelector('#app'))

if(module.hot){

    module.hot.accept
}