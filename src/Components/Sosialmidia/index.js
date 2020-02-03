import React from "react";
import {SocialMediaSec,
Social,
Icon,
SocialBes,
Span,
SpanSnfo} from './style.js'


import axios from 'axios'


class  Sosialmidia extends React.Component{
   state ={
        social: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res =>{this.setState({social:res.data.social})})
    }
  render() {
    const {social} = this.state
    const socialList = social.map((socialitem) => {
   return(
         <Social key={socialitem.id} item ={socialitem.id}>
                <Icon className={socialitem.icon}></Icon>
                <SocialBes>
                    <Span>{socialitem.title}</Span>
                    <SpanSnfo>{socialitem.body}</SpanSnfo>
                </SocialBes>
            </Social>
      )
      
    })
    
    return (
       <SocialMediaSec>
            
           {socialList}
        
        </SocialMediaSec>
    );
  }
}
export default Sosialmidia;