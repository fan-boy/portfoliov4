'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After",
  className = "" 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseEnter = () => {
    document.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    document.addEventListener('touchmove', handleTouchMove);
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      className={`relative w-full h-[600px] overflow-hidden cursor-ew-resize ${className}`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* After Image (Right side - base layer) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover object-top"
          priority
        />
        {/* After Label */}
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 border border-gray-200/50">
          <span className="text-[var(--foreground)] text-xs font-light tracking-widest uppercase">
            After
          </span>
        </div>
      </div>

      {/* Before Image (Left side - visible part) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover object-top"
          priority
        />
        {/* Before Label */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 border border-gray-200/50">
          <span className="text-[var(--foreground)] text-xs font-light tracking-widest uppercase">
            Before
          </span>
        </div>
      </div>

      {/* Minimal Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-white/80 z-20 pointer-events-none transition-opacity duration-200"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Minimal Handle - just a small circle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-gray-300 rounded-full shadow-sm pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;