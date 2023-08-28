import logo from "./logo.svg";
import "./App.css";

// const number = 343;
const singers = [
  { name: "Asif", job: "singer-1" },
  { name: "Eva Rahman", job: "singer-2" },
  { name: "Agun", job: "sopno" },
  { name: "Suvro", job: "pathor" },
];
// const style = {
//   color: "yellow",
//   backgroundColor: "purple",
//   padding: "10px",
//   borderRadius: "10px",
// };

function App() {
  const nayoks = [
    "Rubel",
    "Joshim",
    "Manna",
    "BappaRaj",
    "Salmanship",
    "Shakib Khan",
    "Siam",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name:{nayok}</li>
      ))}

      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name}></Person>
      ))}
      {/* <Person name={nayoks[0]} naika="Mouri"></Person>
      <Person name={nayoks[1]} naika="Sabnur"></Person>
      <Person></Person> */}
      <h5>New Component. YAY</h5>
      <p>Rock Mama. React Mama</p>
      <Friend name="Ajoy Devgun" phone="0128456"></Friend>
      <Friend name="King Khan" phone="01922940626"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>Nayok: {props.name}</h1>
      <p>Naika: {props.naika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone} </p>
    </div>
  );
}

export default App;
