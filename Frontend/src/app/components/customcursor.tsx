"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CLICKABLE_SELECTORS =
  "a, button, [role='button'], input, select";

// Less bouncy spring config
const springConfig = { damping: 90, stiffness: 500 };

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect hover on clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(CLICKABLE_SELECTORS)) setHovered(true);
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(CLICKABLE_SELECTORS)) setHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Hide default cursor
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.style.cursor = originalCursor;
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        pointerEvents: "none",
        zIndex: 9999,
        width: hovered ? 32 : 12,
        height: hovered ? 32 : 12,
        borderRadius: "50%",
        background: hovered ? "rgba(99, 102, 241, 0.1)" : "#615fff", // indigo-500
        border: hovered ? "2px solid #615fff" : "none",
        //mixBlendMode: "difference",
        transition: "background 0.2s, border 0.2s",
      }}
      animate={{
        scale: hovered ? 1.5 : 1,
      }}
    />
  );
};

export default CustomCursor;
