import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SocialSidebar } from "./components/SocialSidebar";
import { SocialSidebarTop } from "./components/SocialSidebarTop";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Custom Cursor */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Header */}
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      {/* Social Sidebars */}
      <SocialSidebar />
      <SocialSidebarTop />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
