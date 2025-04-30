import React from "react";


export type theme =
    | "light"
    | "dark"

interface PageSectionProps {
    children: React.ReactNode,
    theme?: theme
}

const PageSection = (props: PageSectionProps) => {

    return (
        <main className="flex flex-col overflow-x-hidden">
            <div className={`flex flex-col  items-center  ${props.theme == "dark" ? "bg-backgroundDark text-fontDark" : "bg-backgroundLight text-fontLight"}`}>

                {props.children}

            </div>
        </main>
    )

}


PageSection.FullWidth = (props:PageSectionProps) =>(
    <div className="w-screen lg:max-w-8xl flex flex-col px-10">
      <div className={`flex flex-col  ${props.theme == "dark"?"bg-backgroundDark text-fontDark":"bg-backgroundLight text-fontLight"}`}>
      <span className="font-sans text-md md:text-lg">
        {props.children}
      </span>
      </div>
    </div>
  )
  
  PageSection.ConstrainedWidth = (props:PageSectionProps) =>(
    <div className="flex  max-w-xs sm:max-w-3xl md:max-w-5xl ">
          <div className="flex  flex-col w-full">
          {props.children}
          </div>
          </div>
  )
  
  PageSection.displayName = 'PageSection';
  
  export default PageSection;