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
      {/* Background Text Filling Entire Homepage - No Blank Space */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Row 1 - Top */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(7rem, 18vw, 24rem)',
            lineHeight: '0.85',
            color: '#64748b',
            opacity: '0.06',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '-8%',
            left: '-5%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          FULLSTACK DEVELOPER
        </div>

        {/* Row 2 - Upper middle */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(6rem, 16vw, 22rem)',
            lineHeight: '0.85',
            color: '#14b8a6',
            opacity: '0.05',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '15%',
            right: '-8%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          MACHINE LEARNING
        </div>

        {/* Row 3 - Center */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(7rem, 17vw, 23rem)',
            lineHeight: '0.85',
            color: '#06b6d4',
            opacity: '0.055',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '38%',
            left: '-6%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          AI ENGINEER SYSTEMS
        </div>

        {/* Row 4 - Lower middle */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(6rem, 15vw, 21rem)',
            lineHeight: '0.85',
            color: '#475569',
            opacity: '0.06',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '58%',
            right: '-10%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          DEEP LEARNING DATA
        </div>

        {/* Row 5 - Bottom */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(7rem, 18vw, 24rem)',
            lineHeight: '0.85',
            color: '#14b8a6',
            opacity: '0.05',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            bottom: '-8%',
            left: '-4%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          NEURAL NETWORKS AI
        </div>

        {/* Row 6 - Extra coverage top right */}
        <div 
          className="absolute font-black tracking-tight"
          style={{
            fontSize: 'clamp(5rem, 14vw, 19rem)',
            lineHeight: '0.85',
            color: '#64748b',
            opacity: '0.045',
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontWeight: '900',
            top: '78%',
            left: '20%',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          PYTHON REACT NODE
        </div>

      </div>

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative z-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-teal-500 font-mono"
          >
            Hi, my name is
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-4 font-black">
              Tanish Jagtap
            </h1>
            <h2 className="text-3xl md:text-5xl text-slate-600 dark:text-slate-400">
              I build intelligent systems.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
          >
            I'm an AI & Data Science student specializing in Machine Learning, Deep Learning, 
            LLMs, and Generative AI. Currently focused on building scalable, intelligent 
            systems that combine cutting-edge research with practical engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10"
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