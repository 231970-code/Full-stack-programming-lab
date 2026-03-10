import './App.css';
function CourseItem(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "12px",
      margin: "10px",
      borderRadius: "6px"
    }}>
      <h3>{props.courseName}</h3>
      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration}</p>
      <p>Type: {props.type}</p>
    </div>
  );
}

function App() {

  const courses = [
    {courseName:"Web Development", instructor:"Ali Khan", duration:"3 Months", type:"Online"},
    {courseName:"Mobile App Development", instructor:"Ahmed Raza", duration:"4 Months", type:"Offline"},
    {courseName:"Data Structures", instructor:"Usman Khalid", duration:"2 Months", type:"Online"},
    {courseName:"Database Systems", instructor:"Sara Ahmed", duration:"3 Months", type:"Offline"},
    {courseName:"Machine Learning", instructor:"Hassan Ali", duration:"5 Months", type:"Online"}
  ];

  return (
    <div>
      <h1>Course List</h1>

      {courses.map((course, index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}

    </div>
  );
}

export default App;
