import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle max-w-2xl">
          A young, ambitious engineer passionate about building systems that matter.
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 md:p-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="text-foreground/85 leading-relaxed text-lg mb-4">
          I'm <span className="text-primary font-semibold">Jishnu V N</span>, a 19-year-old B.Tech Computer Science Engineering student from Kerala, India. 
          I'm driven by an obsession with how systems work — from low-level embedded architectures to high-level software design.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          My journey spans building real-time operating systems on ESP32 microcontrollers, writing efficient C/C++ code, 
          and exploring the intersection of embedded systems and intelligent software. I don't just want to write code — 
          I want to build companies and products that push technology forward. Every project I undertake is a step toward 
          that long-term vision of becoming a tech founder who solves real-world problems at scale.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["English", "Tamil", "Hindi", "Malayalam", "Kannada", "Telugu"].map((lang) => (
            <span key={lang} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
