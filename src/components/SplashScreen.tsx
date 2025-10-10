// src/components/SplashScreen.tsx
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white dark:bg-slate-900 z-[100] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.2,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <h1 
            className="font-bold text-slate-900 dark:text-slate-100 mb-4 leading-none"
            style={{ 
              fontSize: 'clamp(4rem, 15vw, 16rem)',
              lineHeight: '0.9'
            }}
          >
            Tanish
            <span className="text-teal-500">.dev</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            delay: 1,
            duration: 1,
            ease: "easeInOut"
          }}
          className="h-2 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto max-w-2xl rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.5
          }}
          className="text-slate-600 dark:text-slate-400 mt-8 font-mono text-sm md:text-base"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
