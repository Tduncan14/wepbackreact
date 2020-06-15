import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';


function Main(){

    return(
   <>
  
  <Header/>

    <HomeGuest />
   
   <Footer/>
   </>
    )
}


ReactDOM.render(<Main/>, document.querySelector('#app'))

if(module.hot){

    module.hot.accept
}