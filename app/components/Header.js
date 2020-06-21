import React from 'react';
import HeaderLoggout from './HeaderLoggout';

function Header(){

    return(
     
        <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <a href="/" className="text-white">
              ComplexApp
            </a>
          </h4>
         
         <HeaderLoggout />
        </div>
      </header>




    )


}

export default Header;
