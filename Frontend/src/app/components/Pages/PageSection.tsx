import React from "react";

export type theme = "light" | "dark";

interface PageSectionProps {
  children: React.ReactNode;
  theme?: theme;
}

const PageSection = (props: PageSectionProps) => {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <div
        className={`flex flex-col items-center ${
          props.theme === "dark"
            ? "bg-foreground text-background"
            : "bg-background text-foreground"
        }`}
      >
        {props.children}
      </div>
    </main>
  );
};

const FullWidth = (props: PageSectionProps) => (
  <div className="w-screen lg:max-w-8xl flex flex-col px-10">
    <div
      className={`flex flex-col ${
        props.theme === "dark"
          ? "bg-backgroundDark text-fontDark"
          : "bg-backgroundLight text-fontLight"
      }`}
    >
      <span className="font-sans text-md md:text-lg">{props.children}</span>
    </div>
  </div>
);
FullWidth.displayName = "PageSection.FullWidth";

const ConstrainedWidth = (props: PageSectionProps) => (
  <div className="flex min-w-xs max-w-xs sm:max-w-3xl sm:min-w-3xl md:max-w-5xl md:min-w-5xl">
    <div className="flex flex-col w-full">{props.children}</div>
  </div>
);
ConstrainedWidth.displayName = "PageSection.ConstrainedWidth";

PageSection.FullWidth = FullWidth;
PageSection.ConstrainedWidth = ConstrainedWidth;
PageSection.displayName = "PageSection";

export default PageSection;
