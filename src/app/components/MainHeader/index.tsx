import React, { useContext } from "react";
import {Container, Section, LeftSection, RightSection, IconBrazil, TitleHeader, BackgroundImage ,TextHeader, SubTitle, Input, IconLogin, NoRegistration} from './styles';
import ImgBackgroundHeader from "../../../assets/back.jpg";
import helper from "../../../services/helper";
import {LanguageContext} from '../../context/LanguageContext';
import ReactPlayer from 'react-player';

const MainHeader = () => {
  const { language } = useContext(LanguageContext);
  return(
        <Container>
         {/* <BackgroundImage src={ImgBackgroundHeader} alt="Header" /> */}
         <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=HSsqzzuGTPo'
          width='100%'
          height='90%'
          volume={0.1}
        />
      </div>
    
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