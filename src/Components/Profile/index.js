import React from "react";

import {ProfileSection,
Profiles,
ProfileList,
ProfileItem,
Span,
Web,
Skills,
SkillsDesc,
Bar,
Title,
Perc,
Parent,
ParentSpan,
Sp1,
Sp2,
Sp3,
H2,
SpanH2} from './style.js';
const Profile = () => {
      return (
         <ProfileSection>
            <div className="container">
                <Profiles>
                    <H2><SpanH2>My </SpanH2>Profile</H2>
                    <ProfileList>
                        <ProfileItem >
                            <Span>Name</Span>
                            Hadjo Ahmed
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Website</Span>
                            <Web >www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </Profiles>
                
                <Skills>
                    <H2 >Some <SpanH2>skills</SpanH2></H2>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar>
                        <Title>Bootstrap</Title>
                        <Perc>100%</Perc>
                        <Parent  item ={Sp1}>
                           
                        </Parent>
                    </Bar>
                    
                    <Bar>
                    
                        <Title>CSS3</Title>
                        <Perc>90%</Perc>
                        <Parent  item={Sp2}>
                           
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>Photoshop</Title>
                        <Perc>80%</Perc>
                        <Parent item ={Sp3}>
                        
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSection>

    )
  
}
export default Profile;