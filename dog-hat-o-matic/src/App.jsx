import { useState } from "react";
import "./App.css";
import { DogImages } from "../components/dogImages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DogImages />
    </div>
  );
}

export default App;
