import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Earth from '../../components/earth/Earth';
const MainPage = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const earthVariant = {
    hidden: { opacity: 0, x: +200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <div className="h-[90vh] relative flex items-center justify-center translate-y-10 pr-20">
      <motion.div
        variants={earthVariant}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.7 }}
        className="h-[75vh]  flex-1 w-auto"
      >
        <Earth />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.5 }}
        className="flex flex-1 flex-col gap-4 text-center justify-center  text-black "
      >
        <div className="m-0 font-extrabold text-6xl flex flex-col gap-3">
          {/* <span className="text-[#C2021D]">Summarease</span>{' '} */}
          {/* <span className="text-[#000000]">Havelsan MAIN</span> */}
          <img
            src="./MAIN_SUMMAREASE.png"
            className="w-auto object-cover"
            alt=""
          />
        </div>
        <div className="text-2xl tracking-widest text-blood">
          Verileri Özetleyin, Bilgileri Odaklayın
        </div>
        <div className="flex flex-row items-center justify-center">
          <NavLink
            to={'/explore'}
            className="bg-white border-2 border-[#C2021D] text-[#C2021D] hover:text-white hover:bg-[#C2021D] rounded-md py-1.5 px-5 transition-all duration-200 tracking-wider"
          >
            Keşfet
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default MainPage;
