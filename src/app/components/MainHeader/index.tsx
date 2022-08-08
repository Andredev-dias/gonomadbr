import React, { useContext } from "react";
import {Container, Section, LeftSection, RightSection, IconBrazil, TitleHeader, BackgroundImage ,TextHeader, SubTitle, Input, IconLogin, NoRegistration} from './styles';
import ImgBackgroundHeader from "../../../assets/back.jpg";
import helper from "../../../services/helper";
import {LanguageContext} from '../../context/LanguageContext';

const MainHeader = () => {
  const { language } = useContext(LanguageContext);
  return(
        <Container>
         <BackgroundImage src={ImgBackgroundHeader} alt="Header" />
         <Section>
         <LeftSection>
            <TitleHeader>
              <IconBrazil/>
              <TextHeader>{helper.getText("banner", language)}</TextHeader>
              </TitleHeader>
            <SubTitle>{helper.getText("subtitle", language)}</SubTitle>
         </LeftSection>
         <RightSection>
          <IconLogin/>
           <Input placeholder={helper.getText("typeYourName", language)} type="text"></Input>
           <Input placeholder="**********" type="password"></Input>
           <NoRegistration>{helper.getText("notRegistered", language)}</NoRegistration>
         </RightSection>
         </Section>
        </Container>
    )
};
export default MainHeader;