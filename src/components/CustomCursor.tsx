import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
          className="w-2 h-2 bg-teal-500 rounded-full"
        />
      </motion.div>

      {/* Developer text following cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.2 : 1,
            rotate: isHovering ? 5 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="text-teal-500 font-mono text-sm px-3 py-1 bg-slate-900/50 dark:bg-slate-100/10 backdrop-blur-sm rounded border border-teal-500/30"
          style={{
            transform: "translate(20px, 20px)",
          }}
        >
          &lt;Developer /&gt;
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
          }}
          className="w-8 h-8 border-2 border-teal-500/30 rounded-full"
        />
      </motion.div>
    </>
  );
}
