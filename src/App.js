import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import { STOCKS } from './data/stocks';

function App() {
  const [symbol, setSymbol] = useState('AAPL');
  const [compareSymbol, setCompareSymbol] = useState('');

  const main = STOCKS[symbol];
  const compare = STOCKS[compareSymbol];

  return (
    <div className="App">
      <nav className="nav">
        <div>
          <label>
            Stock:
            <input value={symbol} onChange={e => setSymbol(e.target.value.toUpperCase())} />
          </label>
          <label style={{ marginLeft: '1rem' }}>
            Compare:
            <input value={compareSymbol} onChange={e => setCompareSymbol(e.target.value.toUpperCase())} />
          </label>
        </div>
      </nav>
      <main>
        {main && (
          <>
            <Chart data={main.data} compareData={compare ? compare.data : null} />
            <section className="description">
              <h2>{symbol}</h2>
              <p>{main.description}</p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
