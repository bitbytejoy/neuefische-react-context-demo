import CardType from "./CardType";
import {ChangeEvent, useCallback} from "react";

export default function CardForm ({
  card,
  onChange
}: {
  card: CardType,
  onChange: (card: CardType) => void
}) {
  const onValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...card,
        [e.target.name]: e.target.value
      });
    },
    [onChange, card]
  );

  return (
    <form>
      <div>
        <label>
          Title
          <input name="title" value={card.title} onChange={onValueChange}/>
        </label>
      </div>

      <div>
        <label>
          Description
          <input
            name="description"
            value={card.description}
            onChange={onValueChange}
          />
        </label>
      </div>
    </form>
  )
}