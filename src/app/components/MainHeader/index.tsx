import React from "react";
import {Container, Section, LeftSection, RightSection} from './styles';
import ImgBackgroundHeader from "../../../assets/back.jpg";

const MainHeader = () => {
    return(
        <Container>
         <img width="100%"  height="200%" src={ImgBackgroundHeader} alt="Header" />
         <Section>
         <LeftSection>
            <div><i>@</i><h1>Go Nomad BR</h1></div>
            <p>Join Brazil community of remote workers living and traveling around the country</p>
         </LeftSection>
         <RightSection>
           <input type="text"></input>
           <input type="password"></input>
           <p>Não sou cadastrado</p>
         </RightSection>
         </Section>
        </Container>
    )
};
export default MainHeader;