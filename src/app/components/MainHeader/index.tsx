import React, { useContext, useState } from 'react';
import {
  Container,
  Section,
  LeftSection,
  RightSection,
  IconBrazil,
  TitleHeader,
  BackgroundImage,
  TextHeader,
  SubTitle,
  Input,
  IconLogin,
  NoRegistration,
} from './styles';
import ImgBackgroundHeader from '../../../assets/back.jpg';
import helper from '../../../services/helper';
import { LanguageContext } from '../../context/LanguageContext';
import ReactPlayer from 'react-player';

const MainHeader = () => {
  const { language } = useContext(LanguageContext);
  const [copyName, setCopyName] = useState('');
  const [welcome, setWelcome] = useState('');

  const handleName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCopyName(e.target.value);
  };

  return (
    <Container>
      {/* <BackgroundImage src={ImgBackgroundHeader} alt="Header" /> */}
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=HSsqzzuGTPo"
          width="100%"
          height="90%"
          volume={0}
          playing={true}
        />
      </div>

      <Section>
        <LeftSection>
          <TitleHeader>
            <IconBrazil />
            <TextHeader>
              {helper.getText('banner', language)}
            </TextHeader>
          </TitleHeader>
          <SubTitle>
            {helper.getText('subtitle', language)}.
            <br />
            Bem Vindo {welcome}.
          </SubTitle>
        </LeftSection>
        <RightSection>
          <IconLogin />
          <Input
            onChange={handleName}
            value={copyName}
            placeholder={helper.getText(
              'typeYourName',
              language
            )}
            type="text"
          ></Input>
          <Input
            placeholder="**********"
            type="password"
          ></Input>
          <button
            onClick={() => setWelcome(copyName)}
            style={{
              background: 'var(--lightBackground)',
              color: 'var(--primary)',
              borderRadius: '999px',
              padding: '10px',
              border: '2px solid var(--background)',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <NoRegistration>
            {helper.getText('notRegistered', language)}
          </NoRegistration>
        </RightSection>
      </Section>
    </Container>
  );
};
export default MainHeader;
