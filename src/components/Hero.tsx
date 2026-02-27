import { motion } from "framer-motion";
import profileImage from "@/assets/jishnu-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20" style={{ background: "hsl(195 90% 50%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-15" style={{ background: "hsl(260 60% 60%)" }} />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block glass-card px-4 py-1.5 text-sm text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🚀 Available for Internships & Collaborations
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
            Building the Future with{" "}
            <span className="gradient-text">Code, Embedded Systems,</span>{" "}
            and Intelligence
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Computer Science Engineer · Embedded Systems Developer · Future Tech Founder
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground transition-all duration-300 hover:bg-secondary hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border animate-float">
            <div className="absolute inset-0 rounded-2xl" style={{ background: "var(--gradient-primary)", opacity: 0.1 }} />
            <img
              src={profileImage}
              alt="Jishnu V N"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-2xl border border-border opacity-40" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
