import axios from "axios";

async function getRandomCard() {
  try {
    const response = await axios.get(
      "https://api.magicthegathering.io/v1/cards"
    );
    const randomCard =
      response.data.cards[
        Math.floor(Math.random() * response.data.cards.length)
      ];
    const { name, id } = randomCard;
    return { name, id };
  } catch (error) {
    console.error('Error al obtener la carta:', error);
    throw error;
  }
}

export default getRandomCard;