import { useState, useEffect } from "react";
import { useCointrak } from "../hooks/useCointrak";
import { usePrevious } from "../hooks/usePrevious";
import type { Delta } from "../modules/types";

import DeltaIcon from "./DeltaIcon";

interface CoinPriceProps {
  coinid: string;
}

const CoinPrice: React.FC<CoinPriceProps> = ({ coinid }) => {
  const { data, loading } = useCointrak(coinid, 60);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex-row flex-nowrap">
      <div className="text-2xl font-bold text-blue-500">
        <span className="font-semibold">&#8364;</span>
        {parseFloat(data.latest).toFixed(4)}
      </div>

      <div className="text-lg font-semibold text-blue-500">
        <span className="font-semibold">&#8364;</span>
        {parseFloat(data.average).toFixed(4)} (avg)
      </div>
    </div>
  );
};

export default CoinPrice;
