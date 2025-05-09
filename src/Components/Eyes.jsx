import React, { useState, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180); // original rotation
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.5"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 sm:gap-10 items-center justify-center flex-row">
          {/* Eye 1 */}
          <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[35vw] h-[35vw] sm:w-[15vw] sm:h-[15vw] shadow-lg">
            <div className="bg-zinc-900 h-2/3 w-2/3 rounded-full relative flex items-center justify-center">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="bg-zinc-100 h-10 w-10 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[35vw] h-[35vw] sm:w-[15vw] sm:h-[15vw] shadow-lg">
            <div className="bg-zinc-900 h-2/3 w-2/3 rounded-full relative flex items-center justify-center">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="bg-zinc-100 h-10 w-10 rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
