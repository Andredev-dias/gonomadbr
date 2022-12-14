import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

// Import Internos
import MainHeader from '../../components/MainHeader';
import CitiesCard from '../../components/CitiesCard';
import ModalDataFromCards from '../../components/ModalDataFromCards';

// Import das Imagens
import Curitiba from '../../../assets/cities/curitiba.jpg';
import Recife from '../../../assets/cities/recife.jpg';
import Maceio from '../../../assets/cities/maceio.jpg';
import RioBranco from '../../../assets/cities/riobranco.jpg';
// import Macapa from "../../../assets/cities/macapa.jpg";
import Manaus from '../../../assets/cities/manaus.jpg';
import Fortaleza from '../../../assets/cities/fortaleza.jpg';
import Brasilia from '../../../assets/cities/brasilia.jpg';
import Vitoria from '../../../assets/cities/vitoria.jpg';
import Goiania from '../../../assets/cities/goiania.jpg';
import SaoLuis from '../../../assets/cities/saoluis.jpg';
import Cuiaba from '../../../assets/cities/cuiaba.jpg';
import CampoGrande from '../../../assets/cities/campogrande.jpg';
import Belo from '../../../assets/cities/belohorizonte.jpg';
import Belem from '../../../assets/cities/belem.jpg';
import Joao from '../../../assets/cities/joaopessoa.jpg';
import Teresina from '../../../assets/cities/teresina.jpg';
import Rio from '../../../assets/cities/rio.jpg';
import Natal from '../../../assets/cities/natal.png';
import PortoAlegre from '../../../assets/cities/portoalegre.jpg';
import PortoVelho from '../../../assets/cities/portovelho.jpeg';
import BoaVista from '../../../assets/cities/boavista.jpg';
import Floripa from '../../../assets/cities/floripa.jpg';
import SP from '../../../assets/cities/sp.jpg';
import Aracaju from '../../../assets/cities/aracaju.jpg';
import Palmas from '../../../assets/cities/palmas.jpg';

// Imports Externos | Contexto | Services
import helper from '../../../services/helper';
import { LanguageContext } from '../../context/LanguageContext';
import { Br, Us } from 'react-flags-select';
import { ThemeContext } from 'styled-components';
import { Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useLocalStorage from 'use-local-storage';
// Import interfaces
import { IDataCards } from './interfaces';

import dataCards from '../../../services/citiesCardsInfo.json';
import dataModal from '../../../services/citiesModal.json';

// Import do styled components
import {
  Container,
  FilterMenu,
  WrapPrincipal,
  PrincipalSection,
  InputSearch,
  WrapPopover,
  BtnFilterState,
  BtnFilterPricing,
  BtnFilterClimate,
  BtnFilterCity,
  BtnFlag,
  LeftMenuSection,
  RightMenuSection,
  styleModaldark,
  styleModalLight,
} from './styles';

const Main = () => {
  // thema logic
  const defaultDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  // Contexto
  const { language, setLanguage } =
    useContext(LanguageContext);

  // PopOver
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // Sort State
  const [isTrans, setIsTrans] = useState<boolean>(false);
  const [isSec, setIsSec] = useState<boolean>(false);
  const [isPricing, setIsPricing] =
    useState<boolean>(false);
  const [isClimate, setIsClimate] =
    useState<boolean>(false);
  const [openModal, setOpenModal] =
    useState<boolean>(false);

  // funcoes para atividades com botoes
  const handleTrans = () => {
    setIsTrans(true);
    setIsSec(false);
    setIsPricing(false);
    setIsClimate(false);
  };

  const handleSec = () => {
    setIsTrans(false);
    setIsSec(true);
    setIsPricing(false);
    setIsClimate(false);
  };

  const handlePricing = () => {
    setIsTrans(false);
    setIsSec(false);
    setIsPricing(true);
    setIsClimate(false);
  };

  const handleClimate = () => {
    setIsTrans(false);
    setIsSec(false);
    setIsPricing(false);
    setIsClimate(true);
  };

  // Se a flag for nula coloca bandeira br
  const [flag, setFlag] = useState<any>(
    localStorage.getItem('language') === 'en-US' ? (
      <Us className="flag" />
    ) : (
      <Br className="flag" />
    )
  );
  // fechar o popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // abrir o popover
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  // escolhendo ingles
  const handleEN = () => {
    if (flag.type.name !== 'SvgUs') {
      setFlag(<Us className="flag" />);
      setLanguage('en-US');
      localStorage.setItem('language', 'en-US');
    }
  };

  // escolhendo portugues
  const handlePT = () => {
    if (flag.type.name !== 'SvgBr') {
      setFlag(<Br className="flag" />);
      setLanguage('pt-BR');
      localStorage.setItem('language', 'pt-BR');
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
        color: '#8884d8',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#8884d8'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? '#8884d8'
              : '#8884d8',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? '#FFFAFA'
          : '#282a36',
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
          '#FFFAFA'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? '#8884d8'
          : '#8884d8',
      borderRadius: 20 / 2,
    },
  }));

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // const [data, setData] = React.useState<IDataCards>({});
  // const [filter, setFilter] = React.useState<IDataCards>(
  //   {}
  // );
  // const [search, setSearch] = React.useState<IDataCards>(
  //   {}
  // );
  // console.log(dataCards);
  // console.log(search, 'filtrado');

  // useEffect(() => {
  //   return setData(dataCards);
  // }, []);

  // useEffect(() => {
  //   return setFilter(
  //     dataCards.filter((data) => data.name.includes(search))
  //   );
  // }, [search]);
  return (
    <div data-theme={theme}>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box
          sx={
            theme === 'light'
              ? styleModalLight
              : styleModaldark
          }
        >
          <ModalDataFromCards
            infoLabelCost="Satisfacao"
            infoValueCost={15}
            infoLabelSec="Security"
            infoValueSec={70}
            infoLabelTrans="Transporte"
            infoValueTrans={90}
            infoLabelCul="Cultura"
            infoValueCul={20}
            infoTemp={28}
            lat={0.1017723}
            lng={-51.0968607}
            zoom={11}
            cost={
              localStorage.getItem('language') === 'pt-BR'
                ? 456 * 4.2
                : 456
            }
            wifi={76}
            theme={theme}
          />
        </Box>
      </Modal>
      <Container>
        <MainHeader />
        <FilterMenu>
          <LeftMenuSection>
            <InputSearch
              name="search"
              // onChange={(e) => setSearch(e.target.value)}
              // value={search}
              placeholder={helper.getText(
                'typeYourSearch',
                language
              )}
              type="text"
            />
            <BtnFilterCity
              onClick={handleTrans}
              isTrans={isTrans}
            >
              {helper.getText('trans', language)}
            </BtnFilterCity>
            <BtnFilterState
              onClick={handleSec}
              isSec={isSec}
            >
              {helper.getText('security', language)}
            </BtnFilterState>
            <BtnFilterPricing
              onClick={handlePricing}
              isPricing={isPricing}
            >
              {helper.getText('pricing', language)}
            </BtnFilterPricing>
            <BtnFilterClimate
              onClick={handleClimate}
              isClimate={isClimate}
            >
              {helper.getText('climate', language)}
            </BtnFilterClimate>
          </LeftMenuSection>
          <RightMenuSection>
            <BtnFlag
              aria-describedby={id}
              onClick={handleClick}
            >
              {flag}
            </BtnFlag>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <WrapPopover theme={theme}>
                <BtnFlag onClick={handlePT}>
                  <Br className="flag" />
                </BtnFlag>
                <BtnFlag onClick={handleEN}>
                  <Us className="flag" />
                </BtnFlag>
              </WrapPopover>
            </Popover>

            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    onChange={switchTheme}
                    checked={
                      theme === 'light' ? false : true
                    }
                  />
                }
                label={theme === 'light' ? 'LIGHT' : 'DARK'}
              />
            </FormGroup>
          </RightMenuSection>
        </FilterMenu>
        <WrapPrincipal>
          <PrincipalSection>
            {dataCards.map((item) => {
              return (
                <CitiesCard
                  onClick={handleOpenModal}
                  city={item.name}
                  image={item.imageUrl}
                  satisfactionValue={item.satisfactionValue}
                  cultureValue={item.cultureValue}
                  homeSecutityValue={item.homeSecutityValue}
                  transValue={item.transValue}
                  wifi={item.wifi}
                  cost={
                    localStorage.getItem('language') ===
                    'pt-BR'
                      ? item.cost
                      : item.cost && item.cost * 4.2
                  }
                  costUnity={
                    localStorage.getItem('language') ===
                    'en-US'
                      ? 'US$'
                      : 'R$'
                  }
                  temperature={
                    localStorage.getItem('language') ===
                    'pt-BR'
                      ? item.temp
                      : item.temp &&
                        (item.temp * 9) / 5 + 32
                  }
                  unityTemp={
                    localStorage.getItem('language') ===
                    'en-US'
                      ? '??F'
                      : '??C'
                  }
                />
              );
            })}
          </PrincipalSection>
        </WrapPrincipal>
      </Container>
    </div>
  );
};
export default Main;
