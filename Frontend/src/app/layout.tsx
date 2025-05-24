// src/app/layout.tsx
import '@/app/globals.css'
import Link from 'next/link';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="relative min-h-screen justify-center flex-center">
        <nav className="fixed w-full justify-center flex-center flex top-5 z-10 ">
          <span className="flex gap-4 bg-gray-500 px-5 py-3 rounded-full font-black items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="/#work">work</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            {/* <a href="/chat">chat</a> */}
          </span>
        </nav>  
        {children}
      </body>
    </html>
  );
}