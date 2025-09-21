import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type UnifiedMediaProps = {
  src: StaticImport | string;
  alt: string;
  type?: "image" | "video";
  bg?: boolean;
  gradient?: string;
  padding?: string;
  containerPadding?: string;
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
  imageProps?: Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height" | "priority" | "className">;
  imgWidth?: number; // required for Image
  imgHeight?: number; // required for Image
};

const defaultGradient =
  "radial-gradient(circle at 50% 35%, #fff 0%, #f3f5fc 40%, #f9f2fb 80%, #eefbf7 100%)";

const UnifiedMedia: React.FC<UnifiedMediaProps> = ({
  src,
  alt,
  type,
  bg = true,
  gradient,
  padding = "p-4",
  containerPadding = "",
  videoProps = {},
  imageProps = {},
  imgWidth = 800,
  imgHeight = 600,
}) => {
  // Auto-detect type by extension if not explicitly set
  const isVideo =
    type === "video" ||
    (typeof src === "string" &&
      (src.endsWith(".mp4") ||
        src.endsWith(".webm") ||
        src.endsWith(".mov") ||
        src.endsWith(".avi")));

  return (
    <div className={`w-full flex-shrink-0 ${containerPadding}`}>
      <div
        className={[
          "md:relative w-full overflow-hidden flex justify-center items-center rounded-lg",
          bg ? "" : "",
        ].join(" ")}
        style={{
          background: bg ? (gradient || defaultGradient) : undefined,
          padding: bg ? "3.5rem" : undefined,
        }}
      >
        {isVideo ? (
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
            width={imgWidth}
            height={imgHeight}
            priority
            className="w-full rounded-lg"
            style={{ width: '100%', height: 'auto' }}
            {...imageProps}
          />
        )}
      </div>
    </div>
  );
};

export default UnifiedMedia;
