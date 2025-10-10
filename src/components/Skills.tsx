import { motion } from "motion/react";
import { Code2, Database, Cloud, Brain, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C++", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: ["React", "Flutter", "TensorFlow", "PyTorch"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["Docker", "AWS", "Git", "MLOps"],
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: ["LLMs", "RAG", "Fine-tuning", "Computer Vision", "NLP"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            <span className="text-teal-500 font-mono mr-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="h-[1px] bg-slate-300 dark:bg-slate-700 max-w-md" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-teal-500" size={24} />
                <h3 className="text-xl text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-600 dark:text-slate-400 flex items-center gap-2"
                  >
                    <span className="text-teal-500">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
