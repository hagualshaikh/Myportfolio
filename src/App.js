import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom';

import "./App.css";






import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Index from './Components/Indexs';
import Aboud from './Components/Aboud';
import Portfolio from './Components/Portfolio';
import Work from './Components/Work';
import Profile from './Components/Profile';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            
      <Navbar />
       
       
            <Route exact path= '/' component ={Index} />
              <Route exact path= '/Portfolio' component ={Portfolio} />
              <Route exact path= '/Work' component ={Work} />
               <Route exact path= '/Profile' component ={Profile} />
            
            <Route exact path= '/Aboud' component ={Aboud} />
            <Route path= '/Contact' component ={Contact} />
            </BrowserRouter>
        )
    }
}

export default App;