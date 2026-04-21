import CoinBoard from './CoinBoard';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="bg-blue-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-black mb-4">ParisWebFX Since 2006</h1>
        <p className="text-blue-200 text-xl font-bold">Nigeria’s trusted name in exchange.</p>
        <p className="mt-2 text-blue-300">Instant funding. Zero delays. Total reliability.</p>
        
        {/* Added Crypto Text */}
        <p className="mt-6 text-xl font-semibold text-yellow-400 italic">
          We buy and sell crypto. DM for rates!
        </p>
        
        {/* Actionable Contact Button */}
        <a 
          href={`https://wa.me/2348105105757?text=${encodeURIComponent("Hi ParisWebFX, I want to trade.")}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg"
        >
          Chat on WhatsApp
        </a>
      </div>

      <CoinBoard />

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Testimonials</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <p className="italic text-slate-600">"Please confirm my account now."</p>
            <p className="font-bold mt-2 text-slate-900">- Abdul razaq Kolade, Ojo, Lagos</p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <p className="italic text-slate-600">"I am highly impressed with the quality of service I got from you guys. I and my friends will continue to do business together."</p>
            <p className="font-bold mt-2 text-slate-900">- Unity Edeye, Ofagbe, Delta State</p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <p className="italic text-slate-600">"Very good site and simple, the rates are very nice also and its very fast in sending money to your bank."</p>
            <p className="font-bold mt-2 text-slate-900">- Sunday Nnamonu, Maraba, Nasarawa State</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-slate-100 py-16 px-6 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About ParisWebFX</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We started this industry since the days of e-gold (Since 2006) and have been growing to be your 
            best choice for anything e-currency. ParisWebFX started from a small Cyber Cafe in Benin city 
            Nigeria in 2006 as a bridge between those looking for where to buy e-gold and those looking 
            for how to cash out their online earnings.
          </p>
          <p className="text-slate-700 leading-relaxed">
            With no template, no guide and $0 in funding, ParisWebFX grew to be Nigeria's biggest and most 
            reliable exchange via pure resilience, hard work, and honesty. We have witnessed many ups and 
            downs, especially the collapse of e-gold and Liberty Reserve, and remained resolute, proving our 
            integrity to guarantee that you are in safe hands.
          </p>
        </div>
      </section>
    </main>
  );
}