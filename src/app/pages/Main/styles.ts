import styled from "styled-components";

export const Container = styled.div`
    width: 99vw;
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
    width: 99vw;
    height: 100px;
    background: var(--light-background);
    position: sticky;
    top: 0;
    border: none;
    box-shadow: 1px 1px 15px 1px #111010;
    gap: 1rem;
    z-index: 100;
`;

export const InputSearch = styled.input`
    padding: 0.5vw;
    width: 200px;
    height: 50px;
    color:var(--white);
    font-size: 1rem;
    border-radius: 999px;
    border: 2px solid var(--cyan);
    background-color: var(--light-background);
    text-align: center;
    ::placeholder{
    color: var(--cyan);
    }
`;

export const BtnFilter = styled.button`
    padding: 0.5vw;
    width: 200px;
    height: 50px;
    color:var(--white);
    font-size: 1rem;
    border-radius: 999px;
    border: 2px dashed var(--cyan);
    background-color: var(--light-background);
    text-align: center;
    opacity: 0.8;
    :hover{
        cursor: pointer;
        opacity: 1;
        box-shadow: 1px 1px 10px 2px var(--cyan) ;
        border: 2px solid var(--cyan);
    }
`;

export const WrapPrincipal = styled.main`
    width: 99vw;
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
    background-color: var(--background);
    border: none;
    padding: 15px;
`;
