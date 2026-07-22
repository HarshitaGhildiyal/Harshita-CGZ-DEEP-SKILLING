import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.Total / props.goal;

  return (
    <div className="score-card">
      <h1>Student Management Portal</h1>
      <h2>Score Calculator</h2>
      <p>
        <span>Name:</span> {props.Name}
      </p>
      <p>
        <span>School:</span> {props.School}
      </p>
      <p>
        <span>Total:</span> {props.Total}
      </p>
      <p>
        <span>Goal:</span> {props.goal}
      </p>
      <p>
        <span>Average Score:</span> {average}
      </p>
    </div>
  );
}

// export default CalculateScore;