import { motion } from "motion/react";

const GALLERY_ITEMS = [
  {
    label: "Main Campus",
    sublabel: "Institute Building",
    color: "from-navy-dark to-navy",
    textColor: "text-white",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Workshop",
    sublabel: "Practical Training",
    color: "from-saffron to-amber-600",
    textColor: "text-white",
    span: "",
  },
  {
    label: "Computer Lab",
    sublabel: "COPA Training",
    color: "from-india-green to-emerald-700",
    textColor: "text-white",
    span: "",
  },
  {
    label: "Students",
    sublabel: "Classroom Activity",
    color: "from-slate-600 to-slate-800",
    textColor: "text-white",
    span: "",
  },
  {
    label: "Events",
    sublabel: "Annual Function",
    color: "from-purple-700 to-indigo-800",
    textColor: "text-white",
    span: "",
  },
  {
    label: "Welding Shop",
    sublabel: "Hands-on Training",
    color: "from-orange-700 to-red-800",
    textColor: "text-white",
    span: "",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
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
            Campus Life
          </span>
          <h2 className="font-display font-bold text-navy-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into life at Ch. Parma Ram Godara ITI — our campus,
            workshops, and student activities.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} ${item.span} group cursor-pointer`}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full" />
              </div>

              {/* Label overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 group-hover:bg-black/20 transition-colors">
                <h3
                  className={`font-display font-bold text-lg sm:text-xl text-center ${item.textColor} drop-shadow-md`}
                >
                  {item.label}
                </h3>
                <p className={`text-sm ${item.textColor} opacity-80 mt-1`}>
                  {item.sublabel}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Visit our campus in Nohar, Rajasthan to experience the facilities
          firsthand.
        </motion.p>
      </div>
    </section>
  );
}
