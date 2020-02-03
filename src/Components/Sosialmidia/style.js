import styled from 'styled-components'
export const SocialMediaSec  = styled.div `
  height: auto;
    overflow: hidden
    width:100%;`
    



export const Social  = styled.div `
width: 33.33%;
 
    float: right;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
     background: ${props =>props.item === 1 ?  "#3b5998" : " "};
    background: ${props =>props.item === 2 ?  "#498cbf" : " "};
    background: ${props =>props.item === 3 ?  "#cc2127" : " "}
      `

export const  Icon = styled.i `
width: 30px;
    height: 30px;
    background: #fff;
    text-align: center;
    line-height: 30px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 23px
    &:hover {
    color: #eb5424;
}
cursor: pointer;`


    

 export const SocialBes= styled.p `
   font-weight: italic;
    text-transform: uppercase;

    font-size: 15px;
    color: #fff;
    float:left
     &:hover {
    
}
cursor: pointer;`
  


export const  Span  = styled.span `
display: block;
    margin-bottom: 8px`

    


export const  SpanSnfo = styled.span `
  font-weight: normal`
  
