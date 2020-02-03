import React ,{useState ,useEffect } from "react";
import axios from 'axios'
import {PortfolioSection,
PortfolioTitle,
Span,
PortfolioList,
PortfolioItem,
ImagesHrapper,
Image,
Overlay,
OverlaySpan} from './style.js';


import Footer from './../Footer';

const Portfolio = () => {
const [image, setimage] = useState([])
useEffect(() => {
    axios.get('js/data.json').then( res =>{setimage(res.data.portfolio)})
  
}, [])
const portfolioImage = image.map((imageItem) => {
    return(
 <ImagesHrapper  key = {imageItem.id}>
                    <Image src={imageItem.image} alt=""/>
                    <Overlay>>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                
                </ImagesHrapper>
    )
})

      return (
        
            <PortfolioSection>
            <PortfolioTitle className="portfolio-title"><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList >
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
               {portfolioImage} 
                </div>
             
            
        </PortfolioSection>

    )
 
}
export default Portfolio;