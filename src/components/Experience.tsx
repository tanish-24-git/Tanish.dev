import { motion } from "motion/react";
import { Trophy, Users } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "Hackathon",
      title: "TechXcelerate @ BITS Hyderabad",
      achievement: "8th Place",
      description: "Competed with innovative AI/ML solutions in a challenging hackathon environment.",
    },
    {
      type: "Hackathon",
      title: "Startathon @ PICT Pune",
      achievement: "4th Place",
      description: "Developed File Sensitivity Prediction Project using advanced ML classification.",
    },
    {
      type: "Leadership",
      title: "Social Executive - AISA",
      achievement: "AI & DS Student Association",
      description: "Leading social initiatives and organizing AI/ML workshops and technical events.",
    },
    {
      type: "Leadership",
      title: "Chief Documentation Head - CyberShield",
      achievement: "CyberShield Club",
      description: "Managing documentation and cybersecurity awareness programs.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            <span className="text-teal-500 font-mono mr-2">04.</span>
            Experience & Achievements
          </h2>
          <div className="h-[1px] bg-slate-300 dark:bg-slate-700 max-w-md" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 rounded-lg">
                  {exp.type === "Hackathon" ? (
                    <Trophy className="text-teal-500" size={24} />
                  ) : (
                    <Users className="text-teal-500" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-teal-500 font-mono mb-1">{exp.type}</p>
                  <h3 className="text-xl text-slate-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {exp.achievement}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
