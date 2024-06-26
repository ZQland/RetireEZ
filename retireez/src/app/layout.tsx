import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "./components/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retire EZ",
  description: "Your retirement financial planning made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />
        {children}
        </body>
    </html>
  );
}
