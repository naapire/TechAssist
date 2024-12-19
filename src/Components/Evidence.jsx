import React from 'react';
import Three from '../assets/Alliance3.jpg';
import Four from '../assets/Alliance4.jpg';
import One from '../assets/alliance1.jpg';

function Evidence() {
  return (
    <div className="bg-[#24092A] text-white p-6 md:p-10 lg:p-12 font-sans">
      {/* Heading Section */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
        People Whose Lives Have Changed
      </h1>

      {/* Subtext */}
      <h3 className="italic text-sm md:text-base text-center mt-4">
        See Some Ordinary People Like You Who Have Gotten Extraordinary Results  
      </h3>

      {/* First Group */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
        <div className="flex justify-center">
          <img
            src={Three}
            alt="Income Proof 1"
            className="w-[500px] h-[500px] rounded-md border-2"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Three}
            alt="Income Proof 2"
            className="w-[500px] h-[500px] rounded-md border-2"
          />
        </div>
      </div>

      {/* Second Group */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
        <div className="bg-white flex gap-2 rounded-md border-2 p-2">
          <img
            src={Four}
            alt="Income Proof 1"
            className="w-[150px] sm:w-[200px] lg:w-[250px] h-[400px] rounded-md border-2"
          />
          <img
            src={Four}
            alt="Income Proof 2"
            className="w-[150px] sm:w-[200px] lg:w-[250px] h-[400px] rounded-md border-2"
          />
        </div>

        {/* Third Group */}
        <div className="bg-white flex gap-2 rounded-md border-2 p-2">
          <img
            src={One}
            alt="Income Proof 1"
            className="w-[150px] sm:w-[200px] lg:w-[250px] h-[400px] rounded-md border-2"
          />
          <img
            src={One}
            alt="Income Proof 2"
            className="w-[150px] sm:w-[200px] lg:w-[250px] h-[400px] rounded-md border-2"
          />
        </div>
      </div>

      {/* 3 Secrets Section */}
      <div>
        <h2 className="text-lg md:text-2xl font-bold text-[#FF2E63] text-center mb-6 pt-8">
          What are You Still Waiting For???
        </h2>
        <h2 className="text-lg md:text-2xl font-bold text-[#FF2E63] text-center mb-6">
          Contact Us on
        </h2>
        <ul className='lg:flex justify-center items-center gap-6 '>
          <li className="flex items-start gap-3 border border-red-400 border-3 p-6 rounded-md font-bold mb-5">
            <span className="">☆</span>
            <span>+233559425480</span>
          </li>
          <li className="flex items-start gap-3 border border-red-400 border-3 p-6 rounded-md font-bold mb-5">
            <span className="">☆</span>
            <span>+233247597596</span>
          </li>
          <li className="flex items-start gap-3 border border-red-400 border-3 p-6 rounded-md font-bold mb-5">
            <span className="">☆</span>
            <span>+233538871527</span>
          </li>
        </ul>
        <div className="text-center mt-8">
        <a
          href="http://wa.me/233559425480"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF2E63] text-white text-lg font-bold p-4 px-8 rounded-md shadow-lg hover:bg-[#ff1e50] transition"
        >
          WHATSAPP US HERE
        </a>
      </div>
      </div>
    </div>
  );
}

export default Evidence;
