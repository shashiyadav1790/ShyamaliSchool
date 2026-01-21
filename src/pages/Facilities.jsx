const Facilities = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Our <span className="text-yellow-400">Facilities</span>
        </h1>
        <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
          World-class infrastructure designed to support academic excellence,
          safety, and holistic development.
        </p>
      </section>

      {/* FACILITIES GRID */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Campus <span className="text-yellow-400">Infrastructure</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Smart Classrooms",
                desc: "Digitally equipped classrooms with smart boards and audio-visual learning tools.",
                icon: "📚",
              },
              {
                title: "Science Laboratories",
                desc: "Fully equipped Physics, Chemistry & Biology labs for practical learning.",
                icon: "🧪",
              },
              {
                title: "Computer Lab",
                desc: "High-speed internet and modern systems for digital education.",
                icon: "💻",
              },
              {
                title: "Library",
                desc: "Rich collection of academic, reference, and story books.",
                icon: "📖",
              },
              {
                title: "Sports Facilities",
                desc: "Indoor & outdoor sports for physical fitness and teamwork.",
                icon: "⚽",
              },
              {
                title: "Playground",
                desc: "Safe and spacious playground for overall development.",
                icon: "🏀",
              },
              {
                title: "Transportation",
                desc: "GPS-enabled buses ensuring safe and reliable transportation.",
                icon: "🚌",
              },
              {
                title: "Medical Room",
                desc: "First-aid and emergency care facilities available on campus.",
                icon: "🏥",
              },
              {
                title: "Security & CCTV",
                desc: "24×7 CCTV surveillance for complete campus safety.",
                icon: "🔒",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SAFETY & QUALITY */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Safety & <span className="text-yellow-400">Quality Assurance</span>
        </h2>

        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          At Shyamali Global School, safety and quality are our top priorities.
          Our campus is designed to provide a secure, hygienic, and student-friendly
          environment where learning thrives without compromise.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 text-blue-950 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Experience Our World-Class Facilities
        </h2>
        <p className="mb-6">
          Visit our campus or contact us to know more about our infrastructure.
        </p>
        <a
          href="/contact"
          className="bg-blue-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
        >
          Book a Campus Visit
        </a>
      </section>

    </div>
  );
};

export default Facilities;
