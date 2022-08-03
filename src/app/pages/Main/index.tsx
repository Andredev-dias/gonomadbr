import React from "react";

// Import Internos
import MainHeader from "../../components/MainHeader"
import CitiesCard from "../../components/CitiesCard"

// Import das Imagens
import Curitiba from "../../../assets/cities/curitiba.jpg";
import Recife from "../../../assets/cities/recife.jpg";
import Maceio from "../../../assets/cities/maceio.jpg";
import RioBranco from "../../../assets/cities/riobranco.jpg";
import Macapa from "../../../assets/cities/macapa.jpg";
import Manaus from "../../../assets/cities/manaus.jpg";
import Fortaleza from "../../../assets/cities/fortaleza.jpg";
import Brasilia from "../../../assets/cities/brasilia.jpg";
import Vitoria from "../../../assets/cities/vitoria.jpg";
import Goiania from "../../../assets/cities/goiania.jpg";
import SaoLuis from "../../../assets/cities/saoluis.jpg";
import Cuiaba from "../../../assets/cities/cuiaba.jpg";
import CampoGrande from "../../../assets/cities/campogrande.jpg";
import Belo from "../../../assets/cities/belohorizonte.jpg";
import Belem from "../../../assets/cities/belem.jpg";
import Joao from "../../../assets/cities/joaopessoa.jpg";
import Teresina from "../../../assets/cities/teresina.jpg";
import Rio from "../../../assets/cities/rio.jpg";
import Natal from "../../../assets/cities/natal.png";
import PortoAlegre from "../../../assets/cities/portoalegre.jpg";
import PortoVelho from "../../../assets/cities/portovelho.jpeg";
import BoaVista from "../../../assets/cities/boavista.jpg";
import Floripa from "../../../assets/cities/floripa.jpg";
import SP from "../../../assets/cities/sp.jpg";
import Aracaju from "../../../assets/cities/aracaju.jpg";
import Palmas from "../../../assets/cities/palmas.jpg";

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
                <CitiesCard city="Rio Branco - AC" image={RioBranco}/>
                <CitiesCard city="Maceió - AL" image={Maceio}/>
                <CitiesCard city="Macapá - AP" image={Macapa}/>
                <CitiesCard city="Manaus - AM" image={Manaus}/>
                <CitiesCard city="Fortaleza - CE" image={Fortaleza}/>
                <CitiesCard city="Brasília - DF" image={Brasilia}/>
                <CitiesCard city="Vitória - ES" image={Vitoria}/>
                <CitiesCard city="Goiânia - GO" image={Goiania}/>
                <CitiesCard city="São Luís - MA" image={SaoLuis}/>
                <CitiesCard city="Cuiabá - MT" image={Cuiaba}/>
                <CitiesCard city="Campo Grande - MS" image={CampoGrande}/>
                <CitiesCard city="Belo Horizonte - MG" image={Belo}/>
                <CitiesCard city="Belém - PA" image={Belem}/>
                <CitiesCard city="João Pessoa - PB" image={Joao}/>
                <CitiesCard city="Curitiba - PR" image={Curitiba}/>
                <CitiesCard city="Recife - PE" image={Recife}/>
                <CitiesCard city="Teresina - PI" image={Teresina}/>
                <CitiesCard city="Rio de Janeiro - RJ" image={Rio}/>
                <CitiesCard city="Natal - RN" image={Natal}/>
                <CitiesCard city="Porto Alegre - RS" image={PortoAlegre}/>
                <CitiesCard city="Porto Velho - RO" image={PortoVelho}/>
                <CitiesCard city="Boa Vista - RR" image={BoaVista}/>
                <CitiesCard city="Florianópolis - SC" image={Floripa}/>
                <CitiesCard city="São Paulo - SP" image={SP}/>
                <CitiesCard city="Aracaju - SE" image={Aracaju}/>
                <CitiesCard city="Palmas - TO" image={Palmas}/>
            </PrincipalSection>
            </WrapPrincipal>
      
        </Container>
    )
};
export default Main;