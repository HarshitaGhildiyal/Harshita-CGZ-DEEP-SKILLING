import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      id: 1,
      name: 'INTADMDF10 - .NET FSD',
      startedOn: '22-Feb-2022',
      status: 'ongoing',
      coach: 'Dennis Ritchie',
      trainer: 'John Doe',
    },
    {
      id: 2,
      name: 'ADM21JF014 - Java FSD',
      startedOn: '10-Sep-2021',
      status: 'completed',
      coach: 'James Gosling',
      trainer: 'Jane Doe',
    },
    {
      id: 3,
      name: 'CDBJF21025 - Java FSD',
      startedOn: '24-Dec-2021',
      status: 'completed',
      coach: 'Guido van Rossum',
      trainer: 'Richard Roe',
    },
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;