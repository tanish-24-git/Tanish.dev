import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialSidebar() {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/tanish-24-git",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tanish-jagtap-b363ab2ba",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:tanishjagtap91@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          whileHover={{ y: -5, color: "#14b8a6" }}
          className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-all"
          aria-label={social.label}
        >
          <social.icon size={24} />
        </motion.a>
      ))}
      <div className="w-[2px] h-24 bg-slate-300 dark:bg-slate-700 mt-4" />
    </motion.div>
  );
}
