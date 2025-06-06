// src/app/layout.tsx
import '@/app/globals.css'
import { Navbar } from './components/Navbar/Navbar';
import CustomCursor from './components/customcursor';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="relative min-h-screen justify-center flex-center">
        <CustomCursor/>
       <Navbar />
        {children}
      </body>
    </html>
  );
}