'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HERO_BLOBS = [
  { left: "10vw", top: "-8vw", width: "22vw", height: "22vw", opacity: 0.55, filter: "blur(46px)" },
  { left: "33vw", top: "-12vw", width: "30vw", height: "22vw", opacity: 0.59, filter: "blur(48px)" },
  { left: "58vw", top: "-6vw", width: "26vw", height: "24vw", opacity: 0.58, filter: "blur(36px)" }
];

const COLORS = [
  "radial-gradient(circle at 35% 35%, #ffb7e5 10%, #ff6b9d 90%)",
  "radial-gradient(circle at 70% 20%, #8de9fc 30%, #00b4d8 100%)",
  "radial-gradient(circle at 40% 80%, #f9fcb7 0%, #cafcb7 90%)"
];

// Helper for smooth return, only when loading becomes false.
const transition = {
  type: "spring",
  stiffness: 38,
  damping: 18,
  mass: 1.4
};

export default function AnimatedBlobs({
  expanded,
  loading
}: {
  expanded: boolean;
  loading: boolean;
}) {
  const [shouldSnapToBase, setSnapToBase] = useState(false);

  // Detect transition from loading -> not loading, so we can play return-to-base animation.
  useEffect(() => {
    if (!loading) {
      setSnapToBase(true);
      // After 1s, go back to normal base mode (no further animation)
      const timer = setTimeout(() => setSnapToBase(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const containerClass = expanded
    ? "fixed inset-0 z-50 pointer-events-none"
    : "absolute inset-0 z-0 pointer-events-none";

  return (
    <div className={containerClass}
      style={{
        height: expanded ? "100vh" : "32vw",
        minHeight: expanded ? "100vh" : 220,
        maxHeight: expanded ? "100vh" : 360,
      }}
    >
      {COLORS.map((color, i) => {
        // For loading: infinite keyframes. On "not loading transition", motion.div animates home.
        if (loading && !shouldSnapToBase) {
          return (
            <div
              key={i}
              className={`absolute z-0 blob-float${i+1} rounded-[44%_60%_64%_48%/66%_49%_70%_45%]`}
              style={{
                background: color,
                mixBlendMode: "lighten",
                opacity: HERO_BLOBS[i].opacity,
                width: HERO_BLOBS[i].width,
                height: HERO_BLOBS[i].height,
                // widths etc will be continuously transformed by keyframes!
                filter: HERO_BLOBS[i].filter
              }}
            />
          );
        }
        // If we just stopped loading, smoothly animate home.
        if (shouldSnapToBase) {
          return (
            <motion.div
              key={i}
              className="absolute z-0 rounded-[44%_60%_64%_48%/66%_49%_70%_45%]"
              initial={false}
              animate={HERO_BLOBS[i]}
              transition={transition}
              style={{
                background: color,
                opacity: HERO_BLOBS[i].opacity,
                filter: HERO_BLOBS[i].filter,
                mixBlendMode: "lighten"
              }}
            />
          );
        }
        // Normal hero state: just render at hero position.
        return (
          <div
            key={i}
            className="absolute z-0 rounded-[44%_60%_64%_48%/66%_49%_70%_45%]"
            style={{
              background: color,
              left: HERO_BLOBS[i].left,
              top: HERO_BLOBS[i].top,
              width: HERO_BLOBS[i].width,
              height: HERO_BLOBS[i].height,
              opacity: HERO_BLOBS[i].opacity,
              filter: HERO_BLOBS[i].filter,
              mixBlendMode: "lighten"
            }}
          />
        );
      })}
    </div>
  );
}
