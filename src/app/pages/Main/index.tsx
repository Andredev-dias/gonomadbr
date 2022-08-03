import React from "react";
// Import Internos
import MainHeader from "../../components/MainHeader"
import CitiesCard from "../../components/CitiesCard"

// Import do styled components
import {Container, FilterMenu, WrapPrincipal, PrincipalSection, InputSearch, BtnFilter, IconFilter} from './styles';

const Main = () => {
    return(
        <Container>
            <MainHeader/>
            <FilterMenu>
                <IconFilter/>
                <InputSearch placeholder="Type your search" type="text" />
                <BtnFilter>City</BtnFilter>
                <BtnFilter>State</BtnFilter>
                <BtnFilter>Pricing</BtnFilter>
                <BtnFilter>Climate</BtnFilter>
            </FilterMenu>
            <WrapPrincipal>
            <PrincipalSection>
                <CitiesCard city="Rio Branco - AC"/>
                <CitiesCard city="Maceió - AL"/>
                <CitiesCard city="Macapá - AP"/>
                <CitiesCard city="Manaus - AM"/>
                <CitiesCard city="Fortaleza - CE"/>
                <CitiesCard city="Brasília - DF"/>
                <CitiesCard city="Vitória - ES"/>
                <CitiesCard city="Goiânia - GO"/>
                <CitiesCard city="São Luís - MA"/>
                <CitiesCard city="Cuiabá - MT"/>
                <CitiesCard city="Campo Grande - MS"/>
                <CitiesCard city="Belo Horizonte - MG"/>
                <CitiesCard city="Belém - PA"/>
                <CitiesCard city="João Pessoa - PB"/>
                <CitiesCard city="Curitiba - PR"/>
                <CitiesCard city="Recife - PE"/>
                <CitiesCard city="Teresina - PI"/>
                <CitiesCard city="Rio de Janeiro - RJ"/>
                <CitiesCard city="Natal - RN"/>
                <CitiesCard city="Porto Alegre - RS"/>
                <CitiesCard city="Porto Velho - RO"/>
                <CitiesCard city="Boa Vista - RR"/>
                <CitiesCard city="Florianópolis - SC"/>
                <CitiesCard city="São Paulo - SP"/>
                <CitiesCard city="Aracaju - SE"/>
                <CitiesCard city="Palmas - TO"></CitiesCard>
            </PrincipalSection>
            </WrapPrincipal>
      
        </Container>
    )
};
export default Main;