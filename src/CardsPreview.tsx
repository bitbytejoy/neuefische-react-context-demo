import {useContext} from "react";
import CardsPageContext from "./CardsPageContext";

export default function CardsPreview () {
  const cardsPageContext = useContext(CardsPageContext);
  return <pre style={{border: "1px solid black"}}>{JSON.stringify(cardsPageContext.state.cards, null, 2)}</pre>
}