import React from 'react';

// Updated market data with current naming and reference styles
const marketData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$69,420.00', change: '+1.15%' },
    { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '-0.01%' },
    { name: 'USD to NGN (Ref)', symbol: 'FX', price: '₦1,420.00', change: 'Daily' },
];

export default function LivePriceFeed() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-white">Market Overview</h3>
        <span className="text-sm text-emerald-400 font-medium">Updated live</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketData.map((coin) => (
          <div 
            key={coin.symbol} 
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex items-center gap-4 transition-all hover:border-emerald-500/30 hover:bg-slate-900"
          >
            <div className="p-4 bg-emerald-950/50 rounded-xl text-emerald-400 font-bold text-lg border border-emerald-900/50">
              {coin.symbol.substring(0, 1)}
            </div>
            
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{coin.name}</p>
              <p className="text-xl font-bold text-white">{coin.price}</p>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
              coin.change.startsWith('+') ? 'bg-emerald-950 text-emerald-400' : 'bg-red-950/50 text-red-400'
            }`}>
              {coin.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}