import styled, { css } from 'styled-components';
import { GiBrazil } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

const IconLoginCSS = css`
  width: 6rem;
  height: 6rem;
  color: #dcdcdc;
`;

const IconBrazilCSS = css`
  width: 20rem;
  height: 20rem;
  color: #dcdcdc;
`;

export const IconLogin = styled(VscAccount)`
  ${IconLoginCSS};
`;

export const IconBrazil = styled(GiBrazil)`
  ${IconBrazilCSS};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  .player-wrapper {
    position: relative;
    width: 100vw;
    height: 70vh;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(3);
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  position: absolute;
  top: 7%;
  left: 10%;
  width: 80vw;
  height: 60vh;
  max-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  background-color: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 80px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 280px;
  height: 400px;
  border-radius: 10px;
  color: var(--words);
  border: none;
  gap: 10px;
`;

export const NoRegistration = styled.h5`
  color: #f8f8f2;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding: 0.5vw;
  width: 200px;
  height: 50px;
  color: var(--primary);
  font-size: 1.2rem;
  border-radius: 999px;
  border: 2px solid var(--background);
  background-color: var(--lightBackground);
  text-align: center;
  ::placeholder {
    color: var(--primary);
  }
  :focus {
    border: 2px solid var(--primary);
    font-size: 1.3rem;
    background-color: var(--background);
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  gap: 10px;
  color: #f8f8f2;
`;

export const TextHeader = styled.h1`
  font-size: 9rem;
  text-shadow: 2px 2px #f8f8f2;
`;

export const SubTitle = styled.p`
  width: 40vw;
  font-size: 1.5rem;
  color: #f8f8f2;
  text-transform: uppercase;
  text-align: right;
`;
