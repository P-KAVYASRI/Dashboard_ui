import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col w-full justify-center items-center bg-gradient-to-br from-black via-gray-900 to-green-900 bg-cover bg-no-repeat min-h-screen overflow-hidden"
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Floating glowing circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-600 opacity-30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl animate-float delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 text-center mb-6 animate-fadeIn">
        <h1 className="text-3xl sm:text-6xl md:text-6xl 2xl:text-7xl font-extrabold mx-auto leading-[1.2] text-white">
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-400 pr-2">
            School Management
          </span>
          <br />
          <span className="text-green-400 animate-pulse">System</span>
        </h1>
        <p className="mt-6 max-w-lg 2xl:max-w-xl m-auto max-sm:text-sm text-gray-300 animate-fadeIn delay-300">
          Manage students, teachers, parents, and staff easily with our smart
          platform.
        </p>
      </div>

      {/* Buttons with glowing gradient */}
      <div className="relative z-10 flex justify-center gap-6 text-sm max-sm:text-xs mt-6 animate-fadeIn delay-500">
        <Link href="/list/teachers">
          <button className="relative px-10 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-600 shadow-lg overflow-hidden group transition-all duration-500">
            <span className="absolute inset-0 w-0 bg-white opacity-20 group-hover:w-full transition-all duration-500"></span>
            Go to Teachers
          </button>
        </Link>

        <Link href="/list/students">
          <button className="relative px-10 py-3 rounded-lg font-semibold text-green-400 border border-green-400 bg-black hover:bg-green-500 hover:text-black shadow-lg overflow-hidden group transition-all duration-500">
            <span className="absolute inset-0 w-0 bg-white opacity-10 group-hover:w-full transition-all duration-500"></span>
            Go to Students
          </button>
        </Link>

        <Link href="/list/parents">
          <button className="relative px-10 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 shadow-lg overflow-hidden group transition-all duration-500">
            <span className="absolute inset-0 w-0 bg-white opacity-20 group-hover:w-full transition-all duration-500"></span>
            Go to Parents
          </button>
        </Link>
      </div>

      {/* Trusted by users */}
      <div className="relative z-10 flex items-center gap-2 mt-10 mx-auto text-gray-400 animate-fadeIn delay-700">
        ⭐ <span className="text-green-400 font-semibold">Trusted by 10K+ users</span>
      </div>
    </div>
  );
};

export default Hero;
