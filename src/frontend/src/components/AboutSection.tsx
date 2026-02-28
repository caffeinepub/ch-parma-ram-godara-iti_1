import { Award, BookOpen, Eye, MapPin, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  {
    icon: BookOpen,
    value: "2 Yrs",
    label: "Electrician Course",
    color: "bg-saffron/10 text-saffron",
  },
  {
    icon: Users,
    value: "500+",
    label: "Students Trained",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Award,
    value: "NCVT",
    label: "Affiliated",
    color: "bg-india-green/10 text-india-green",
  },
  {
    icon: MapPin,
    value: "Nohar",
    label: "Hanumangarh, Rajasthan",
    color: "bg-saffron/10 text-saffron",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
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
            Who We Are
          </span>
          <h2 className="font-display font-bold text-navy-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
            About Our Institute
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              <strong className="text-navy-dark font-display">
                Ch. Parma Ram Godara ITI
              </strong>{" "}
              is a premier Industrial Training Institute located in{" "}
              <strong>Nohar, Hanumangarh District, Rajasthan</strong>,
              specializing exclusively in the <strong>Electrician trade</strong>
              . Established with a vision to produce skilled electrical
              professionals, our institute has been empowering the youth of the
              region with hands-on electrical expertise.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Affiliated with the{" "}
              <strong>National Council of Vocational Training (NCVT)</strong>{" "}
              under the Directorate General of Training (DGT), Ministry of Skill
              Development &amp; Entrepreneurship, Government of India, our
              Electrician program awards an industry-recognized{" "}
              <strong>National Trade Certificate (NTC)</strong> that opens doors
              to employment across India and abroad.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our fully-equipped electrical workshop, experienced instructors,
              and practical curriculum ensure that every student masters real
              trade skills — from wiring and installations to motor maintenance
              and safety standards.
            </p>

            {/* Location Badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-navy font-medium bg-navy/5 border border-navy/15 rounded-lg px-4 py-3 w-fit">
              <MapPin className="w-4 h-4 text-saffron" />
              Ch. Parma Ram Godara ITI, Nohar, Hanumangarh District, Rajasthan
            </div>
          </motion.div>

          {/* Stats + Vision/Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="bg-white border border-border rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-bold text-navy-dark text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vision */}
            <div className="bg-navy-dark rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-saffron/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-saffron" />
                </div>
                <h3 className="font-display font-bold text-lg">Our Vision</h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                To be the leading Electrician training institute in Rajasthan,
                producing certified, skilled electrical professionals who excel
                in industry and contribute to India's electrification goals.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-saffron/10 border border-saffron/25 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-saffron/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-saffron" />
                </div>
                <h3 className="font-display font-bold text-navy-dark text-lg">
                  Our Mission
                </h3>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                To deliver quality, affordable Electrician training that builds
                deep technical competence, fosters entrepreneurship, and
                produces self-reliant electrical professionals who power
                Aatmanirbhar Bharat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
