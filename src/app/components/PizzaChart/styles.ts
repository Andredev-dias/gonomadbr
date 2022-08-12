import styled, {css} from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    padding: 10px;
    border-radius: 10px;
`;