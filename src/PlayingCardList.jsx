// import React, { useState } from "react";
// import {v4 as uuid} from "uuid";
// import PlayingCard from "./PlayingCard";
// import "./PlayingCardList.css";
// import { useAxios } from "./hooks";

// /* Renders a list of playing cards.
//  * Can also add a new card at random. */
// function CardTable() {
//   // const [cards, setCards] = useState([]);
//   // const addCard = async () => {
//   //   const response = await axios.get(
//   //     "https://deckofcardsapi.com/api/deck/new/draw/"
//   //   );
//   //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   // };
//   const [responses, fetchData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")
  
//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={() => fetchData()}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {responses.map(responseData => (
//           <PlayingCard key={uuid()} front={responseData.cards[0].image}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// CardTable.defaultProps = {};

// export default CardTable;

import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random,
 * or remove all cards. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
