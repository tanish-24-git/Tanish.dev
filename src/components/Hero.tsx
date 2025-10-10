import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "figma:asset/53dad4d1d2dd8de6e03978506321632dde708ea8.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
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
            <h1 className="text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-4">
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
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 group">
            {/* Accent border */}
            <div className="absolute inset-0 border-4 border-teal-500 rounded-lg translate-x-6 translate-y-6 z-0" />
            
            {/* Image container */}
            <div className="relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden z-10">
              <img
                src={profileImg}
                alt="Tanish Jagtap"
                className="w-full h-full object-cover group-hover:grayscale transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
