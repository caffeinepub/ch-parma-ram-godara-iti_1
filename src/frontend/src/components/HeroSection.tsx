import { BookOpen, ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  whatsappUrl: string;
}

export default function HeroSection({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/iti-hero-banner.dim_1200x500.jpg"
          alt="Ch. Parma Ram Godara ITI Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark/90" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute top-24 right-8 w-64 h-64 border border-saffron/20 rounded-full opacity-40 hidden lg:block" />
      <div className="absolute top-32 right-16 w-48 h-48 border border-saffron/15 rounded-full opacity-30 hidden lg:block" />
      <div className="absolute bottom-32 left-8 w-40 h-40 border border-white/10 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/40 text-saffron-light px-4 py-1.5 rounded-full text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          NCVT Affiliated • Electrician Trade • DGT Recognized
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4"
        >
          Ch. Parma Ram
          <br />
          <span className="text-saffron">Godara ITI</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/80 text-lg sm:text-xl lg:text-2xl font-medium mb-10 max-w-3xl mx-auto"
        >
          Certified Electrician Training — 2-Year NCVT Program
          <span className="block text-white/60 text-base sm:text-lg mt-1">
            Nohar, Rajasthan — Building India's Skilled Electricians
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Enquire Now on WhatsApp
          </a>
          <a
            href="#courses"
            className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-5 h-5" />
            View Course Details
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "2 Yrs", label: "Course Duration" },
            { value: "500+", label: "Students Trained" },
            { value: "NCVT", label: "Affiliated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-saffron text-3xl sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors z-10 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
