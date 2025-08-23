// src/app/layout.tsx
import '@/app/globals.css'
import { Navbar } from './components/Navbar/Navbar';
import CustomCursor from './components/customcursor';

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata = {
  title: "Aaditya Shete",
  description: "Product Designer | Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="relative min-h-screen justify-center flex-center">
      <Analytics/>
      <SpeedInsights/>
        <CustomCursor/>
       {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}