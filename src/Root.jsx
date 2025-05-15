import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import Header from './Components/Header';

const Root = () => {
    return (
        <div>
          <Header/>
    
             <Outlet />
     
            <Footer/>
        </div>
    );
};

export default Root;