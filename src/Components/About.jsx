import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function About() {
  return (
    <div className="about-container min-h-[10vh] bg-[#CDEA68] text-black font-[Prosto_One] mt-[-5rem] rounded-tl-[45px] rounded-tr-[45px]">
      <div className="about-content px-6 md:px-10 py-10 flex flex-col">
        {/* Top Intro Text */}
        <div className="info text-[6vw] md:text-[3vw] leading-tight md:leading-none pr-0 md:pr-44 border-gray-700 border-b pb-10 md:pb-20">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </div>

        {/* Info Section 2 */}
        <div className='info2 w-full flex flex-col md:flex-row justify-between gap-8 md:gap-11 font-["Quicksand"] mt-8 py-10 border-b'>
          {/* Left Column */}
          <div className="w-full md:w-[30%] text-xl md:text-2xl mb-6 md:mb-0 whitespace-nowrap">
            <h3>What you can expect:</h3>
          </div>

          {/* Middle Column */}
          <div className="w-full md:w-[40%] text-base md:text-xl font-medium mb-6 md:mb-0">
            <p>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
              <br />
              <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem quaerat beatae dolore quidem nulla? Pariatur, similique?
              Dolorum, dolor. Libero optio quae odit? Libero magni animi
              dolorem. Voluptatibus, aliquam quia?
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-auto">
            <ul className="flex flex-col items-start text-base md:text-xl">
              <h3 className="text-xl md:text-2xl font-medium mb-4">SOCIALS:</h3>
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Our Approach Heading */}
        <h3 className="text-[6vw] md:text-[3vw] uppercase font-bold mt-12 font-[Moon_Dance]">
          Our approach:
        </h3>

        {/* Button and Image */}
        <div className="info3 flex flex-col md:flex-row justify-between mt-4 gap-6">
          <div className="info-btn w-full group flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Button */}
            <button className="h-[60px] md:h-[70px] bg-black/75 text-white border border-black text-sm md:text-[1rem] flex items-center gap-6 md:gap-8 rounded-full py-4 px-8 md:py-5 md:px-12 hover:translate-x-0.5 hover:bg-black hover:text-white transition-all duration-200 ease-in">
              READ MORE
              <div className="circle h-[5px] w-[5px] bg-white rounded-full flex justify-center items-center transition-all ease-in-out duration-400 group-hover:scale-600">
                <div className="text-black p-2 text-[7px] rotate-45">
                  <IoIosArrowRoundUp />
                </div>
              </div>
            </button>

            {/* Image */}
            <div className="overflow-hidden h-[30vh] md:h-[60vh] w-full md:w-1/2 rounded-3xl">
              <div className="info-img bg-yellow-100 h-full w-full rounded-3xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] transition-all duration-200 hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
