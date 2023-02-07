import {useCallback, useContext} from "react";
import CardType from "./CardType";
import CardsPageContext from "./CardsPageContext";
import Card from "./Card";

export default function CardList () {
  const cardsPageContext = useContext(CardsPageContext);
  const {state, dispatch} = cardsPageContext;

  const {cards} = state;

  const onCardChange = useCallback(
    (card: CardType) => {
      dispatch({type: "changeCard", payload: { card }})
    },
    [dispatch]
  );

  const onCardDelete = useCallback(
    (id: string) => {
      dispatch({type: "cardDelete", payload: { id }});
    },
    [dispatch]
  );

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} style={{marginTop: "2rem"}}>
          <Card card={card} onChange={onCardChange} onDelete={onCardDelete}/>
        </div>
      ))}
    </div>
  )
}