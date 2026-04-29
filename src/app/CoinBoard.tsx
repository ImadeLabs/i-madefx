const coins = [
  { name: 'Bitcoin (BTC)', buy: 1425, sell: 1385 },
  { name: 'USDT', buy: 1420, sell: 1378 },
  { name: 'Ethereum (ETH)', buy: 1428, sell: 1382 },
  { name: 'Binance (BNB)', buy: 1430, sell: 1380 },
  { name: 'Solana (SOL)', buy: 1430, sell: 1385 },
  { name: 'Tron (TRX)', buy: 1430, sell: 1380 },
];

export default function CoinBoard() {
  return (
    <section className="max-w-6xl mx-auto py-8 px-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Live Exchange Rates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div key={coin.name} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
            <span className="font-bold text-slate-700">{coin.name}</span>
            <div className="text-right">
              <div className="text-xs text-green-600 font-bold">BUY: ₦{coin.buy.toLocaleString()}</div>
              <div className="text-xs text-red-600 font-bold">SELL: ₦{coin.sell.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}