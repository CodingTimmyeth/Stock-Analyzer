import { useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500">Hello World</h1>
      <FaSearch />
    </>
  );
}

export default App;
