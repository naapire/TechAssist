import React from 'react'
import One from '../assets/alliance1.jpg';
import Two from '../assets/Alliance2.jpg';
import TimeCounter from './Timecounter';

function SelfIdentity() {
  return (
    <div className="flex flex-col items-center text-center py-12  md:px-0 bg-white">
      {/* Instructor Image */}
      <div className="w-40 h-44 rounded-md  border-2 border-pink-500 mb-6">
        <img
          src={Two} // Replace with your image URL
          alt="Instructor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Instructor Name */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
      EMMANUEL AVORKLIYA
      </h2>

      {/* Subheading */}
      <h3 className="text-lg font-semibold text-gray-500 mb-4">
        YOUR INSTRUCTOR
      </h3>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl leading-relaxed md:text-lg">
      TechAssist Alliance is a technology solutions provider that:
      <ul className="mt-6 space-y-4 text-base md:text-lg">
        <li className="flex items-start gap-3">
          <span className="">☆</span>
          <span>Boosts business sales and revenue</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="">☆</span>
          <span>Teaches social media advertising skills </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="">☆</span>
          <span>Educates over 500 students and workers in technology</span>
        </li>
      </ul>
     
      </p>
      
    </div>
  );
};

export default SelfIdentity
