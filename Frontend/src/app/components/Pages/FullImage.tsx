import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type FullImageProps = {
    src: StaticImport | string;
    alt: string;
  };
  
  
  
  const FullImage: React.FC<FullImageProps> = ({ src, alt }) => (
    // <div className="w-full mx-12 overflow-hidden my-12">
    //   {/* <div className="relative w-full aspect-3/2 rounded-2xl overflow-hidden shadow-md">
    //     <Image
    //       src={src}
    //       alt={alt}
    //       fill
    //       sizes="100vw"
    //       priority
    //     />
    //   </div> */}
  
    <div className="w-full px-12 flex-shrink-0">
      <div className="md:relative w-full p-20 bg-green-100 overflow-hidden flex justify-center items-center rounded-lg">
        <div className=" ">
  
          <Image
            src={src}
            alt={alt}
            className="w-full rounded-lg"
            priority
  
          />
  
        </div>
      </div>
    </div>
  );
  

  export default FullImage;