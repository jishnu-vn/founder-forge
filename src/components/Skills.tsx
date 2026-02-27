import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Terminal, Zap } from "lucide-react";

const skills = [
  { name: "C / C++", level: 85, icon: Terminal, category: "Languages" },
  { name: "Python", level: 75, icon: Code, category: "Languages" },
  { name: "SQL", level: 70, icon: Database, category: "Languages" },
  { name: "ESP32 / Embedded", level: 80, icon: Cpu, category: "Systems" },
  { name: "RTOS Fundamentals", level: 75, icon: Zap, category: "Systems" },
  { name: "Full Stack Web Dev", level: 60, icon: Globe, category: "Web" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Tools and technologies I work with.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="glass-card glow-border p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <skill.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra skills */}
      <motion.div
        className="mt-8 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {["Prompt Engineering", "Git", "Linux", "Problem Solving", "Team Leadership"].map((s) => (
          <span key={s} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default">
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
