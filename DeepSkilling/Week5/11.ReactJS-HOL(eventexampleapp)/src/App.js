import { useState } from 'react';
import './App.css';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((value) => value + 1);
  };

  const decrement = () => {
    setCounter((value) => value - 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = () => {
    alert('I was clicked');
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <section className="panel">
        <h2>Counter</h2>
        <p className="counter">{counter}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </section>

      <section className="panel">
        <h2>Welcome Event</h2>
        <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      </section>

      <section className="panel">
        <h2>Synthetic Event</h2>
        <button onClick={handleSyntheticEvent}>OnPress</button>
      </section>

      <CurrencyConvertor />
    </div>
  );
}

export default App;