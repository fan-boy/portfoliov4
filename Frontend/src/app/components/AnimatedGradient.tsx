// components/AnimatedBackground.tsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  // Correct transformer signature for useTransform with multiple inputs
  const background = useTransform(
    [springX, springY],
    (input: number[]) =>
      `radial-gradient(ellipse at ${input[0] * 100}% ${input[1] * 100}%, #e0e7ff 0%, #f1f5f9 100%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        background,
        transition: "background 0.3s",
      }}
      aria-hidden
    />
  );
};

export default AnimatedBackground;
