import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import NavTabs from "./components/NavTabs";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life of the Mind Institute",
  description: "A forum for discourse and debate on humanity's future in the age of AGI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[#c8b99a] bg-[#ede5d0]">
          <div className="mx-auto max-w-3xl px-6">
            <div className="py-6">
              <a
                href="/about"
                className="flex items-center gap-4 text-2xl font-semibold uppercase tracking-[0.2em] text-[#2c1a0e]"
              >
                <Image
                  src="/logo.png"
                  alt="Life of the Mind Institute logo"
                  width={120}
                  height={120}
                  className="shrink-0"
                />
                Life of the Mind Institute
              </a>
            </div>
            <NavTabs />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
