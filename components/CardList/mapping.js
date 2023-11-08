import getButtons from "../UtilityComponents/Button/mapping";
import { getComponentPadding } from "@utils/helpers";
const getCardButtons = (cards) => {
  const cardsWithButtons = cards.map((c) => {
    const buttons = c?.buttons && getButtons(c?.buttons);
    return { ...c, buttons };
  });
  return cardsWithButtons;
};

const mapping = (data) => {
  if (!data) return "";

  const cards = getCardButtons(data?.cards);

  return {
    ...data,
    cards,
    componentPadding: getComponentPadding(data),
  };
};

export default mapping;
