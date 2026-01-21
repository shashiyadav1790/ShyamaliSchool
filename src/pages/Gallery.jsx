import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import compressed webp images
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";

const images = [g1, g2, g3, g4, g5];

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* SEO */}
      <Helmet>
        <title>Gallery | Shyamali Global School</title>
        <meta
          name="description"
          content="Explore the gallery of Shyamali Global School showcasing classrooms, events, campus life, and activities."
        />
      </Helmet>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          School <span className="text-yellow-400">Gallery</span>
        </h1>
        <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
          A glimpse into our vibrant campus life, modern classrooms, and joyful learning moments.
        </p>
      </section>

      {/* SWIPER GALLERY */}
      <section className="bg-blue-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // ✅ Modules pass here
            spaceBetween={10}
            slidesPerView={1}
            speed={700}
            grabCursor
            touchRatio={1.2}
            resistanceRatio={0.6}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            className="rounded-2xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  <img
                    src={img}
                    alt={`Shyamali Global School Gallery ${index + 1}`}
                    loading="lazy"
                    fetchpriority="high"
                    className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center rounded-2xl">
                    <span className="text-white font-semibold tracking-wide">
                      View Image
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Experience Our Campus in Real Life
        </h2>
        <p className="text-gray-300 mb-6">
          Visit Shyamali Global School and see our world-class facilities firsthand.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-950 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Schedule a Visit
        </a>
      </section>

    </div>
  );
};

export default Gallery;
