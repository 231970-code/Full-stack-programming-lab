
import './App.css';
function StudentCard(props) {
  const cardStyle = {
    backgroundColor: props.color,
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    width: "250px",
    boxShadow: "0 2px 5px gray"
  };

  return (
    <div style={cardStyle}>
      <h3>{props.name}</h3>
      <p>Roll No: {props.rollNo}</p>
      <p>Department: {props.department}</p>
      <p>University: {props.university}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Information Cards</h1>

      <StudentCard
        name="Ali Khan"
        rollNo="21-SE-101"
        department="Software Engineering"
        university="AIR University"
        color="lightblue"
      />

      <StudentCard
        name="Ahmed Raza"
        rollNo="21-SE-102"
        department="Software Engineering"
        university="AIR University"
        color="lightgreen"
      />

      <StudentCard
        name="Usman Khalid"
        rollNo="21-SE-103"
        department="Software Engineering"
        university="AIR University"
        color="lightyellow"
      />
    </div>
  );
}


export default App;
