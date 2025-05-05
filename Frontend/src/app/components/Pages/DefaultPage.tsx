import React from "react";

export default function DefaultPage ({
    children,
    selected,
  }: {
    children: React.ReactNode,
    selected?: string,
  }){
    return(
        <>
        <main className="flex flex-col">
            {children}
        </main>
        </>
    )
}