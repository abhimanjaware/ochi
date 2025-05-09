import React from 'react';
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";

function Features() {
  const projects = [
    {
      title: 'SALIENCE LABS',
      img: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png',
      tags: ['BRAND IDENTITY', 'PITCH DECK']
    },
    {
      title: 'CARDBOARD SPACESHIP',
      img: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
      tags: ['BRRANDED TEMPLATE', 'SALES DESK', 'SOCIAL MEDIA TEMPLATES']
    },
    {
      title: 'AH2 & Matt Horn',
      img: 'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png',
      tags: ['BRAND IDENTITY', 'PITCH DECK']
    },
    {
      title: 'All Things Go',
      img: 'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png',
      tags: ['AGENCY', 'COMPANY PRESENTATION']
    }
  ];

  return (
    <div data-scroll data-scroll-speed="-.1" className='bg-white py-20 relative px-4 sm:px-10 md:px-16'>
      {/* Title */}
      <div className="title border-zinc-600 mb-10">
        <h1 className='font-[Prosto_One] text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] pb-6 border-b-[1px] border-gray-300'>
          Featured projects :
        </h1>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center max-w-[10
      0%] mx-auto">
        {projects.map((project, index) => (
          <div key={index} className='w-full space-y-4'>
            {/* Title and Icon */}
            <div className="flex items-center gap-2">
              <IoChevronForwardCircle />
              <h1 className='text-lg sm:text-xl font-medium tracking-wide'>{project.title}</h1>
            </div>

            {/* Image Card with Overlay */}
            <div className='group relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden rounded-2xl'>
              <img
                className='object-cover h-full w-full transition-transform duration-500 '
                src={project.img}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-2xl translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in text-center z-10">
                <h1 className='text-3xl sm:text-5xl lg:text-6xl text-white font-bold'>{project.title}</h1>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.tags.map((tag, i) => (
                <button key={i} className='py-2 px-6 text-sm sm:text-base font-normal rounded-full text-black border border-black transition duration-200 hover:bg-black hover:text-white'>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20">
        <button className="group bg-black/80 text-white border border-black text-sm sm:text-base flex items-center gap-6 rounded-full py-4 px-10 hover:bg-black transition-all duration-200 ease-in">
          VIEW ALL CASE STUDIES
          <div className="h-[6px] w-[6px] bg-white rounded-full flex justify-center items-center group-hover:scale-150 transition-all duration-300">
            <div className="text-black p-2 text-[10px] hidden group-hover:block group-hover:rotate-45">
              <IoIosArrowRoundUp />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Features;
