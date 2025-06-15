import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type FullMediaProps = (
  | { 
      type?: "image"; 
      src: StaticImport | string;
      alt: string;
      bg?: boolean;
      padding?: string;
      containerPadding?: string;
      videoProps?: never;
    }
  | { 
      type: "video"; 
      src: string;
      alt: string;
      bg?: boolean;
      padding?: string;
      containerPadding?: string;
      videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
    }
);

const FullMedia: React.FC<FullMediaProps> = ({
  src,
  alt,
  bg = true,
  type,
  padding = "p-4",
  containerPadding = "",
  videoProps = {}
}) => {
  // Auto-detect type if not provided
  const mediaType = type || (typeof src === 'string' && 
    (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov') || src.endsWith('.avi')) 
    ? 'video' : 'image');

  return (
    <div className={`w-full flex-shrink-0 ${containerPadding}`}>
      <div
        className={`md:relative w-full overflow-hidden flex justify-center items-center rounded-lg${
          bg ? ` bg-green-100 ${padding}` : ""
        }`}
      >
        {mediaType === "video" ? (
          <video
            src={src as string}
            className="w-full rounded-lg"
            controls
            preload="metadata"
            {...videoProps}
          >
            {alt}
          </video>
        ) : (
          <Image 
            src={src} 
            alt={alt} 
            className="w-full rounded-lg" 
            priority
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
};

export default FullMedia;