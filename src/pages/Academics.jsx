import g4 from "../assets/gallery4.jpg";
const Academics = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Academic <span className="text-yellow-400">Excellence</span>
        </h1>
        <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
          A well-structured curriculum designed to inspire learning,
          innovation, and academic success.
        </p>
      </section>

      {/* CURRICULUM */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-yellow-400">Curriculum</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Shyamali Global School follows a balanced curriculum that
              integrates academics, creativity, physical education, and
              value-based learning. Our programs focus on conceptual clarity,
              critical thinking, and real-world application.
            </p>
          </div>

          <div>
            <img
              src={g4} // ✅ WebP recommended for performance
              alt="Classroom Learning at Shyamali Global School"
              loading="lazy" // ✅ lazy load
              width="600"   // ✅ fixes CLS
              height="400"  // ✅ fixes CLS
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* CLASSES STRUCTURE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Classes <span className="text-yellow-400">We Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Pre-Primary",
              desc: "Play-based learning focusing on creativity, communication, and early development.",
            },
            {
              title: "Primary School",
              desc: "Strong foundation in language, mathematics, science, and moral values.",
            },
            {
              title: "Middle School",
              desc: "Conceptual learning with emphasis on analytical thinking and subject depth.",
            },
            {
              title: "Secondary School",
              desc: "Board-oriented curriculum preparing students for academic excellence.",
            },
            {
              title: "Science Stream",
              desc: "Physics, Chemistry, Biology & Mathematics with practical exposure.",
            },
            {
              title: "Commerce Stream",
              desc: "Accounts, Business Studies & Economics with career-focused approach.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* TEACHING METHODOLOGY */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Teaching <span className="text-yellow-400">Methodology</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Interactive Smart Classes",
              "Practical & Activity-Based Learning",
              "Regular Assessments",
              "Personal Attention to Students",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-950 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC HIGHLIGHTS */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Academic <span className="text-yellow-400">Highlights</span>
        </h2>
        <ul className="text-gray-300 max-w-4xl mx-auto leading-relaxed list-disc list-inside">
          <li>Highly qualified and experienced faculty</li>
          <li>Regular parent-teacher interaction</li>
          <li>Olympiads, competitions, and co-curricular activities</li>
          <li>Focus on discipline, ethics, and leadership</li>
        </ul>
      </section>

    </div>
  );
};

export default Academics;
