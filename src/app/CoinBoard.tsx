// src/components/CoinBoard.tsx
const coins = [
  { name: 'BTC', buy: 1425, sell: 1385 },
  { name: 'USDT', buy: 1420, sell: 1378 },
  { name: 'ETH', buy: 1428, sell: 1382 },
  { name: 'BNB', buy: 1430, sell: 1380 },
  { name: 'SOL', buy: 1430, sell: 1385 },
  { name: 'TRX', buy: 1430, sell: 1380 },
  { name: 'XRP', buy: 1430, sell: 1380 },
];

export default function CoinBoard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-6">
      {coins.map((coin) => (
        <div key={coin.name} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <div className="font-extrabold text-lg text-slate-800 mb-2">{coin.name}</div>
          <div className="flex justify-between text-xs font-bold text-green-600">
            <span>BUY</span> <span>₦{coin.buy.toLocaleString()}/$</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-red-600">
            <span>SELL</span> <span>₦{coin.sell.toLocaleString()}/$</span>
          </div>
        </div>
      ))}
    </div>
  );
}