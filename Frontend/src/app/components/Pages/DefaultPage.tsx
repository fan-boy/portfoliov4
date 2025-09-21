import React from "react";
import Footer from "../Miscelaneous/footer";

export default function DefaultPage ({
    children
  }: {
    children: React.ReactNode
  }){
    return(
        <>
        <main className="flex flex-col items-center z-10">
            {children}
        </main>
        <Footer />
        </>
    )
}