// Import dos textos
import book from "./book";

// Enum das línguas
export const Language = {
  "pt-BR": 0,
  "en-US": 1,
};

class Helper {
  /**
   * Função para retornar o texto traduzido
   * @param text Texto a ser obtido
   * @param language Língua
   * @returns Texto traduzido na língua desejada
   */
  getText(text: string, language: string | null): string {
    // Se não houver língua
    if (!language) {
      // Define como português
      language = "pt-BR";
    }
    // Se não encontrar o texto
    if (!book[text]) {
      // Retorna o próprio texto
      return text;
    }
    // Retorna texto traduzido
    return book[text][Language[language as keyof typeof Language]];
  }
}

export default new Helper();