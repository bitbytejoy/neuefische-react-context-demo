import CardType from "./CardType";
import CardForm from "./CardForm";
import {useCallback} from "react";

export default function Card ({
  card,
  onChange,
  onDelete
}: {
  card: CardType,
  onChange: (card: CardType) => void,
  onDelete: (id: string) => void
}) {
  const remove = useCallback(
    () => onDelete(card.id),
    [onDelete, card.id]
  );

  return (
    <div>
      <CardForm card={card} onChange={onChange}/>
      <div>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  )
}