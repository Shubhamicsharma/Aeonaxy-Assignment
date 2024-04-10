import React from 'react'

const Section8 = () => {
  return (
    <>
        <div className='w-full z-10 relative py-20 flex flex-col bg-[#F8F8F8] gap-16'>
            <h1 className='mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold w-11/12 sm:w-3/4 md:w-1/2 text-center text-[#083757]'>We take the manual work out of scheduling</h1>
            <p className='text-[#083757] w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 lg:px-10 text-center mx-auto text-lg sm:text-xl'>Get instant access to all of these features and more, so you can have more productive meetings without the back-and-forth</p>
            <div className='flex flex-col sm:flex-row w-fit mx-auto gap-5 px-5 sm:gap-10'>
                <a href="#" className="w-44 font-semibold text-center mx-auto lg:mx-0 block w-fit text-white rounded-full bg-[#006BFF] hover:bg-[#00419c] lg:border-0 py-4 px-8 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Start for free</a>
                <a href="#" className="w-44 text-center mx-auto lg:mx-0 block w-fit border-2 border-black rounded-full py-4 font-semibold px-8">Contact Sales</a>
            </div>
        </div>
    </>
  )
}

export default Section8