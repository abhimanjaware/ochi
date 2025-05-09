import React, { useState, useEffect } from "react";

function Footer() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-[100vh] w-full bg-[#CDEA68] overflow-hidden flex flex-col items-center">
      {/* Logo */}
      <div className="logo py-6 px-6 sm:px-10">
        <svg
          width="90"
          height="40"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths unchanged */}
        </svg>
      </div>

      {/* Eyes */}
      <div className="flex justify-center items-center h-[30vh] w-full relative mt-4 sm:mt-8">
        <div className="flex gap-4 sm:gap-6">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-zinc-100 rounded-full w-[30vw] h-[30vw] sm:w-[15vw] sm:h-[15vw] max-w-[200px] max-h-[200px]"
            >
              <div className="bg-zinc-900 h-2/3 w-2/3 rounded-full relative">
                <div
                  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                  className="line absolute top-1/2 left-1/2 w-full h-10"
                >
                  <div className="bg-zinc-100 h-10 w-10 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer links and title */}
      <div className="w-full bg-[#004D43] px-4 sm:px-10 py-6 rounded-t-[3rem] mt-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          {/* Left */}
          <div className="text-white text-sm md:text-base">
            <h1>
              <b>New York City</b> <br />
              <b>3:24 AM</b>
            </h1>
          </div>

          {/* Right */}
          <div className="w-full md:w-[60%]">
            <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm sm:text-base text-white">
              <ul className="space-y-1">
                <li className="hover:text-[#CDEA68] cursor-pointer">Projects</li>
                <li className="hover:text-[#CDEA68] cursor-pointer">Ideas</li>
                <li className="hover:text-[#CDEA68] cursor-pointer">About</li>
              </ul>
              <ul className="space-y-1">
                <li className="hover:text-[#CDEA68] cursor-pointer">Instagram</li>
                <li className="hover:text-[#CDEA68] cursor-pointer">LinkedIn</li>
                <li className="hover:text-[#CDEA68] cursor-pointer">Twitter</li>
              </ul>
              <ul className="space-y-1">
                <li className="hover:text-[#CDEA68] cursor-pointer">Policy</li>
                <li className="hover:text-[#CDEA68] cursor-pointer">
                  hello@worl.studio
                </li>
                <li className="hover:text-[#CDEA68] cursor-pointer">
                  +00 0000000000
                </li>
              </ul>
            </div>

            {/* Email input */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="  Enter email to subscribe"
                className="border-b border-gray-500 bg-transparent px-2 py-1 text-white w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer Heading */}
        <h1
          style={{ WebkitTextStroke: "2px #CDEA68" }}
          className="text-[#004D43] font-[Oswald] font-extrabold tracking-wide text-center mt-12 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9.5rem] leading-none whitespace-pre-wrap break-words"
        >
          EYE-OPENING PRESENTATION
        </h1>
      </div>
    </div>
  );
}

export default Footer;
