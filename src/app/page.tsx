import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl sm:text-5xl md:text-5xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] text-white'>
          School Management <br /> <span className='text-blue-300'>System</span>
        </h1>
        <p className='mt-4 max-w-ws-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-200'>
          Manage students, teachers, parents, and staff easily with our smart platform.
        </p>
      </div>

      {/* Button container */}
      <div className='flex justify-center gap-4 text-sm max-sm:text-xs'>
        <button
          className='bg-white text-black px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer'
        >
          Watch Demo
        </button>
      </div>

      {/* Trusted by users */}
      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-200'>
        Trusted by 10K+ users
      </div>
    </div>
  )
}

export default Hero
