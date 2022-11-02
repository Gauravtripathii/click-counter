import { useState } from "react";

function App() {
  const [click, setClick] = useState(0);
  return (
    <div className="app">
      <h1>count : {click}</h1>
      <span onClick={() => setClick(click + 1)}>+</span>
    </div>
  );
}

export default App;
