'use client';

export default function ExchangeWidget() {
  const waMessage = encodeURIComponent(
    `Hi i-madeFX Exchange, I want to initiate an exchange.`
  );

  return (
    <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-3xl shadow-xl w-full max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Ready to Exchange?</h2>
      <p className="text-slate-400 mb-8">
        Click below to start your instant exchange process with our team on WhatsApp.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4">
        <a 
          href={`https://wa.me/2348105105757?text=${waMessage}`} 
          target="_blank" 
          className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-bold transition"
        >
          Check Rates
        </a>
        <a 
          href={`https://wa.me/2348105105757?text=${waMessage}`} 
          target="_blank" 
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-extrabold transition"
        >
          Exchange Now
        </a>
      </div>

      <div className="mt-8 text-sm text-slate-500">
        Service Fee: <span className="text-slate-300 font-bold">$2.00</span>
      </div>
    </div>
  );
}