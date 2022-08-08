import React, { useContext, useEffect, useState } from "react";

// Import Internos
import MainHeader from "../../components/MainHeader"
import CitiesCard from "../../components/CitiesCard"
import ModalDataFromCards from "../../components/ModalDataFromCards"

// Import das Imagens
import Curitiba from "../../../assets/cities/curitiba.jpg";
import Recife from "../../../assets/cities/recife.jpg";
import Maceio from "../../../assets/cities/maceio.jpg";
import RioBranco from "../../../assets/cities/riobranco.jpg";
// import Macapa from "../../../assets/cities/macapa.jpg";
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

// Imports Externos | Contexto | Services
import helper from "../../../services/helper";
import {LanguageContext} from '../../context/LanguageContext';
import { Br, Us} from "react-flags-select";
import  { ThemeContext } from 'styled-components';
import {Popover} from "@mui/material";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


// Import do styled components
import {Container, FilterMenu, WrapPrincipal, PrincipalSection, InputSearch,WrapPopover, BtnFilterState, BtnFilterPricing, BtnFilterClimate, BtnFilterCity, BtnFlag, LeftMenuSection, RightMenuSection, styleModal} from './styles';

const Main = () => {
    // Contexto
    const { language, setLanguage } = useContext(LanguageContext);
    const themeContext = useContext(ThemeContext);
    // PopOver
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    // Sort State
    const [isCity, setIsCity] = useState<boolean>(false);
    const [isState, setIsState] = useState<boolean>(false);
    const [isPricing, setIsPricing] = useState<boolean>(false);
    const [isClimate, setIsClimate] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    // funcoes para atividades com botoes
      const handleCity = () => {
          setIsCity(true);
          setIsState(false);
          setIsPricing(false);
          setIsClimate(false);
      };

      const handleState = () => {
        setIsCity(false);
        setIsState(true);
        setIsPricing(false);
        setIsClimate(false);
      };

      const handlePricing = () => {
        setIsCity(false);
        setIsState(false);
        setIsPricing(true);
        setIsClimate(false);
      };

      const handleClimate = () => {
        setIsCity(false);
        setIsState(false);
        setIsPricing(false);
        setIsClimate(true);
      };
          

    // Se a flag for nula coloca bandeira br
    const [flag, setFlag] = useState<any>(
        localStorage.getItem("language") === "en-US" ? (
            <Us className="flag"/>
            )  : (
            <Br className="flag"/>
            ),
    );
   // fechar o popover
   const handleClose = () => {
      setAnchorEl(null);
   };
  
   // abrir o popover
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // escolhendo ingles
  const handleEN = () => {
    if (flag.type.name !== "SvgUs") {
      setFlag(<Us className="flag"/>);
      setLanguage("en-US")
      localStorage.setItem("language", "en-US");
    }
  };

  // escolhendo portugues
  const handlePT = () => {
    if (flag.type.name !== "SvgBr") {
      setFlag(<Br className="flag"/>);
      setLanguage("pt-BR")
      localStorage.setItem("language", "pt-BR");
    }
  };


// Switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#8be9fd',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#8be9fd',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#f50a0a' : '#8be9fd',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#dbc81c' : '#282a36',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#d5eb10',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#796c6c' : '#f1f0e9e2',
      borderRadius: 20 / 2,
    },
  }));
  
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

    return(
      <>
      <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
          <ModalDataFromCards/>
      </Box>
    </Modal>
        <Container>
            <MainHeader/>
            <FilterMenu>
              <LeftMenuSection>
                <InputSearch placeholder="Type your search" type="text" />
                <BtnFilterCity onClick={handleCity} isCity={isCity}>City</BtnFilterCity>
                <BtnFilterState onClick={handleState} isState={isState}>State</BtnFilterState>
                <BtnFilterPricing onClick={handlePricing} isPricing={isPricing}>Pricing</BtnFilterPricing>
                <BtnFilterClimate onClick={handleClimate} isClimate={isClimate}>Climate</BtnFilterClimate>
                </LeftMenuSection>
                <RightMenuSection>
                <BtnFlag aria-describedby={id} onClick={handleClick}>{flag}</BtnFlag>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                    }}
                    transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                    }}
                >
                    <WrapPopover>
                     <BtnFlag onClick={handlePT}><Br className="flag"/></BtnFlag>
                     <BtnFlag onClick={handleEN}><Us className="flag"/></BtnFlag>
                     </WrapPopover>
                </Popover>
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                        label="Color Theme"
                    />
                </FormGroup>
                </RightMenuSection>
            </FilterMenu>
            <WrapPrincipal>
            <PrincipalSection>
                {/* <CitiesCard city="Rio Branco - AC" image={RioBranco}/>
                <CitiesCard city="Maceió - AL" image={Maceio}/> */}
                <CitiesCard onClick={handleOpenModal} city="Macapá - AP" image="https://firebasestorage.googleapis.com/v0/b/nomadbr-51538.appspot.com/o/imagem_materia.jpeg?alt=media&token=d50b97dc-6f2d-44ab-83bc-aa417a84288d"/>
                {/* <CitiesCard city="Manaus - AM" image={Manaus}/>
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
                <CitiesCard city="Palmas - TO" image={Palmas}/> */}
            </PrincipalSection>
            </WrapPrincipal>
        </Container>
        </>
    )
};
export default Main;