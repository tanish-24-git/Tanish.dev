import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-teal-500 font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <Mail className="text-teal-500 mx-auto mb-3" size={24} />
            <h3 className="text-slate-900 dark:text-white mb-2">Email</h3>
            <a
              href="mailto:tanishjagtap91@gmail.com"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors break-all"
            >
              tanishjagtap91@gmail.com
            </a>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <Phone className="text-teal-500 mx-auto mb-3" size={24} />
            <h3 className="text-slate-900 dark:text-white mb-2">Phone</h3>
            <a
              href="tel:+918055876779"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors"
            >
              +91 8055876779
            </a>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <MapPin className="text-teal-500 mx-auto mb-3" size={24} />
            <h3 className="text-slate-900 dark:text-white mb-2">Location</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pune, India
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            className="bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10 px-8 py-6"
            onClick={() => window.location.href = "mailto:tanishjagtap91@gmail.com"}
          >
            <Send className="mr-2" size={18} />
            Say Hello
          </Button>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-700"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
            Designed & Built by Tanish Jagtap
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
