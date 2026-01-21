import { Helmet } from "react-helmet-async";
import campusImg from "../assets/principal.jpg";

const About = () => {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>About Us | Shyamali Global School</title>
        <meta
          name="description"
          content="Learn about Shyamali Global School, our mission, vision, values, and commitment to quality education since 2005."
        />
        <meta
          name="keywords"
          content="Shyamali Global School, About School, Mission Vision, Best School, Quality Education"
        />
      </Helmet>

      <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-yellow-400">Shyamali Global School</span>
          </h1>
          <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
            A place where excellence in education meets values, discipline,
            and holistic student development.
          </p>
        </section>

        {/* INTRO */}
        <section className="bg-blue-900/60 py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-yellow-400">Journey</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Established in 2005, Shyamali Global School has been shaping young
                minds with quality education, modern teaching methods, and a
                nurturing environment. We focus not only on academics but also on
                character building and leadership skills.
              </p>
            </div>

            <div>
              <img
                src={campusImg}
                alt="Shyamali Global School Campus"
                width="600"
                height="400"
                loading="lazy"
                className="rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To provide a supportive and inspiring learning environment that
              encourages academic excellence, creativity, discipline, and
              lifelong learning.
            </p>
          </div>

          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To be a leading educational institution that empowers students
              to become responsible, confident, and successful global citizens.
            </p>
          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-blue-900/60 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why <span className="text-yellow-400">Choose Us</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Experienced Faculty",
                "Smart Classrooms",
                "Safe & Secure Campus",
                "Student-Centric Approach",
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

        {/* PRINCIPAL MESSAGE */}
        <section className="py-20 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Message from <span className="text-yellow-400">Principal</span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            “At Shyamali Global School, we believe every child is unique.
            Our mission is to nurture curiosity, confidence, and character,
            enabling students to excel academically and grow as responsible
            individuals.”
          </p>
        </section>

      </div>
    </>
  );
};

export default About;
