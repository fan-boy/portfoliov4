// FullImage.tsx

import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type FullImageProps = {
  src: StaticImport | string;
  alt: string;
  bg?: boolean;
};

const FullImage: React.FC<FullImageProps> = ({
  src,
  alt,
  bg = true, // Default value set to true
}) => (
  <div className="w-full px-12 ">
    <div
      className={`md:relative w-full  overflow-hidden flex justify-center items-center rounded-lg${
        bg ? " bg-green-100 p-20" : ""
      }`}
    >
      <div>
        <Image src={src} alt={alt} className="w-full rounded-lg" priority />
      </div>
    </div>
  </div>
);

export default FullImage;
