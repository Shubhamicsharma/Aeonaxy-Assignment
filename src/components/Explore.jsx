import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Explore = () => {
  return (
    <>
        <div className=' bg-[#092640] overflow-hidden w-full relative py-20'>
            <div className='w-1/2 max-w-80 rounded-full z-0 aspect-square border-[16px] bg-transparent border-[#0ce7f1] absolute right-0 top-0 translate-x-[50%] translate-y-[-50%]'></div>
            <div className='w-2/3 max-w-96 aspect-square absolute bg-right rotate-[-45deg] left-0 bottom-0 translate-y-1/2 translate-x-[-50%] z-0' 
                style={{backgroundImage: 'radial-gradient(rgba(10, 140, 248, 1) 4px, transparent 0)', backgroundSize : '30px 30px'}}>
            </div>
            <div className='z-10'>
                <h1 className='w-full text-center text-[#0ce7f1]'>EXPLORE</h1>
                <h1 className='mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold w-11/12 sm:w-3/4 md:w-1/2 text-center my-10  text-white'>Discover more ways to work with Calendly</h1>
                <div className='grid grid-cols-4 gap-5 mx-10 sm:mx-20'>
                    <div className='bg-white rounded-lg z-10 overflow-hidden col-span-4 md:col-span-2 lg:col-span-1'>
                        <div className=' '>
                            <img className='h-36 w-full object-cover' src="https://images.unsplash.com/photo-1613292252537-be6ada176e0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col lg:min-h-60 justify-between gap-12 py-4 px-4 xl:px-8'>
                            <div>
                                <h1 className='text-base font-semibold text-[#083757] lg:text-lg xl:text-xl'>Sales</h1>
                                <p className='mt-5 text-sm lg:text-base xl:text-lg font-light text-[#083757]'>Get to your best leads faster</p>
                            </div>
                            
                            <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg z-10 overflow-hidden col-span-4 md:col-span-2 lg:col-span-1'>
                        <div className=' overflow-hidden'>
                            <img className='h-36 w-full object-cover' src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col lg:min-h-60 justify-between gap-12 py-4 px-4 xl:px-8'>
                            <div>
                                <h1 className='text-base font-semibold text-[#083757] lg:text-lg xl:text-xl'>Recruiting</h1>
                                <p className='mt-5 text-sm lg:text-base xl:text-lg font-light text-[#083757]'>Less emailing, more interviews</p>
                            </div>
                            
                            <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg z-10 overflow-hidden col-span-4 md:col-span-2 lg:col-span-1'>
                        <div className=' overflow-hidden'>
                            <img className='h-36 w-full object-cover' src="https://plus.unsplash.com/premium_photo-1682437559131-7987bab0dc5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col lg:min-h-60 justify-between gap-12 py-4 px-4 xl:px-8'>
                            <div>
                                <h1 className='text-base font-semibold text-[#083757] lg:text-lg xl:text-xl'>Customer Success</h1>
                                <p className='mt-5 text-sm lg:text-base xl:text-lg font-light text-[#083757]'>Connect with customers when it matters</p>
                            </div>
                            
                            <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg z-10 overflow-hidden col-span-4 md:col-span-2 lg:col-span-1'>
                        <div className=' overflow-hidden'>
                            <img className='h-36 w-full object-cover' src="https://plus.unsplash.com/premium_photo-1664286774901-9a27ceb4de77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col lg:min-h-60 justify-between gap-12 py-4 px-4 xl:px-8'>
                            <div>
                                <h1 className='text-base font-semibold text-[#083757] lg:text-lg xl:text-xl'>Education</h1>
                                <p className='mt-5 text-sm lg:text-base xl:text-lg font-light text-[#083757]'>Boost student success</p>
                            </div>
                            
                            <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Explore