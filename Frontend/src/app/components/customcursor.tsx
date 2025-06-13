// components/CustomCursor.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";

const CLICKABLE_SELECTORS =
  "a, button, [role='button'], input, select";

const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const pathname = usePathname();

  useEffect(() => {
    setHovered(false); // Reset hover state on route change
  }, [pathname]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(CLICKABLE_SELECTORS)) setHovered(true);
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest(CLICKABLE_SELECTORS)) setHovered(false);
    };

    const handleMouseLeaveWindow = () => {
      setVisible(false);
      mouseX.set(-100);
      mouseY.set(-100);
    };
    const handleMouseEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    window.addEventListener("mouseleave", handleMouseLeaveWindow);
    window.addEventListener("mouseenter", handleMouseEnterWindow);

    // Hide default cursor
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
      window.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.body.style.cursor = originalCursor;
    };
  }, [mouseX, mouseY]);

  const size = hovered ? 32 : 12;
  const offset = size / 2;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        background: hovered ? "rgba(99, 102, 241, 0.1)" : "#615fff",
        border: hovered ? "2px solid #615fff" : "none",
        pointerEvents: "none",
        zIndex: 9999,
        x: mouseX,
        y: mouseY,
        translateX: -offset,
        translateY: -offset,
        opacity: visible ? 1 : 0,
        transition: "background 0.2s, border 0.2s, width 0.2s, height 0.2s, opacity 0.15s",
      }}
      animate={{
        scale: hovered ? 1.5 : 1,
      }}
    />
  );
};

export default CustomCursor;
