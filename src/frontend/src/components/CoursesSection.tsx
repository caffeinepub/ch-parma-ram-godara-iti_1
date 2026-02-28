import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_URL } from "../App";

const COURSE_HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Electrical Wiring & Installation",
    description:
      "Domestic, commercial, and industrial wiring techniques, conduit wiring, surface wiring, and switchboard installation.",
  },
  {
    icon: Wrench,
    title: "Electrical Machines & Motors",
    description:
      "Operation, maintenance, and rewinding of AC/DC motors, transformers, generators, and alternators.",
  },
  {
    icon: BookOpen,
    title: "Electrical Safety & Standards",
    description:
      "IS codes, safety procedures, use of PPE, earthing systems, and protection against electrical hazards.",
  },
];

const SYLLABUS = [
  "Basic Electrical Theory & Ohm's Law",
  "DC & AC Circuits",
  "Electrical Measuring Instruments",
  "Domestic Wiring — Concealed & Open",
  "Industrial Wiring & Panel Boards",
  "Transformers — Single & Three Phase",
  "AC/DC Motors: Operation & Maintenance",
  "Motor Rewinding & Repair",
  "Electrical Safety, Earthing & Grounding",
  "Solar Panel Installation Basics",
  "Energy Meters & Tariff Calculation",
  "Trade Theory & Engineering Drawing",
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-saffron font-semibold text-sm tracking-widest uppercase mb-3">
            Our Trade
          </span>
          <h2 className="font-display font-bold text-navy-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
            Electrician Course
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            NCVT-affiliated 2-year Electrician trade program — designed to make
            you a certified, job-ready electrical professional.
          </p>
        </motion.div>

        {/* Main Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-10"
        >
          {/* Card Header */}
          <div className="bg-navy-dark px-8 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-saffron/20 flex items-center justify-center shrink-0">
                <span className="text-4xl">⚡</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl">
                  Electrician
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  NCVT — National Craft Certificate (NCC)
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:text-right">
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="flex items-center gap-2 text-saffron font-bold text-lg">
                  <Clock className="w-4 h-4" />2 Years
                </div>
                <p className="text-white/55 text-xs mt-0.5">Duration</p>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="text-saffron font-bold text-lg">21 Seats</div>
                <p className="text-white/55 text-xs mt-0.5">Per Batch</p>
              </div>
              <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <div className="text-saffron font-bold text-lg">10th Pass</div>
                <p className="text-white/55 text-xs mt-0.5">Eligibility</p>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="px-8 py-6 border-b border-border">
            <p className="text-foreground/75 leading-relaxed text-base">
              The <strong className="text-navy-dark">Electrician trade</strong>{" "}
              is a 2-year NCVT-affiliated program under the Craftsmen Training
              Scheme (CTS). Students learn electrical wiring, installation,
              testing, maintenance, and repair of electrical equipment and
              circuits. Upon completion, students receive the National Trade
              Certificate (NTC) recognized across India and internationally.
            </p>
          </div>

          {/* Highlights */}
          <div className="px-8 py-6 grid sm:grid-cols-3 gap-6 border-b border-border">
            {COURSE_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-foreground/60 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Syllabus */}
          <div className="px-8 py-6">
            <h4 className="font-display font-bold text-navy-dark text-lg mb-5">
              What You Will Learn
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SYLLABUS.map((topic, i) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-india-green mt-0.5 shrink-0" />
                  <span className="text-foreground/75 text-sm">{topic}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Enquire About Admission
                <ChevronRight className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground text-sm">
                Limited seats — contact us to check availability
              </p>
            </div>
          </div>
        </motion.div>

        {/* Career Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-navy-dark rounded-2xl p-8 text-white text-center"
        >
          <h3 className="font-display font-bold text-xl mb-3">
            Career Opportunities After Completing This Course
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-2xl mx-auto">
            Electrician NTC holders are in high demand across industries,
            government departments, and private sector employers nationwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Electrician (Govt. / Private)",
              "Electrical Contractor",
              "ITI Instructor",
              "DISCOM / Power Grid",
              "Construction & Real Estate",
              "Solar Energy Technician",
              "Self Employment",
              "Further Studies (Apprenticeship / Diploma)",
            ].map((career) => (
              <span
                key={career}
                className="bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-4 py-2 rounded-full"
              >
                {career}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
