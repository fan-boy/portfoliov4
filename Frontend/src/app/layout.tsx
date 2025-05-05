// src/app/layout.tsx
import '@/app/globals.css'




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
            <a href="/">Home</a>
            <a href="/#work">work</a>
            <a href="/about">about</a>
            <a href="/contact">contact</a>
            <a href="/chat">chat</a>
          </span>
        </nav>  
        {children}
      </body>
    </html>
  );
}