import logo from "./logo.svg";
import "./App.css";

const number = 343;
const singer = { name: "Asif", job: "singer-1" };
const singer2 = { name: "Eva Rahman", job: "singer-2" };
const style = {
  color: "yellow",
  backgroundColor: "purple",
  padding: "10px",
  borderRadius: "10px",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h1>Mehadi Hasan </h1>
          <h3>Hello Dude. React. How are you?</h3>
        </div>
        <div className="music">
          <p>
            Name: {singer.name} {singer.job}
          </p>
          <p style={style}>
            Name: {singer2.name} {singer2.job}
          </p>
          <p
            style={{
              backgroundColor: "red",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Number: {54 + number}
          </p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
