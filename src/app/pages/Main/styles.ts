import styled, {css} from "styled-components";

interface IBtnFilter {
    isTrans?: boolean;
    isSec?: boolean;
    isPricing?: boolean;
    isClimate?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.background};
    .flag{
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
    background: ${props => props.theme.lightBackground};
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
    height:auto;
    color:${props => props.theme.words};
    font-size: 1rem;
    border-radius: 999px;
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.lightBackground};
    text-align: center;
    ::placeholder{
    color: var(--cyan);
    }
`;

export const BtnFilterNotClicked = css`
display: flex;
justify-content: center;
align-items: center;
color:#f8f8f2;
border-radius: 5px;
border: 1px dashed #8be9fd;
background-color: #44475a;
padding: 5px;
width: 150px;
font-size: 1rem;
opacity: 0.5;
:hover{
  cursor: pointer;
  opacity: 1;
  color:#8be9fd;
}
`;

export const BtnFilterClicked = css`
display: flex;
justify-content: center;
align-items: center;
color:#8be9fd;
border-radius: 5px;
border: 1px solid #8be9fd;
background-color: #44475a;
padding: 5px;
width: 150px;
font-size: 1rem;
opacity: 1;
`;

export const BtnFilterCity = styled.button<IBtnFilter>`
    ${({ isTrans }) => (isTrans ? `${BtnFilterClicked}` : `${BtnFilterNotClicked}`)}
`;

export const BtnFilterState = styled.button<IBtnFilter>`
    ${({ isSec }) => (isSec ? `${BtnFilterClicked}` : `${BtnFilterNotClicked}`)}
`;

export const BtnFilterPricing = styled.button<IBtnFilter>`
    ${({ isPricing }) => (isPricing ? `${BtnFilterClicked}` : `${BtnFilterNotClicked}`)}
`;

export const BtnFilterClimate = styled.button<IBtnFilter>`
    ${({ isClimate }) => (isClimate ? `${BtnFilterClicked}` : `${BtnFilterNotClicked}`)}
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
    width:auto;
    height: auto;
    padding: 0;
    border: none;
    background: none;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: all 200ms ease-in-out;
    }
    .flag{
        width: 50px;
        height: 50px;
    }
`;

export const WrapPopover = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: ${props => props.theme.background};
    border: none;
    padding: 15px;
`;

export const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: '#44475a',
    boxShadow: 24,
    p: 1,
    borderRadius: '10px'
  };
