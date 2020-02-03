import React from "react";


import {CreativeSection,
CreativeInfo,
InfoTitle,
InfoDir,
Span,
InfoDesc,
InfodescA} from './style.js'


const Aboud = () => {
      return (
           <CreativeSection>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle ><Span>This is</Span> Me</InfoTitle>
                    <InfoDir >Creative Director</InfoDir>
                    <InfoDesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfodescA href="#">explicabo</InfodescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
    )
}
export default Aboud;