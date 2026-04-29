import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i-madeFX Exchange | Nigeria's Trusted Crypto & Gift Card Exchange",
  description: "Buy and sell crypto and all kinds of gift cards instantly. i-madeFX Exchange offers secure, reliable, and fast exchange services in Nigeria. Chat with us on WhatsApp for today's rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950">
          <p>© {new Date().getFullYear()} i-madeFX Exchange. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}