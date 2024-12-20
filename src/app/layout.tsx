import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import SessionProvider from "./_components/SessionProvider";
import Footer from "~/app/_components/footer";
import Navbar from "./_components/navbar/nabvar";
export const metadata: Metadata = {
  title: "Diagnose.Ai",
  description: "Generated for BEST Hackathon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} !text-black`}>
      <body className="min-h-screen bg-neutral-100">
        <SessionProvider>
          <TRPCReactProvider>
            <Navbar />
            {children}
            <Footer />
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
