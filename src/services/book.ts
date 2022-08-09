/* eslint-disable max-len */
// Import interfaces
import { IBook } from "./interfaces";

/**
 * Textos [português, inglês, espanhol, japonês, chinês]
 */
const book: IBook = {
  banner: ["Nomad Brasil", "Nomad Brazil"],
  subtitle: ["Junte-se à comunidade brasileira de trabalhadores remotos que vivem e viajam pelo país",
             "Join Brazil community of remote workers living and traveling around the country"],
  typeYourName: ["Digite seu nome", "Type your name"],
  notRegistered: ["Não possuo cadastro", "Not Registered"],
  typeYourSearch: ["Digite sua busca...", "Type your search..."],
  trans: ["Transporte", "Transport"],
  security: ["Segurança", "Security"],
  pricing: ["Custo de Vida", "Pricing"],
  climate: ["Clima", "Climate"],
  wifiConnection: ["Conexão com Wi-Fi", "Wi-Fi Connection"],
  satis: ["Satisfação", "Satisfaction"],
  culture: ["Cultura", "Culture"],
};

export default book;