import CoinBoard from './CoinBoard';
import ExchangeWidget from '../components/ExchangeWidget';
import LivePriceFeed from '../components/LivePriceFeed';

export default function Home() {
  const testimonials = [
    { name: "Oyedemi Pamilerin", text: "It was smooth and swift", date: "2026-01-20" },
    { name: "Mungopark Yakubu", text: "This app is easy to run and efficient", date: "2026-01-06" },
    { name: "Adebayo Abdulsamad", text: "it was super fast and seamless", date: "2025-10-18" },
    { name: "Bina Awura", text: "Good service", date: "2025-10-08", location: "Lafia, Nasarawa State" },
    { name: "Oziegbe Samuel", text: "Yes I am impressed but you have increased your limit please I want to buy 5", date: "2025-09-01" },
    { name: "Ogunsegun Ajibola", text: "Very impressed dealing business with this guy since 2016 moreso i will continue doing business with them", date: "2025-05-08", location: "Ijebu Igbo, Ogun State" },
    { name: "ADEDEJI OLUSEGUN", text: "i-madeFX Exchange is the TRUSTED EXCHANGER IN NIGERIA. We Are Proud of you", date: "2025-04-06" },
    { name: "Ogbonna Chinenye", text: "Fast service", date: "2025-04-04" },
    { name: "Adedeji DARASIMI", text: "i-madeFX Exchange the Best and Trusted Crypto Exchange in Africa. Keep it Up", date: "2025-04-03" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Header */}
      <div className="bg-blue-900 py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="i-madeFX Exchange Logo"
            className="w-28 h-28 object-contain rounded-full shadow-lg border-4 border-blue-800"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4">i-madeFX Exchange</h1>
        
        <p className="text-yellow-400 text-xl font-bold italic mb-2">
          Buy and Sell Digital Assets Instantly
        </p>
        
        <p className="text-blue-200 text-lg">
          Nigeria’s trusted name in exchange.
        </p>
        
        <p className="mt-4 text-blue-100 font-medium">
          Instant funding. Zero delays. Total reliability. <br/>
          Buy/Sell Crypto and All kinds of Gift Cards
        </p>
      </div>

      {/* Main Content Area */}
      <div className="py-12">
        <ExchangeWidget />
      </div>

      <LivePriceFeed />
      <CoinBoard />

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Customers Opinions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-300 font-medium mb-4 italic">"{t.text}"</p>
              <div className="flex justify-between items-end border-t border-slate-800 pt-4">
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  {t.location && <p className="text-xs text-slate-500">{t.location}</p>}
                </div>
                <p className="text-[10px] text-slate-500">Added: {t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}