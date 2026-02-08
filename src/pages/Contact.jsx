import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiryFor: "",
    classApplying: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.enquiryFor) {
      newErrors.enquiryFor = "Please select enquiry type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowPopup(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      enquiryFor: "",
      classApplying: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We are here to help you with admissions, enquiries and campus visits.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 grid lg:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-blue-950/70 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">
            Enquiry / Contact Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <select
                name="enquiryFor"
                value={formData.enquiryFor}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="">Enquiry For *</option>
                <option>Admission</option>
                <option>General</option>
                <option>Transport</option>
                <option>Fee</option>
                <option>Other</option>
              </select>
              {errors.enquiryFor && <p className="text-red-400 text-sm mt-1">{errors.enquiryFor}</p>}
            </div>

            <input
              type="text"
              name="classApplying"
              placeholder="Class Applying For"
              value={formData.classApplying}
              onChange={handleChange}
              className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-blue-900 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-950 font-semibold py-3 rounded-lg hover:scale-105 transition"
            >
              Submit
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          <div className="bg-blue-950/70 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              Visit Our Campus
            </h2>

            <p className="text-gray-300 mb-4">
              Shyamali Global School is located in a peaceful and green
              environment at Khorahar, Barhi, Hazaribagh.
            </p>

            <iframe
              title="map"
              className="w-full h-60 rounded-xl"
              src="https://maps.google.com/maps?q=Barhi%20Hazaribagh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="bg-blue-950/70 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              Contact Information
            </h2>

            <p className="text-gray-300">
              Shyamali Global School <br />
              Khorahar, Barhi, Hazaribagh, Jharkhand
            </p>

            <p className="mt-3">📞 9110059475 / 9288059475</p>
            <p>📧 shyamaliglobalschool@gmail.com</p>
            <p>🌐 www.shyamaliglobalschool.in</p>

            <p className="mt-4 text-gray-400">
              Monday – Saturday: 9:00 AM – 4:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4">
          <div className="bg-blue-950 p-6 rounded-xl text-center shadow-2xl border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">
              Form Submitted Successfully
            </h3>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-yellow-400 text-blue-950 px-6 py-2 rounded-lg font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
