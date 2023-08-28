import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: "55000" },
    { name: "Mobile", price: "15000" },
    { name: "Watch", price: "2500" },
    { name: "Tablet", price: "20000" },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}

function Product(props) {
  // console.log(props);
  return (
    <div className="product">
      <h2>Product: {props.name}</h2>
      <p>Price: {props.price} </p>
    </div>
  );
}

export default App;
