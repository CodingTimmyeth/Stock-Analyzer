import { useState } from "react";
import "./App.css";
import { GrSearch } from "react-icons/gr";
import { FcCandleSticks } from "react-icons/fc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex flex-col items-start gap-5">
        <div className="bg-secondaryBG p-2 rounded-full">
          <FcCandleSticks className="text-3xl" />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-textWhite">Search for Stock...</label>
            <input
              className={`px-5 py-3 border-none rounded-2xl`}
              type="text"
              placeholder="APPL"
            />
          </div>
          <div className="flex justify-center items-end text-textWhite">
            <button className="bg-primaryAccent py-3 px-5 rounded-2xl">
              Analyze
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
