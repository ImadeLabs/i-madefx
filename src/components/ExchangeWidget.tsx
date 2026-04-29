'use client'; 

import { useState } from 'react';

const REFERENCE_RATE = 1420; 
const FLAT_FEE_USD = 2.00; // Flat $2 fee

const cryptocurrencies = [
  { id: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { id: 'USDT', name: 'Tether USD', symbol: '$' },
  { id: 'USD', name: 'US Dollar', symbol: '$' },
  { id: 'BTC', name: 'Bitcoin', symbol: '₿' },
];

export default function ExchangeWidget() {
  const [fromCurrency, setFromCurrency] = useState('USDT');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [fromAmount, setFromAmount] = useState('100');

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getFinalAmount = () => {
    const amount = parseFloat(fromAmount) || 0;
    
    // If sending USD-based assets, remove $2 fee first
    let netAmount = (fromCurrency === 'USDT' || fromCurrency === 'USD') ? amount - FLAT_FEE_USD : amount;
    if (netAmount < 0) netAmount = 0;

    if (fromCurrency === 'USDT' && toCurrency === 'NGN') return netAmount * REFERENCE_RATE;
    if (fromCurrency === 'NGN' && toCurrency === 'USDT') return netAmount / REFERENCE_RATE;
    return netAmount;
  };

  const finalReceiveAmount = getFinalAmount();

  return (
    <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-3xl shadow-xl backdrop-blur-xl w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
        <h2 className="text-xl font-semibold text-white">Start Your Exchange</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <label className="text-sm font-medium text-slate-400 mb-2 block">You Send</label>
          <div className="flex items-center gap-3">
            <input type="number" value={fromAmount} onChange={(e) => setFromAmount(e.target.value)} className="bg-transparent flex-1 text-3xl text-white outline-none w-full" />
            <select className="bg-slate-700 text-white rounded-lg p-3 text-lg font-bold" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {cryptocurrencies.map(crypto => <option key={crypto.id} value={crypto.id}>{crypto.id}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-center -my-3">
          <button onClick={handleSwap} className="bg-emerald-600 rounded-full p-3 border-4 border-slate-900 hover:bg-emerald-500 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5S7.5 12 12 12s9-4.5 9-4.5M3 16.5s4.5 4.5 9 4.5 9-4.5 9-4.5" /></svg>
          </button>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <label className="text-sm font-medium text-slate-400 mb-2 block">You Receive (Est.)</label>
          <div className="text-3xl font-bold text-emerald-400">{finalReceiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="mt-8 bg-slate-950/50 p-5 rounded-2xl border border-slate-800 text-sm flex justify-between">
        <span className="text-slate-400">Service Fee</span>
        <span className="text-white font-bold">$2.00</span>
      </div>

      <a 
        href="https://wa.me/2348105105757" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block text-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg py-5 rounded-xl mt-8 transition-all"
      >
        Exchange Now with i-madeFX Exchange
      </a>
    </div>
  );
}