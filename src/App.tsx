import { useState, useEffect } from "react";
import "./App.css";
import CoinPrice from "./components/CoinPrice";

const ticker: Record<string, [string, string]> = {
  BTC: ["Bitcoin", "bitcoin"],
  ETH: ["Ethereum", "ethereum"],
  DOGE: ["Dogecoin", "dogecoin"],
};

function App() {
  const [currentTicker, setCurrentTicker] = useState(Object.keys(ticker)[0]);
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex space-x-0 mb-8">
        {Object.entries(ticker).map(([symbol, name]) => (
          <button
            key={symbol}
            onClick={() => setCurrentTicker(symbol)}
            className={`px-2 py-1 ${
              currentTicker === symbol
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {name[0]}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <CoinPrice coinid={ticker[currentTicker][1]} />
      </div>
    </div>
  );
}

export default App;
