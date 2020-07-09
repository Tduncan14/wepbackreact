import React, {useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
// import ExampleContext from '../ExampleContext';

import dispatchContext from '../DispatchContext';
function HeaderLoggedIn(props){


  const appDispatch = useContext(dispatchContext)

  // const{setLoggedIn} = useContext(ExampleContext)

 function signout(){


    // setLoggedIn(false)

    appDispatch({type:"logout"})

    localStorage.removeItem('token');

    localStorage.removeItem('avatar');

    localStorage.removeItem('username')
 }

    return(

        <div className="flex-row my-3 my-md-0">
        <a href="#" className="text-white mr-2 header-search-icon">
          <i className="fas fa-search"></i>
        </a>
        <span className="mr-2 header-chat-icon text-white">
          <i className="fas fa-comment"></i>
          <span className="chat-count-badge text-white"> </span>
        </span>
        <a href="#" className="mr-2">
          <img className="small-header-avatar" src={localStorage.getItem('avatar')}/>
        </a>
        <Link to="/create-post" className="btn btn-sm btn-success mr-2">
          Create Post
        </Link>
        <button className="btn btn-sm btn-secondary" onClick={signout}>
          Sign Out
        </button>
      </div>



    )
}


export default HeaderLoggedIn