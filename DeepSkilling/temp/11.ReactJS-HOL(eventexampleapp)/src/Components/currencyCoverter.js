import { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const convertedValue = Number(rupees) / 90;
    setEuro(convertedValue.toFixed(2));
  };

  return (
    <section className="panel">
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rupees">Amount in Indian Rupees</label>
        <input
          id="rupees"
          type="number"
          value={rupees}
          onChange={(event) => setRupees(event.target.value)}
          placeholder="Enter rupees"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p className="result">Euro: {euro}</p>}
    </section>
  );
}

export default CurrencyConvertor;