function ListofPlayers() {
  const players = [
    { name: 'Sachin', score: 85 },
    { name: 'Dhoni', score: 75 },
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 65 },
    { name: 'Yuvraj', score: 55 },
    { name: 'Raina', score: 70 },
    { name: 'Rahul', score: 45 },
    { name: 'Hardik', score: 60 },
    { name: 'Jadeja', score: 80 },
    { name: 'Bumrah', score: 35 },
    { name: 'Shami', score: 50 },
  ];

  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div className="section">
      <div className="panel">
        <h1>List of Players</h1>
        <ul>
          {players.map((player) => (
            <li key={player.name}>
              Mr. {player.name} <span>{player.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h1>List of Players having Scores Less than 70</h1>
        <ul>
          {belowSeventy.map((player) => (
            <li key={player.name}>
              Mr. {player.name} <span>{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListofPlayers;