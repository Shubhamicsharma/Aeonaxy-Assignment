import React from 'react'

const Hero = () => {
  return (
    <>
        <div className=' py-16 px-10 lg:px-20 flex flex-col items-center lg:flex-row gap-16'>
            <div className='lg:w-[45%] place-content-center'>
                <div className='flex flex-col gap-10 text-center lg:text-left'>
                    <p className='text-[#006BFF] font-medium xl:text-xl'>CALENDLY FEATURES</p>
                    <p className='text-[#083757] text-3xl sm:text-4xl font-black leading-[3rem] sm:leading-[3.5rem] xl:text-6xl xl:leading-[5rem]'>Take the hassle out of <span className='text-[#006BFF]'>scheduling</span></p>
                    <p className='text-xl sm:text-2xl text-[#083757] tracking-wider font-light'>Calendly helps you book better meetings faster by syncing and integrating everything in one intuitive platform</p>
                    <a href="#" className="mx-auto lg:mx-0 block w-fit text-white rounded-full bg-[#006BFF] hover:bg-[#00419c] lg:border-0 py-4 px-10 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Start for free</a>
                </div>
            </div>
            <div className='lg:w-[55%] place-contents-center'>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/4CrsQ3maYuDvlRW9EvMmeQ/b7b08a5826b2dacaf14b4fdafac4d5c3/features_overview_1__1_.png?w=1920&h=1564&q=50&fm=webp" alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero