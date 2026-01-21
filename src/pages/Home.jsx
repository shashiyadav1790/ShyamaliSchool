import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-yellow-400">Shyamali Global School</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg">
            Empowering young minds with quality education, innovation,
            discipline, and values for a brighter future.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/admission"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Apply Now
            </Link>

            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format"
            alt="Shyamali Global School campus"
            width="600"
            height="450"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-blue-900/60 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-yellow-400">Quality Education</h3>
            <p className="text-gray-300 mt-3">
              Well-structured curriculum with experienced and dedicated teachers.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-yellow-400">Modern Facilities</h3>
            <p className="text-gray-300 mt-3">
              Smart classrooms, science labs, library, and sports infrastructure.
            </p>
          </div>

          <div className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-yellow-400">Holistic Growth</h3>
            <p className="text-gray-300 mt-3">
              Focus on academics, sports, arts, discipline, and leadership.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose <span className="text-yellow-400">Us?</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Since 2005, Shyamali Global School has been committed to providing
          a nurturing environment where students grow academically,
          socially, and morally.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-900/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-bold text-yellow-400">What Parents Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <p className="text-gray-300">
                "Shyamali Global School has transformed our child's confidence and
                love for learning. Excellent faculty and supportive environment!"
              </p>
              <h4 className="mt-4 text-yellow-400 font-semibold">- Ritu Sharma</h4>
            </div>

            <div className="bg-blue-950 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <p className="text-gray-300">
                "The facilities and extra-curricular activities here are amazing.
                Highly recommend this school for holistic development."
              </p>
              <h4 className="mt-4 text-yellow-400 font-semibold">- Amit Verma</h4>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default Home;
