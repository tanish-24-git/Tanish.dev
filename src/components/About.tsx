import { motion } from "motion/react";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            <span className="text-teal-500 font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-slate-300 dark:bg-slate-700 max-w-md" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4 text-slate-600 dark:text-slate-400"
          >
            <p>
              Hello! I'm Tanish, a passionate AI & Data Science student from Pune, India. 
              My journey in technology started with a curiosity about how machines can learn 
              and make decisions, which led me to dive deep into the world of artificial intelligence.
            </p>
            <p>
              I specialize in building intelligent systems using Machine Learning, Deep Learning, 
              and cutting-edge technologies like Large Language Models and Generative AI. My focus 
              is on creating practical solutions that bridge the gap between research and real-world applications.
            </p>
            <p>
              Currently pursuing my B.Tech in AI & Data Science at AISSMS IOIT, I'm actively involved 
              in various projects ranging from no-code ML platforms to desktop automation agents. 
              I also contribute to my college community through leadership roles in technical clubs.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-teal-500" size={20} />
                <h3 className="text-slate-900 dark:text-white">Education</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                B.Tech AI & Data Science<br />
                AISSMS IOIT (2023-2027)
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-teal-500" size={20} />
                <h3 className="text-slate-900 dark:text-white">Location</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pune, India
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-teal-500" size={20} />
                <h3 className="text-slate-900 dark:text-white">Status</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
