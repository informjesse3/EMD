// Facilities.jsx
import { motion } from "framer-motion";
import { BiWifi, BiBed, BiCar, BiCoffeeTogo } from "react-icons/bi";

const facilities = [
  { icon: <BiWifi size={30}/>, title: "Free WiFi" },
  { icon: <BiBed size={30}/>, title: "Spacious Rooms" },
  { icon: <BiCar size={30}/>, title: "Free Parking & Airport Shuttle" },
  { icon: <BiCoffeeTogo size={30}/>, title: "Breakfast & Dining Options" },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-gray-700 font-bold mb-10"
        >
          Facilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-4 text-green-700">{f.icon}</div>
              <h3 className="font-bold text-gray-700 text-sm">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
