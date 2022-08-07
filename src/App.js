import Die from './components/Die';
import './styles/App.css';

function App() {
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
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={7} />
          <Die value={8} />
          <Die value={9} />
          <Die value={0} />
        </div>
        <button className="btn-roll">Roll</button>
      </div>
    </div>
  );
}

export default App;
