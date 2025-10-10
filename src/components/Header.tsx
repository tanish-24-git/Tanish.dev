import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          <span className="text-teal-500">Tanish</span>
          <span className="text-slate-900 dark:text-white">.dev</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
