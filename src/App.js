import React, { useState } from 'react';

import Router from './Components/Router';
import Navbar from './Components/Navbaar';
import Footer from './Components/Footer';

const App = () => {
    const [darkTheme,setDarkTheme]=useState(false);
    
    return(
        <div className={darkTheme?'dark':''}>
            <div className=" dark:bg-gray-900 bg-gray-100 dark:text-white min-h-screen"> 
              <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
              <Router/>
              <Footer/>
            </div>
        </div>
    );

 
}

export default App
