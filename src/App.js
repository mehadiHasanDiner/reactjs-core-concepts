import logo from "./logo.svg";
import "./App.css";

// const number = 343;
// const singer = { name: "Asif", job: "singer-1" };
// const singer2 = { name: "Eva Rahman", job: "singer-2" };
// const style = {
//   color: "yellow",
//   backgroundColor: "purple",
//   padding: "10px",
//   borderRadius: "10px",
// };

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component. YAY</h5>
      <p>Rock Mama. React Mama</p>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
<Person></Person>;

function Person() {
  return (
    <div className="person">
      <h1>Shakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="container">
      <h3>Name: Ajay Devgun</h3>
      <p>Profession: Acting</p>
    </div>
  );
}

export default App;
