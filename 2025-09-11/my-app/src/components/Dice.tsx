import { useState } from "react"
import "../Dice.css"


function Dice() {
    const [value, setValue] = useState(0)

    const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setValue(random);
  };

  return (
    <>
    <div className="diceContainer">
    <h2>🎲Dice</h2>
    <div id="value">You rolled: {value}</div>
    <br />
    <button onClick={rollDice}>Roll the dice</button>
    </div>
    </>
  )
}

export default Dice