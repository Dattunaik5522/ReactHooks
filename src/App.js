import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(5);
  const [user, setUser] = useState({ username: "john", balance: 100 });

  // let count = 0;

  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    // console.log(count);
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <h1>Hello Dattu Naik</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
