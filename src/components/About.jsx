// About.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgHero from "../assets/6754.jpg"; // your hero image
import img1 from "../assets/img4.jpg";
import img2 from "../assets/6754.jpg";
import img3 from "../assets/img4.jpg";


const About = () => {

    const fadeUp = (delay = 0.2) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-gray-500 mb-6"
        >
          About Elmadel Coffee Gardens
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          Spacious Accommodation: Elmadel Coffee Gardens offers a rustic chalet with two bedrooms, two bathrooms, a sun terrace, garden, and free WiFi. Guests enjoy modern amenities including air-conditioning, bicycles, a fully equipped kitchenette, balcony, terrace, and outdoor fireplace.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-700 mt-4"
        >
          Dining options include continental, buffet, À la carte, full English/Irish, halal, and gluten-free. Local specialties, pastries, pancakes, cheese, fruits, and juice are served.
        </motion.p>
      </div>
      <section id="education" className="py-20 px-8 space-y-20">
      {/* Title */}
    

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Education Block (LEFT BLACK, RIGHT IMAGE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">
          {/* Left (black bg with text) */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
  className="bg-black text-white p-10 flex flex-col justify-center rounded-l-lg"
>
  <h2 className="text-3xl font-brilliant tracking-normal mb-6">
    ABOUT ELMadel COFFEE GARDENS
  </h2>
  <ul className=" pl-5 space-y-2 text-gray-200 text-sm">
    <li className="py-2 border-b border-gray-700">
      <span className="font-thin">Spacious Accommodation:</span> Rustic chalet with two bedrooms, two bathrooms, a sun terrace, and garden. Pet-friendly with free WiFi.
    </li>
    <li className="py-2 border-b border-gray-700">
      <span className="font-thin">Modern Amenities:</span> Air-conditioning, bicycles, fully equipped kitchenette, balcony, terrace, and outdoor fireplace. Free on-site parking.
    </li>
    <li className="py-2 border-b border-gray-700">
      <span className="font-thin">Dining Options:</span> Breakfast includes continental, buffet, À la carte, full English/Irish, halal, and gluten-free. Local specialties, fresh pastries, pancakes, cheese, fruits, and juice.
    </li>
    <li className="py-2 border-b border-gray-700 ">
      <span className="font-thin">Local Attractions:</span> Located 61 km from Wilson Airport, near Katunga Forest (9 km), Machakos Peoples Park (4.6 km), and Daystar University (33 km). Bike tours available.
    </li>
    <li className="py-2 border-b border-gray-700 border-dashed">
      <span className="font-thin">Popular Facilities:</span> Free WiFi, airport shuttle, free parking, non-smoking rooms, room service, family rooms, and breakfast.
    </li>
  </ul>
</motion.div>


          {/* Right (image) */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="bg-green-100 flex justify-center items-center p-6"
          >
6754
          </motion.div>
        </div>

        {/* Certifications Block (LEFT IMAGE, RIGHT WHITE TEXT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">
          {/* Left (image) */}
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="bg-indigo-300 flex justify-center items-center p-6"
          >
            <img
              src={imgHero}
              alt="Certification"
              className="rounded-2xl shadow-lg max-h-[400px] object-cover"
            />
          </motion.div>

          {/* Right (summary text) */}
         
        </div>
      </div>
    </section>
    </section>
  );
};

export default About;
