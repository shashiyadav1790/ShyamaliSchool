import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admission", path: "/admission" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* TOP STRIP (Trust Layer) */}
      <div className="hidden md:block bg-blue-950 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>📞 +91 12345 67890</span>
          <span>✉️ info@shyamaliglobal.edu.in</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* LOGO BLOCK */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-blue-950 tracking-wide">
                Shyamali
              </span>
              <span className="text-sm font-medium tracking-widest text-gray-500">
                GLOBAL SCHOOL
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-10">
              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm uppercase tracking-wide font-semibold
                    ${
                      isActive
                        ? "text-blue-900 after:w-full"
                        : "text-gray-700 hover:text-blue-900 after:w-0 hover:after:w-full"
                    }
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[2px] after:bg-blue-900 after:transition-all`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/admission"
              className="hidden lg:inline-block bg-blue-900 text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>

            {/* MOBILE BUTTON */}
                    <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >

              <svg
                className="w-7 h-7 text-blue-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU (PREMIUM CARD) */}
      {open && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="px-6 py-6 space-y-4">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg text-sm font-medium
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/admission"
              onClick={() => setOpen(false)}
              className="block text-center bg-blue-900 text-white py-3 rounded-xl font-semibold mt-4"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
