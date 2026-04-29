'use client';

import { useState } from 'react';

// Define conversion rates
const RATES: { [key: string]: number } = {
  'USDT_NGN': 1420, 'NGN_USDT': 1 / 1420,
  'USDT_BTC': 0.000021, 'BTC_USDT': 47500,
  'USD_USDT': 1, 'USDT_USD': 1,
  // Add other pairs here as needed
};

const currencies = ['NGN', 'USDT', 'USD', 'BTC', 'ETH', 'SOL', 'XMR'];
const FLAT_FEE_USD = 2.00;

export default function ExchangeWidget() {
  const [fromCurrency, setFromCurrency] = useState('USDT');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [fromAmount, setFromAmount] = useState('100');

  // New Swap Functionality
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const calculateFinalAmount = () => {
    const amount = parseFloat(fromAmount) || 0;
    if (amount <= 0) return 0;

    let netAmount = (fromCurrency === 'USDT' || fromCurrency === 'USD') ? amount - FLAT_FEE_USD : amount;
    if (netAmount < 0) netAmount = 0;

    const pair = `${fromCurrency}_${toCurrency}`;
    const rate = RATES[pair] || 0;

    return netAmount * rate;
  };

  const finalReceiveAmount = calculateFinalAmount();

  return (
    <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-3xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6">Start Your Exchange</h2>

      {/* From Section */}
      <div className="bg-slate-800 p-5 rounded-xl mb-2">
        <label className="text-xs text-slate-400 uppercase font-bold">You Send</label>
        <div className="flex gap-2 mt-1">
          <input 
            type="number" 
            value={fromAmount} 
            onChange={(e) => setFromAmount(e.target.value)} 
            className="bg-transparent text-2xl text-white outline-none w-full"
          />
          <select 
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-slate-700 text-white rounded p-2"
          >
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Swap Button - Added between the bars */}
      <div className="flex justify-center -my-3 z-10 relative">
        <button 
          onClick={handleSwap}
          className="bg-emerald-600 rounded-full p-2 border-4 border-slate-900 hover:bg-emerald-500 transition-transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>
      </div>

      {/* To Section */}
      <div className="bg-slate-800 p-5 rounded-xl">
        <label className="text-xs text-slate-400 uppercase font-bold">You Receive (Est.)</label>
        <div className="flex gap-2 mt-1">
          <div className="text-2xl text-emerald-400 font-bold w-full">
            {finalReceiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
          </div>
          <select 
            value={toCurrency} 
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-slate-700 text-white rounded p-2"
          >
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Fee Display */}
      <div className="mt-4 px-2 flex justify-between text-sm">
        <span className="text-slate-400">Service Fee</span>
        <span className="text-white font-bold">$2.00</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <a href="https://wa.me/2348105105757?text=Hi, I want to check rates." target="_blank" className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-4 rounded-xl font-bold transition">Check Rates</a>
        <a href="https://wa.me/2348105105757" target="_blank" className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-center py-4 rounded-xl font-extrabold transition">Exchange Now</a>
      </div>
    </div>
  );
}