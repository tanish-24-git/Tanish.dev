import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "No-Code ML Platform",
      description: "Drag-and-drop platform for classical ML algorithms including SVM and Linear Regression. Features preprocessing, model evaluation, testing, and AI-powered insights. Currently under development with fine-tuning and deployment capabilities.",
      tech: ["Python", "React", "Scikit-learn", "Machine Learning"],
      github: "https://github.com/tanish-24-git/NoCode.git",
    },
    {
      title: "Data-Gen Platform",
      description: "Synthetic data generation platform that creates realistic datasets via prompts or uploaded data. Outputs data in CSV/JSON formats with full-stack implementation and live deployment.",
      tech: ["Python", "React", "Generative AI", "Full-Stack"],
      github: "https://github.com/tanish-24-git/Data-gen-frontend",
      live: "https://data-gen-frontend.vercel.app",
    },
    {
      title: "Nova – Desktop Automation Agent",
      description: "Agentic framework for comprehensive desktop automation. Converts code to presentations and applies actions directly, competing with Warp AI in automation workflows.",
      tech: ["Python", "AI Agents", "LangChain", "Automation"],
      github: "https://github.com/ParthDhengle/crew-ai-trial.git",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
            <span className="text-teal-500 font-mono mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-[1px] bg-slate-300 dark:bg-slate-700 max-w-md" />
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:dir-rtl' : ''}`}>
                {/* Content */}
                <div className="lg:col-span-7 z-10">
                  <div className={index % 2 === 1 ? 'lg:text-right' : ''}>
                    <p className="text-teal-500 font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl md:text-3xl text-slate-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/90 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                      <p className="text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm font-mono text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                      >
                        <Github size={24} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-video bg-teal-500/10 rounded-lg border-2 border-teal-500/30 flex items-center justify-center">
                    <Folder className="text-teal-500" size={48} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
