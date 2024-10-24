import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";

import { Footer } from "./Footer";

import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased font-sans bg-[#093545]`}
      >
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
