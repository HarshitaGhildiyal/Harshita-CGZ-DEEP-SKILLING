import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const flag = true;

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  }

  return (
    <div className="App">
      <IndianPlayers />
    </div>
  );
}

export default App;