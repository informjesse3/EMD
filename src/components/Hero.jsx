// // Hero.jsx
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import img2 from "../assets/6754.jpg";
// import img4 from "../assets/img4.jpg";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-[100vh]">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40"
//       >
//         <h1 className="text-5xl md:text-6xl font-kopimax">Elmadel Coffee Gardens</h1>
//         <p className="mt-4 text-md">Rustic Farm Stay in Machakos</p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import imgHero from "../assets/6754.jpg"; // your hero image

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center bg-black"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0)), url(${imgHero})`,
      // }}
    >
      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-8 md:left-16 max-w-lg text-white"
      >
        <h1 className="text-5xl text-gray-200 md:text-6xl font-brilliant font-bold mb-4">
          Elmadel Coffee Gardens
        </h1>
        <p className="text-md md:text-xl text-gray-200 font-thin">
          Rustic farm stay in Machakos with spacious accommodation, modern amenities, and breathtaking coffee garden views.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;


