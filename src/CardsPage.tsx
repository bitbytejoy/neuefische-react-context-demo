import React, {useReducer} from "react";
import CardList from "./CardList";
import SideBar from "./SideBar";
import CardType from "./CardType";
import CardsPageContext from "./CardsPageContext";

export default function CardsPage () {
  const [state, dispatch] = useReducer(
    (
      state: {cards: CardType[]},
      action: {type: string, payload: any}
    ) => {
      switch (action.type) {
        case "changeCard": {
          const {card}: {card: CardType} = action.payload;
          return {
            ...state,
            cards: state.cards.map(c => c.id === card.id ? card : c)
          };
        }

        case "cardDelete": {
          const {id}: {id: string} = action.payload;
          return {
            ...state,
            cards: state.cards.filter(c => c.id !== id)
          }
        }

        default: {
          return state;
        }
      }
    },
    {
      cards: [
        {id: '1', title: 'Card 1', description: 'Description 1'},
        {id: '2', title: 'Card 2', description: 'Description 2'},
        {id: '3', title: 'Card 3', description: 'Description 3'},
      ]
    }
  );

  return (
    <CardsPageContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <div>
          <SideBar/>
        </div>

        <div>
          <CardList/>
        </div>
      </div>
    </CardsPageContext.Provider>
  )
}