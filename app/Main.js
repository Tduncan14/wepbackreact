import React,{useState,useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';


import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import { useImmerReducer } from "use-immer";

import Profile from './components/Profile';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';
import Home from './components/Home';
import CreatePost from './components/CreatePost'; 
import FlashMessage from './components/FlashMessag';
import ViewSinglePost from './components/ViewSinglePost'; 

import EditPost from './components/EditPost';
// import ExampleContext from './ExampleContext'


import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import Axios from 'axios';

Axios.defaults.baseURL ='http://localhost:8080'

function Main(){


    const intialState = {
        loggedIn: Boolean(localStorage.getItem('token')),
        flashMessages: [],
        user:{
            token:localStorage.getItem('token'),
            username:localStorage.getItem('username'),
            avatar:localStorage.getItem('avatar')
        }
    }


    function ourReducer(draft,action){


        

        switch (action.type) {
            case "login":
                 draft.loggedIn = true 
                 draft.user = action.data
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


    useEffect(() => {

        if(state.loggedIn){

            localStorage.setItem('avatar',state.user.avatar)

            localStorage.setItem('token', state.user.token)

            localStorage.setItem('username',state.user.username)


        }

        else{

            localStorage.removeItem('token')
            localStorage.removeItem('avatar')
            localStorage.removeItem('username')

        }

    },[state.loggedIn])

    
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


      <Route exact path="/profile/:username">
          <Profile />
      </Route>

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


      <Route exact path ="/post/:id/edit">
          {EditPost}
      </Route>

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