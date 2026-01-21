import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300">

      {/* TOP INFO STRIP */}
      <div className="bg-blue-900 text-white py-5">
        <div className="max-w-7xl mx-auto px-6 text-center md:flex md:justify-between md:text-left gap-4">
          <p className="text-lg font-semibold">
            🎓 Admissions Open 2025–26
          </p>
          <p className="text-sm opacity-90">
            Empowering students with knowledge, values & confidence
          </p>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* SCHOOL INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Shyamali Global School
          </h2>
          <p className="text-sm leading-relaxed">
            A trusted educational institution since 2005, dedicated to
            academic excellence, character building, and holistic development
            of students.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Academics", "/academics"],
              ["Admission", "/admission"],
              ["Facilities", "/facilities"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <p className="text-sm leading-7">
            📍 123 Main Street, City, State <br />
            📞 +91 12345 67890 <br />
            ✉️ info@shyamaliglobal.edu.in
          </p>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-white/5 backdrop-blur rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Visit Our Campus
          </h3>
          <p className="text-sm mb-5">
            Discover a nurturing environment where learning meets excellence.
          </p>
          <Link
            to="/admission"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Apply for Admission
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Shyamali Global School. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
