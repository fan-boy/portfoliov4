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
      <body className="relative min-h-screen">
        {/* Full-screen gradient background */}
        <div className="gradient-background" />
        
        {/* All content goes here - positioned above the gradient */}
        <div className="relative z-10 min-h-screen">
          <Analytics/>
          <SpeedInsights/>
          <CustomCursor/>
          <Navbar />

          {/* Main content area */}
          <div className="w-full" style={{paddingTop: "140px"}}>
            {children}
            hi
          </div>
        </div>
      </body>
    </html>
  );
}