import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

import { GiCoffeeCup } from "react-icons/gi";

import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Gallery",
    "Facilities",
    "Booking",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-white font-kopimax">
        {/* Elmadel Coffee Gardens */}
      </div>

      {/* Menu Icon */}
      <div className="relative">
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="text-white py-3 focus:outline-none  px-9 transition duration-300 rounded-full  hover:shadow-lg  flex flex-row items-center justify-center gap-6"
        >
          <FaLongArrowAltRight />
          <GiCoffeeCup
            className="hover:text-orange-900 ease-in duration-300 hover:rotate-6 hover:scale-110"
            size={29}
          />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.ul
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden z-50"
            >
              {menuItems.map((item, i) => (
                <li key={i} className="border-b last:border-b-0">
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-100 hover:text-gray-800 cursor-pointer "
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
