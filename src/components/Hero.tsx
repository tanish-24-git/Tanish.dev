// src/components/Hero.tsx
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "figma:asset/53dad4d1d2dd8de6e03978506321632dde708ea8.png";
import resumePDF from "../assets/tanish-resume.pdf";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Tanish_Jagtap_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Diamond shapes - left side */}
        <div className="absolute left-8 md:left-12 top-1/4 space-y-8 md:space-y-12">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-teal-500/30 rotate-45" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-teal-500/20 rotate-45" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-teal-500/30 rotate-45" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-teal-500/20 rotate-45" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-teal-500/30 rotate-45" />
        </div>

        {/* Circle - right side */}
        <div className="absolute right-16 md:right-24 top-1/3 w-24 h-24 md:w-32 md:h-32 border-2 border-teal-500/20 rounded-full" />

        {/* Background Text - Subtle and Clean */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 10vw, 14rem)',
            lineHeight: '0.9',
            color: '#14b8a6',
            opacity: '0.025',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '5%',
            right: '-3%',
            transform: 'rotate(-8deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          MACHINE LEARNING
        </div>

        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 10vw, 14rem)',
            lineHeight: '0.9',
            color: '#06b6d4',
            opacity: '0.025',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '32%',
            left: '-3%',
            transform: 'rotate(-8deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          FULL STACK
        </div>

        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 10vw, 14rem)',
            lineHeight: '0.9',
            color: '#14b8a6',
            opacity: '0.025',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            bottom: '8%',
            left: '-3%',
            transform: 'rotate(-8deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          AI ENGINEER
        </div>

      </div>

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content - Optimized Text Sizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative z-20"
        >
          {/* Hi my name is - Small intro text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-teal-500 font-mono text-base md:text-lg"
          >
            Hi, my name is
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* Main heading - Bold and prominent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100 font-black leading-tight tracking-tight">
              Tanish Jagtap
            </h1>
            
            {/* Subheading - Slightly smaller but still prominent */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-600 dark:text-slate-400 leading-tight font-semibold">
              I build intelligent systems.
            </h2>
          </motion.div>

          {/* Description paragraph - Comfortable reading size */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-normal"
          >
            I'm an AI & Data Science student specializing in Machine Learning, Deep Learning, 
            LLMs, and Generative AI. Currently focused on building scalable, intelligent 
            systems that combine cutting-edge research with practical engineering.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 group px-6 py-3 text-base"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 px-6 py-3 text-base"
            >
              <Download className="mr-2" size={18} />
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative flex justify-center lg:justify-end z-20"
        >
          <div className="relative w-80 h-80 group">
            {/* Accent border */}
            <div className="absolute inset-0 border-4 border-teal-500 rounded-lg translate-x-6 translate-y-6 z-0" />
            
            {/* Image container */}
            <div className="relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden z-10 cursor-pointer">
              <img
                src={profileImg}
                alt="Tanish Jagtap"
                className="w-full h-full object-cover group-hover:grayscale transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
