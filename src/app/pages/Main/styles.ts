import styled, { css } from 'styled-components';

interface IBtnFilter {
  isTrans?: boolean;
  isSec?: boolean;
  isPricing?: boolean;
  isClimate?: boolean;
}

interface ITheme {
  theme?: string;
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--background);

  .flag {
    width: 50px;
    height: 50px;
  }
`;

export const FilterMenu = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background: var(--lightBackground);
  position: sticky;
  top: 0;
  border: none;
  box-shadow: 1px 1px 15px 1px #111010;
  gap: 1rem;
  z-index: 100;
  padding: 1rem;
`;

export const LeftMenuSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 1vw;
  background: var(--lightBackground);
`;
export const RightMenuSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  width: 50%;
  gap: 1vw;
`;

export const InputSearch = styled.input`
  padding: 10px;
  width: 200px;
  height: auto;
  color: var(--words);
  font-size: 1rem;
  border-radius: 999px;
  border: 2px solid var(--primary);
  background-color: var(--lightBackground);
  text-align: center;
  ::placeholder {
    color: var(--primary);
  }
  :focus {
    font-size: 1.1rem;
    background-color: var(--background);
  }
`;

export const BtnFilterNotClicked = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  border-radius: 5px;
  border: 2px dotted var(--primary);
  background-color: var(--lightBackground);
  padding: 5px;
  width: 150px;
  font-size: 1rem;
  opacity: 0.8;
  :hover {
    cursor: pointer;
    opacity: 1;
    color: var(--primary);
  }
`;

export const BtnFilterClicked = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: var(--background);
  padding: 5px;
  width: 150px;
  font-size: 1rem;
  opacity: 1;
`;

export const BtnFilterCity = styled.button<IBtnFilter>`
  ${({ isTrans }) =>
    isTrans
      ? `${BtnFilterClicked}`
      : `${BtnFilterNotClicked}`}
`;

export const BtnFilterState = styled.button<IBtnFilter>`
  ${({ isSec }) =>
    isSec
      ? `${BtnFilterClicked}`
      : `${BtnFilterNotClicked}`}
`;

export const BtnFilterPricing = styled.button<IBtnFilter>`
  ${({ isPricing }) =>
    isPricing
      ? `${BtnFilterClicked}`
      : `${BtnFilterNotClicked}`}
`;

export const BtnFilterClimate = styled.button<IBtnFilter>`
  ${({ isClimate }) =>
    isClimate
      ? `${BtnFilterClicked}`
      : `${BtnFilterNotClicked}`}
`;

export const WrapPrincipal = styled.main`
  width: 100%;
  height: auto;
  background-color: transparent;
  padding: 2vw;
`;

export const PrincipalSection = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2vw;
  z-index: -2;
`;

export const BtnFlag = styled.button`
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
  }
  .flag {
    width: 50px;
    height: 50px;
  }
`;

export const WrapPopover = styled.div<ITheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) =>
    theme === 'light' ? '#FFFAFA' : '#44475a'};
  border: none;
  padding: 15px;
`;

export const styleModaldark = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#44475a',
  boxShadow: 24,
  p: 1,
  borderRadius: '10px',
};

export const styleModalLight = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#FFFAFA',
  boxShadow: 24,
  p: 1,
  borderRadius: '10px',
};
