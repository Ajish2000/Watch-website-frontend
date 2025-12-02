import React from 'react';
import watch1 from '../assets/watch_banner_1_1764666960565.png';
import watch2 from '../assets/watch_banner_2_1764666980783.png';
import watch3 from '../assets/watch_banner_3_1764666995991.png';
import watch4 from '../assets/watch_banner_4_1764667012294.png';
import watch5 from '../assets/watch_banner_5_1764667034108.png';
import watch6 from '../assets/watch_banner_6_1764667050684.png';

export default function ImageBanner() {
  const watches = [watch1, watch2, watch3, watch4, watch5, watch6];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 py-8 md:py-8 shadow-md">
      {/* Gradient Overlays for Premium Effect */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-36 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-36 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

      {/* Scrolling Banner */}
      <div className="flex w-max animate-scroll hover:pause">
        {/* First Set of Images */}
        <div className="flex gap-8 md:gap-12 px-4 md:px-6">
          {watches.map((watch, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center w-32 h-32 md:w-52 md:h-52 bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <img
                src={watch}
                alt={`Premium Watch ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Duplicate Set for Seamless Loop */}
        <div className="flex gap-8 md:gap-12 px-4 md:px-6">
          {watches.map((watch, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center w-32 h-32 md:w-52 md:h-52 bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <img
                src={watch}
                alt={`Premium Watch ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
