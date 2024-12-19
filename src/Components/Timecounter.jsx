import React, { useState, useEffect } from "react";

const TimeCounter = () => {
  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-[#24092A] text-white p-6 md:p-10 lg:p-12 font-sans">
      {/* Heading Section */}
      <h2 className="text-lg md:text-2xl font-bold text-[#FF2E63] text-center mb-6">
        Digital Training On How To Boost Your Sales Using Social media
      </h2>

      {/* Clock Section */}
      <div className="flex justify-center items-center gap-4 md:gap-8">
        {/* Hours */}
        <div className="text-center bg-white text-[#FF2E63] px-4 py-2 rounded-md shadow-lg">
          <span className="text-4xl font-bold">
            {String(currentTime.hours).padStart(2, "0")}
          </span>
          <div className="text-sm text-black">Hours</div>
        </div>
        {/* Minutes */}
        <div className="text-center bg-white text-[#FF2E63] px-4 py-2 rounded-md shadow-lg">
          <span className="text-4xl font-bold">
            {String(currentTime.minutes).padStart(2, "0")}
          </span>
          <div className="text-sm text-black">Minutes</div>
        </div>
        {/* Seconds */}
        <div className="text-center bg-white text-[#FF2E63] px-4 py-2 rounded-md shadow-lg">
          <span className="text-4xl font-bold">
            {String(currentTime.seconds).padStart(2, "0")}
          </span>
          <div className="text-sm text-black">Seconds</div>
        </div>
      </div>

      {/* Reserve Seat Button */}
      <div className="text-center mt-8">
        <a
          href="http://wa.me/233559425480"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF2E63] text-white text-lg font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#ff1e50] transition"
        >
          RESERVE A FREE SEAT
        </a>
      </div>
    </div>
  );
};

export default TimeCounter;
