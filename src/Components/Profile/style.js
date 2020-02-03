import styled from 'styled-components'

export const  ProfileSection = styled.div `
padding: 50px 0;
    overflow: hidden;` 

export const Profiles = styled.div `
 width: 50%;
    float: left;` 

export const ProfileList=   styled.ul `
  list-style: none`
  


export const ProfileItem  = styled.li `
  margin-bottom: 8px`
  


export const Span  = styled.span `
display: inline-block;
    width: 100px;
    font-weight: bold`
    


export const Web   = styled.span `
  font-weight: normal;
    color: #eb5424`
  


export const Skills  = styled.div `
 width: 50%;
    float: left;`
    


export  const SkillsDesc = styled.p `
  font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
  


export const  Bar = styled.div `
  overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px`
  


export const Title  = styled.span ` 
 float: left;`
  


export const Perc  = styled.span `
  float: right;
    margin-right: 100px`
  


export const Parent  = styled.div `
 height: 2px;
    clear: both;
    background: #eb5424;
    position: relative;
    top: 5px;
    width: ${props =>props.item ===Sp1 ?  " 100%;": ""};
     width: ${props =>props.item ===Sp2 ?  " 90%;": ""};
      width: ${props =>props.item ===Sp3 ?  " 80%;": ""}
    `
   


// export const Parent = styled.span `
//  background: #eb5424;
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//     bottom: 0`
  


export const Sp1 = styled.span `
  width: 100%;`
  


export const Sp2  = styled.span `
  width: 90%;`
  


export const Sp3  = styled.span `
  width: 80%;`
  


export const H2 = styled.h2 `
 font-size: 40px; 
    margin-bottom: 20px`
   


export const SpanH2 = styled.span `
font-weight: normal;`
    

