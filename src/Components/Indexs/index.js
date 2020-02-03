import React, { Component } from "react";




import Home from './../Home';
import Aboud from './../Aboud';
import Work from './../Work';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import Sosialmidia from './../Sosialmidia';
import Footer from './../Footer';
class Index extends Component {
    render() {
        return (
            <div>

       <Home />
        <Work />
         <Portfolio />
          <Profile />
           <Aboud />
            <Sosialmidia />
            <Footer />
            </div>
        )
    }
}

export default Index;