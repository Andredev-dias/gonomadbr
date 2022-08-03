import React from "react";
// Import Internos
import MainHeader from "../../components/MainHeader"
import CitiesCard from "../../components/CitiesCard"

// Import do styled components
import {Container, FilterMenu, WrapPrincipal, PrincipalSection} from './styles';

const Main = () => {
    return(
        <Container>
            <MainHeader/>
            <FilterMenu>

            </FilterMenu>
            <WrapPrincipal>
            <PrincipalSection>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Curitiba - PR"/>
            </PrincipalSection>
            </WrapPrincipal>
      
        </Container>
    )
};
export default Main;