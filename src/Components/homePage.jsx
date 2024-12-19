import React from 'react';
import One from '../assets/alliance1.jpg'
import Evidence from './Evidence';
import TimeCounter from './Timecounter';
import SelfIdentity from './SelfIdentity';

function HomePage() {
  return (
    <div className="bg-[#2a090f] text-white font-sans">
      {/* Heading Section */}
      <div className="bg-[#24092A] text-white p-9 md:p-10 lg:p-12 font-sans">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
          HOW TO GAIN {' '}
          <span className="text-[#FF2E63]">FINANCIAL FREEDOM </span>
          WITHOUT LEAVING YOUR HOME OR CURRENT JOB
        </h1>

        {/* Subtext */}
        <p className="italic text-sm md:text-base text-center mt-4">
          Promote your business on our social media platforms to increase <br />
          or sales learn how to advertise your own business yourself on social media platforms.
        </p>

        {/* Images Section */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="bg-white flex gap-2 rounded-md border-2 p-2">
            <img
              src={One}
              alt="Income Proof 1"
              className="w-[150px] sm:w-[200px] lg:w-52 h-auto rounded-md border-2"
            />
            <img
              src={One}
              alt="Income Proof 2"
              className="w-[150px] sm:w-[200px] lg:w-52 h-auto rounded-md border-2"
            />
          </div>
        </div>

        {/* 3 Secrets Section */}
        <h2 className="text-xl md:text-2xl font-bold text-center mt-10">
          Three(3) Secrets To Boost Your Online Business:
        </h2>

        <ul className="mt-6 space-y-4 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="">☆</span>
            <span>Develop a Content Strategy </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="">☆</span>
            <span>Build a Community </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="">☆</span>
            <span>Stay Up-to-date With Trends</span>
          </li>
        </ul>
      </div>

      {/* Other Sections */}
      <TimeCounter />
      <SelfIdentity />
      <Evidence />
    </div>
  );
}

export default HomePage;
