import React, { useState } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";


function CoinContainer(){
 
   const coins= [
      { side: "heads", imgSrc: "https://tinyurl.com/y6xrnng9" },
      { side: "tails", imgSrc: "https://tinyurl.com/y36eltzd" }
    ];
 
  // const initState= {
  //     currCoin: null,
  //     nFlips: 0,
  //     nHeads: 0,
  //     nTails: 0
  //   };

    const[state,setState]=useState({
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    });

  
  
  function flipCoin() {
    const newCoin = choice(coins);
    setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  function handleClick(e) {
  flipCoin();
  }
 
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin!</h2>
        {state.currCoin && <Coin info={state.currCoin} />}
        <button onClick={handleClick}>Flip Me!</button>
        <p>
          Out of {state.nFlips} flips, there have been {state.nHeads}{" "}
          heads and {state.nTails} tails.
        </p>
      </div>
    );

}

export default CoinContainer;
