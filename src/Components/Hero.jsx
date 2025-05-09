import React from "react";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onAnimationComplete={() => {
          const fadeLayer = document.querySelector('#fadeLayer');
          if (fadeLayer) fadeLayer.style.zIndex = '0';
        }}
        id="fadeLayer"
        className="text-white h-screen w-full fixed flex top-0 left-0 z-[9999999999999999999999999999999999999999999999] bg-transparent"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeInOut' }}
            className="bar h-[105vh] w-[10vw] z-[999999999999999999999999999999999999999999999999] bg-black"
          ></motion.div>
        ))}
      </motion.div>

      <motion.div
        data-scroll
        data-scroll-speed="-.3"
        className="font-[Prosto_One] z-[1] bg-black min-h-[90vh] w-full text-white pt-[6rem] sm:pt-[13rem] tracking-widest overflow-hidden pb-4"
      >
        <div className="overflow-hidden px-4 sm:px-10">
          <div className="hero-cntent border-b border-gray-800">
            <div className="title-container uppercase text-[2.75rem] sm:text-8xl font-extrabold whitespace-nowrap text-start">
              <motion.div>We create</motion.div>
              <div className="split flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '175px' }}
                  transition={{ ease: "easeIn", delay: 2, duration: 0.6 }}
                  className="h-[65px] sm:h-[85px] w-[175px] rounded-2xl bg-yellow-50"
                >
                  <img
                    className="h-full w-full object-cover object-center rounded-2xl"
                    src="https://4kwallpapers.com/images/walls/thumbs_2t/7214.png"
                    alt=""
                  />
                </motion.div>
                <div className="text-[2rem] sm:text-inherit">eye-opening</div>
              </div>
              <motion.div className="pb-10 sm:pb-45">presentations </motion.div>
            </div>
          </div>
        </div>

        <div className="sub-content normal-case flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between px-4 sm:px-10 mt-4 sm:mt-10 gap-4 sm:gap-0 overflow-hidden text-base sm:text-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            For public and private companies
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            
          >
            From the first pitch to IPO
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="flex items-center gap-2"
          >
            <button className="hover border-white border-[1px] rounded-full py-2 px-4 sm:py-3 sm:px-5 hover:translate-x-0.5 hover:bg-white hover:text-black transition-all duration-200  ease-in">
              start the project
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;