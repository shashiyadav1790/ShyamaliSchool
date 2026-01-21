import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* SEO */}
      <Helmet>
        <title>Contact Us | Shyamali Global School</title>
        <meta
          name="description"
          content="Contact Shyamali Global School for admissions, campus visit, or general enquiries. Call, WhatsApp, or visit us."
        />
      </Helmet>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
          We are here to help you. Reach out for admissions, queries, or campus visits.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="bg-blue-950 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition transform">
            <div className="text-yellow-400 text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 mb-4">Speak directly with our office</p>
            <a
              href="tel:+911234567890"
              className="text-yellow-400 font-semibold"
            >
              +91 12345 67890
            </a>
          </div>

          {/* Email */}
          <div className="bg-blue-950 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition transform">
            <div className="text-yellow-400 text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 mb-4">Send us your queries anytime</p>
            <a
              href="mailto:info@shyamaliglobal.edu.in"
              className="text-yellow-400 font-semibold"
            >
              info@shyamaliglobal.edu.in
            </a>
          </div>

          {/* Location */}
          <div className="bg-blue-950 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition transform">
            <div className="text-yellow-400 text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300">
              123 Main Road,<br />
              City, State – 123456
            </p>
          </div>

        </div>
      </section>

      {/* MAP */}
     {/* MAP */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Shyamali Global School Location"
              src="https://www.google.com/maps?q=Barhi,+Jharkhand,+India&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </section>


      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Admissions Open for 2025–26
        </h2>
        <p className="text-gray-300 mb-6">
          Contact us today to secure your child’s future.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            WhatsApp Us
          </a>
          <a
            href="tel:+911234567890"
            className="bg-yellow-400 text-blue-950 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Call Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;
