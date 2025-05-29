import React from "react";

export default function DefaultPage ({
    children
  }: {
    children: React.ReactNode
  }){
    return(
        <>
        <main className="flex flex-col items-center">
            {children}
        </main>
        </>
    )
}