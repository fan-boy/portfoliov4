'use client';

import '@/app/globals.css'
import { ChatProvider } from './context/ChatContext';
import { Navbar } from './components/Navbar/Navbar';
import CustomCursor from './components/customcursor';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Button from './components/Button/Button';
import ChatBox from './components/chatbox';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Lock scroll in layout-level, as context cannot use effects for this purpose.
  // We'll use a ChatOpen wrapper in ChatBox below.

  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <ChatProvider>
          <CustomCursor />
          <Analytics />
          <SpeedInsights />
          <Navbar />
          <div className="w-full" style={{ paddingTop: "140px" }}>
            {children}
          </div>
          <ChatBox />
          <div className="fixed bottom-0 right-0 z-50 m-6">
            <Button />
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
