import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Die from './components/Die';
import './styles/App.css';

function App() {
  const [dice, setDice] = useState(allNewDice()) 
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDieHeld = dice.every(die => die.isHeld)
    const allDieSameValue = dice.every(die => dice[0].value === die.value)  
    
    if (allDieHeld && allDieSameValue) {
      setTenzies(true)
      console.log("won")
    }
  }, [dice])

  const diceElements = dice.map(die => (
    <Die
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.round(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }  

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {
        ...die,
        isHeld: !die.isHeld
      }
      : die
    }))
  }

  return (
    <div className="App">
      <div className="tenzies-wrapper">
        <div className='head'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click 
            each die to freeze it at its current value
            between rolls.
          </p>
        </div>
        
        <div className="die-wrapper">
          { diceElements }
        </div>
        <button onClick={ rollDice } className="btn-roll">Roll</button>
      </div>
    </div>
  );
}

export default App;
