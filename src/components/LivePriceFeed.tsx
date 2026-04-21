// src/components/LivePriceFeed.tsx
import React from 'react';

// Static current reference prices (market context)
const marketData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$69,420.00', change: '+1.15%' },
    { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '-0.01%' },
    { name: 'USD to NGN (Ref)', symbol: 'FX', price: '₦1,420.00', change: 'Daily' },
];

export default function LivePriceFeed() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-2xl font-bold text-white mb-6">Market Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketData.map((coin) => (
          <div key={coin.symbol} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 bg-emerald-950 rounded-lg text-emerald-400 font-bold text-xl">
              {coin.symbol.substring(0, 1)}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">{coin.name}</p>
              <p className="text-2xl font-bold text-white">{coin.price}</p>
            </div>
            <div className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${coin.change.startsWith('+') ? 'bg-green-900 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
              {coin.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}