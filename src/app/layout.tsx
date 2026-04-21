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
  title: "ParisWebFX | Nigeria's Trusted Exchange Since 2006",
  description: "Buy and sell crypto instantly. ParisWebFX offers secure, reliable, and fast exchange services in Nigeria. DM for today's rates.",
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
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Simple Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t bg-white">
          <p>© {new Date().getFullYear()} ParisWebFX. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}