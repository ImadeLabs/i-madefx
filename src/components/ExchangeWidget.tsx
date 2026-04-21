// src/components/ExchangeWidget.tsx
'use client'; // This directive is necessary for client-side interactions in App Router

import { useState } from 'react';

// Hardcoded reference rates provided
const REFERENCE_RATE = 1420; // NGN per 1 USDT/USD
const FEE_PERCENT = 0.02;     // 2% service fee

const cryptocurrencies = [
  { id: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { id: 'USDT', name: 'Tether USD', symbol: '$' },
  { id: 'USD', name: 'US Dollar', symbol: '$' },
  { id: 'BTC', name: 'Bitcoin', symbol: '₿' },
];

export default function ExchangeWidget() {
  const [fromCurrency, setFromCurrency] = useState('USDT');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [fromAmount, setFromAmount] = useState('100'); // Default start amount

  // Calculate the raw converted amount
  const getRawAmount = () => {
    const amount = parseFloat(fromAmount) || 0;
    
    // Logic for USDT <-> NGN
    if (fromCurrency === 'USDT' && toCurrency === 'NGN') {
      return amount * REFERENCE_RATE;
    }
    if (fromCurrency === 'NGN' && toCurrency === 'USDT') {
      return amount / REFERENCE_RATE;
    }
    
    // Logic for USD <-> USDT (Simplification: 1:1)
    if ((fromCurrency === 'USD' && toCurrency === 'USDT') || (fromCurrency === 'USDT' && toCurrency === 'USD')) {
        return amount;
    }
    
    return 0; // Fallback
  };

  const rawAmount = getRawAmount();
  const feeAmount = rawAmount * FEE_PERCENT;
  const finalReceiveAmount = rawAmount - feeAmount;

  // Formatting utility
  const formatValue = (val: number, id: string) => {
    if (id === 'NGN') return val.toFixed(2);
    if (id === 'BTC') return val.toFixed(8);
    return val.toFixed(4);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-3xl shadow-[0_10px_60px_-10px_rgba(16,185,129,0.15)] backdrop-blur-xl w-full max-w-lg mx-auto">
      
      {/* Header with the 'Seek' indication */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
        <h2 className="text-xl font-semibold text-white">Start Your Exchange</h2>
        <span className="text-xs bg-emerald-900/50 text-emerald-400 font-mono px-3 py-1 rounded-full uppercase tracking-wide">
          Instant 24/7
        </span>
      </div>
      
      <div className="space-y-6">
        {/* You Send Input */}
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-slate-400">You Send</label>
          </div>
          <div className="flex items-center gap-3">
            <input 
              type="number" 
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent flex-1 text-3xl text-white outline-none"
              placeholder="0.00"
            />
            <select 
                className="bg-slate-700 text-white rounded-lg p-3 text-lg font-bold" 
                value={fromCurrency} 
                onChange={(e) => setFromCurrency(e.target.value)}>
              {cryptocurrencies.map(crypto => (
                <option key={crypto.id} value={crypto.id}>{crypto.id}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Arrow Button (Visual Only) */}
        <div className="flex justify-center -my-3">
          <button className="bg-emerald-600 rounded-full p-3 border-4 border-slate-900 hover:bg-emerald-500 transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5S7.5 12 12 12s9-4.5 9-4.5M3 16.5s4.5 4.5 9 4.5 9-4.5 9-4.5" />
            </svg>
          </button>
        </div>

        {/* You Receive Output */}
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <label className="text-sm font-medium text-slate-400 mb-2 block">You Receive (Est.)</label>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-emerald-400 flex-1">
              {formatValue(finalReceiveAmount, toCurrency)}
            </div>
            <select 
                className="bg-slate-700 text-white rounded-lg p-3 text-lg font-bold" 
                value={toCurrency} 
                onChange={(e) => setToCurrency(e.target.value)}>
              {cryptocurrencies.map(crypto => (
                <option key={crypto.id} value={crypto.id}>{crypto.id}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Transaction Details (FEE & RATE INFO) */}
      <div className="mt-8 space-y-3 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/60 font-mono text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Current NGN Rate (Today)</span>
          <span className="text-white">₦{REFERENCE_RATE.toFixed(2)} / USDT</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Service Fee (2.0%)</span>
          <span className="text-red-400">-{feeAmount.toFixed(2)} {toCurrency}</span>
        </div>
        <div className="pt-3 mt-3 border-t border-slate-800 text-xs text-slate-500 text-center">
          * This is a reference rate based on daily updates. Always confirm current rates with support before final settlement.
        </div>
      </div>

      {/* Primary CTA */}
      <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg py-5 rounded-xl mt-8 transition-all transform hover:translate-y-[-2px] hover:shadow-[0_8px_30px_-5px_rgba(16,185,129,0.3)]">
        Exchange Now with ParisWebFX
      </button>
    </div>
  );
}