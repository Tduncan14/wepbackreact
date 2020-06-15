import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeGuest from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Term';

function Main(){

    return(
   <>
  
  <Header/>

    <Main />
   
   <Footer/>
   </>
    )
}


ReactDOM.render(<Main/>, document.querySelector('#app'))

if(module.hot){

    module.hot.accept
}