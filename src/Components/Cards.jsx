import React from "react";

function Cards() {
  return (
    <div className="w-full bg-black border-t pt-24 border-black/20">
      <div className="px-4 md:px-10 sticky top-0 pt-10 pb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:h-[55vh]">

          {/* Card 1 */}
          <div className="bg-[#004D43] w-full lg:w-[55%] rounded-xl relative h-[300px] lg:h-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              {/* Your SVG icon here */}
              <svg
                width="132"
                height="180"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your <path> tags */}
              </svg>
            </div>
            <div className="absolute bottom-5 left-4 text-[#CDEA68] border border-[#CDEA68] px-3 py-1 rounded-full">
              2019-2022
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#212121] w-full lg:w-[22%] rounded-xl relative h-[300px] lg:h-auto">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[110px]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <div className="absolute bottom-5 left-4 text-white border border-white px-3 py-1 rounded-full uppercase">
              Rating 5.0 on Clutch
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#212121] w-full lg:w-[22%] rounded-xl relative h-[300px] lg:h-auto">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[110px]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <div className="absolute bottom-5 left-4 text-white border border-white px-3 py-1 rounded-full uppercase">
              Business Bootcamp Alumni
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
