import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom'
import HeaderLoggout from './HeaderLoggout';
import StateContext from '../StateContext' ;

import HeaderLoggedIn from './HeaderLoggedin';

function Header(props){

  const appState = useContext(StateContext)


    // const {loggedIn,setLoggedIn} = props
    return(
     
        <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link  to ="/"className="text-white">
              ComplexApp
            </Link>
          </h4>
         
        {appState.loggedIn  ? <HeaderLoggedIn  /> : <HeaderLoggout />}
        </div>
      </header>




    )


}

export default Header;
