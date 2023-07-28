import { useState } from "react";
import "./App.css";
import { FcCandleSticks } from "react-icons/fc";

function App() {
  const [stockName, setStockName] = useState("");
  const [passed, setPassed] = useState(true);

  const handleStockNameChange = (e) => {
    const value = e.target.value;
    setStockName(value);
  };

  const validateStockName = (stock) => {
    const regexStockName = /^[a-zA-Z0-9.-]+$/.test(stock);
    if (regexStockName) {
      setPassed(true);
    } else {
      setPassed(false);
    }

    console.log(regexStockName);
  };

  return (
    <>
      <header className="flex flex-col items-start gap-5">
        <div className="bg-secondaryBG p-3 rounded-full">
          <FcCandleSticks className="text-5xl" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className="text-textWhite">Search for Stock...</label>
          </div>
          {/* Input and Button DIV */}
          <div className="flex items-start gap-4">
            <div>
              <input
                className={`px-5 py-3 border-2 rounded-2xl ${
                  passed ? "border-transparent" : "border-red-500"
                }`}
                type="text"
                placeholder="APPL"
                onChange={handleStockNameChange}
              />
              {!passed && (
                <p className="italic text-secondaryAccent text-[12px] ml-2 mt-2">
                  Please Enter a valid value!
                </p>
              )}
            </div>
            <div className="flex justify-center items-end text-textWhite">
              <button
                className="bg-primaryAccent py-3 px-5 rounded-2xl"
                onClick={() => validateStockName(stockName)}
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
