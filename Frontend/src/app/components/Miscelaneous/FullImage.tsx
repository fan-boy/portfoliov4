import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type FullImageProps = {
  src: StaticImport | string;
  alt: string;
  bg?: boolean;           // If true, show background
  gradient?: string;      // If set and bg=true, use this as bg gradient
};

const defaultGradient =
  "radial-gradient(circle at 50% 35%, #fff 0%, #f3f5fc 40%, #f9f2fb 80%, #eefbf7 100%)";

const FullImage: React.FC<FullImageProps> = ({
  src,
  alt,
  bg = true,
  gradient,
}) => (
  <div className="w-full px-12">
    <div
      className={`md:relative w-full overflow-hidden flex justify-center items-center rounded-lg${bg ? "" : ""}`}
      style={{
        background: bg ? (gradient || defaultGradient) : undefined,
        padding: bg ? "3.5rem" : undefined, // Equivalent to p-20 if bg, none otherwise
      }}
    >
      <Image src={src} alt={alt} className="w-full rounded-lg" priority />
    </div>
  </div>
);

export default FullImage;
