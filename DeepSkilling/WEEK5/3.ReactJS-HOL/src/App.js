import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Harshita "
        School="Cognizant Academy"
        Total={284}
        goal={3}
      />
    </div>
  );
}

export default App;