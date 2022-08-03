import React from "react";
import {Container, Section, LeftSection, RightSection, IconBrazil, TitleHeader, TextHeader, SubTitle, Input, IconLogin, NoRegistration} from './styles';
import ImgBackgroundHeader from "../../../assets/back.jpg";

const MainHeader = () => {
    return(
        <Container>
         <img width="100%"  height="200%" src={ImgBackgroundHeader} alt="Header" />
         <Section>
         <LeftSection>
            <TitleHeader>
              <IconBrazil/>
              <TextHeader>Go Nomad Brazil</TextHeader>
              </TitleHeader>
            <SubTitle>Join Brazil community of remote workers living and traveling around the country</SubTitle>
         </LeftSection>
         <RightSection>
          <IconLogin/>
           <Input placeholder="Type your name" type="text"></Input>
           <Input placeholder="**********" type="password"></Input>
           <NoRegistration>Not registered</NoRegistration>
         </RightSection>
         </Section>
        </Container>
    )
};
export default MainHeader;