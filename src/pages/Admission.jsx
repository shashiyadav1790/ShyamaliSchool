import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Admission <span className="text-yellow-400">Open</span>
        </h1>
        <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
          Secure your child’s future with quality education, values, and modern learning.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Apply Now
          </Link>
          <a
            href="tel:+911234567890"
            className="border border-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-950 transition"
          >
            Call for Enquiry
          </a>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Admission <span className="text-yellow-400">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Fill Admission Form",
              "Submit Required Documents",
              "Student Interaction / Assessment",
              "Confirmation & Fee Submission",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-blue-950 p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-blue-950 font-bold text-lg">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Eligibility <span className="text-yellow-400">Criteria</span>
        </h2>

        <div className="bg-blue-950 rounded-2xl p-8 shadow-xl text-gray-300 leading-relaxed">
          <ul className="list-disc pl-6 space-y-3">
            <li>Age criteria as per school norms.</li>
            <li>Previous academic records for higher classes.</li>
            <li>Transfer Certificate (TC) for students from other schools.</li>
            <li>Interaction or assessment (if applicable).</li>
          </ul>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Required <span className="text-yellow-400">Documents</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Birth Certificate",
              "Aadhar Card (Student & Parents)",
              "Previous School Report Card",
              "Transfer Certificate",
              "Passport Size Photographs",
              "Address Proof",
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-blue-950 p-6 rounded-xl shadow hover:scale-105 transition"
              >
                ✔ {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why <span className="text-yellow-400">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Experienced & Dedicated Faculty",
            "Modern Smart Classrooms",
            "Safe & Disciplined Environment",
            "Holistic Child Development",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-yellow-400 text-blue-950 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Admissions Open for 2026
        </h2>
        <p className="mb-6">
          Give your child the right start with Shyamali Global School.
        </p>
        <Link
          to="/contact"
          className="bg-blue-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
        >
          Contact Us Now
        </Link>
      </section> */}

    </div>
  );
};

export default Admission;
