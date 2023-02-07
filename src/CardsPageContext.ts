import React, {createContext} from "react";
import CardType from "./CardType";

const CardsPageContext = createContext<{
  state: { cards: CardType[] },
  dispatch: React.Dispatch<{type: string, payload: any}>
}>({
  state: { cards: [] },
  dispatch: () => {}
});

export default CardsPageContext;