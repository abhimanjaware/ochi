import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="bg-[#004D43] h-[40vh] py-8 px-4 sm:px-6 md:px-10 lg:px-20 rounded-tl-[30px] rounded-tr-[30px] md:rounded-tl-[45px] md:rounded-tr-[45px]  md:h-[55vh] pt-10 md:pt-16 "
    >
      <div className="marquee-container py-10 text-white font-[Prosto_One] flex whitespace-nowrap overflow-x-hidden border-y border-gray-500 font-bold">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            className="tracking-tighter px-6 sm:px-10 md:px-14 text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] leading-none"
          >
            WE ARE OCHI&nbsp;
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
