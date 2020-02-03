import React from "react";
import {Link ,NavLink} from 'react-router-dom';

import  { NavbarSection,
Logo,
LogoText,
UlList,
ListItem,
Anchor,LinkElem} from './style.js';




const Navbar = () => {
      return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo >
                    <LogoText >Ultra Profile</LogoText>
                </Logo>
 
                <UlList>
                
                    <ListItem><LinkElem to='/'> Home</LinkElem></ListItem>
                    <ListItem><LinkElem to="/Work">Work</LinkElem></ListItem>
                    <ListItem><LinkElem to ="/Portfolio">Portfolio</LinkElem></ListItem>
                    <ListItem><LinkElem to="/Profile">Profile</LinkElem></ListItem>
                    <ListItem><LinkElem to="/Aboud">About</LinkElem></ListItem>
                    <ListItem><LinkElem to="/Contact">Contact</LinkElem></ListItem>
                </UlList>
                
            </div>
       
    </NavbarSection>

    )
    
}
export default Navbar;