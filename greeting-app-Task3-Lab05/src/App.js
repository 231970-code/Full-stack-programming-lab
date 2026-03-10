
import './App.css';
function Greeting(props) {

  let message = "";

  if (props.timeOfDay === "morning") {
    message = "Good Morning";
  } 
  else if (props.timeOfDay === "afternoon") {
    message = "Good Afternoon";
  } 
  else if (props.timeOfDay === "evening") {
    message = "Good Evening";
  } 
  else {
    message = "Hello";
  }

  const style = {
    backgroundColor: props.bgColor,
    padding: "15px",
    margin: "10px",
    borderRadius: "6px"
  };

  return (
    <div style={style}>
      <h2>{message}, {props.name}!</h2>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Greeting App</h1>

      <Greeting 
        name="Ali"
        timeOfDay="morning"
        bgColor="lightblue"
      />

      <Greeting 
        name="Ahmed"
        timeOfDay="afternoon"
        bgColor="lightgreen"
      />

      <Greeting 
        name="Usman"
        timeOfDay="evening"
        bgColor="lightyellow"
      />

    </div>
  );
}

export default App;
