function IndianPlayers() {
  const team = [
    'Sachin',
    'Dhoni',
    'Virat',
    'Rohit',
    'Yuvraj',
    'Raina',
  ];

  const [first, second, third, fourth, fifth, sixth] = team;
  const oddTeamPlayers = [first, third, fifth];
  const evenTeamPlayers = [second, fourth, sixth];

  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="section">
      <div className="panel">
        <h1>Indian Team</h1>
        <h2>Odd Team Players</h2>
        <ul>
          {oddTeamPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>

        <h2>Even Team Players</h2>
        <ul>
          {evenTeamPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h1>List of Indian Players Merged</h1>
        <ul>
          {mergedPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndianPlayers;