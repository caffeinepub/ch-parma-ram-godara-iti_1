import {
  BookOpen,
  GraduationCap,
  Home,
  Monitor,
  Trophy,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const FACILITIES = [
  {
    icon: Wrench,
    title: "Electrical Workshop",
    description:
      "Fully equipped electrical workshop with wiring panels, switchboards, motors, transformers, and industry-standard tools for hands-on training.",
    color: "from-saffron/20 to-saffron/5",
    iconBg: "bg-saffron/15 text-saffron",
  },
  {
    icon: Monitor,
    title: "Theory Classroom",
    description:
      "Well-equipped classrooms with visual aids, trade charts, and projectors for trade theory, engineering drawing, and safety training.",
    color: "from-navy/15 to-navy/5",
    iconBg: "bg-navy/10 text-navy",
  },
  {
    icon: BookOpen,
    title: "Technical Library",
    description:
      "Well-stocked library with electrical engineering books, NCVT trade manuals, IS codes, and reference materials for Electrician trade.",
    color: "from-india-green/15 to-india-green/5",
    iconBg: "bg-india-green/10 text-india-green",
  },
  {
    icon: Home,
    title: "Hostel Facility",
    description:
      "Safe and affordable hostel accommodation available for outstation students with basic amenities.",
    color: "from-saffron/20 to-saffron/5",
    iconBg: "bg-saffron/15 text-saffron",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Qualified and industry-experienced Electrician instructors dedicated to providing the best practical and theoretical training.",
    color: "from-navy/15 to-navy/5",
    iconBg: "bg-navy/10 text-navy",
  },
  {
    icon: Trophy,
    title: "Sports & Recreation",
    description:
      "Dedicated sports facilities to ensure overall development and physical well-being of students.",
    color: "from-india-green/15 to-india-green/5",
    iconBg: "bg-india-green/10 text-india-green",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="section-padding bg-navy-dark">
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
            Infrastructure
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            World-Class Facilities
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Our campus is equipped with everything needed for a complete
            educational experience.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${facility.color} border border-white/10 rounded-xl p-6 hover:border-saffron/30 transition-all duration-300 group`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${facility.iconBg} group-hover:scale-110 transition-transform`}
              >
                <facility.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {facility.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative band */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 h-1 india-stripe rounded-full"
        />
      </div>
    </section>
  );
}
