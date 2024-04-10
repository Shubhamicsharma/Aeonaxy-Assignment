import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faChevronRight, faPeopleGroup, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Section3
 = () => {
  return (
    <>
        <div className=''>
            <div className='h-[28rem] bg-[#092640] absolute overflow-hidden p-16 pb-0 w-full z-0'>
                <div className='h-1/2 rounded-full aspect-square border-[16px] bg-transparent border-[#0ce7f1] absolute right-0 top-0 translate-x-[50%] translate-y-[-50%]'></div>
                <div className='h-2/3 aspect-square absolute bg-right rotate-[-45deg] left-0 bottom-0 translate-y-1/2 translate-x-[-50%]' 
                    style={{backgroundImage: 'radial-gradient(rgba(10, 140, 248, 1) 4px, transparent 0)', backgroundSize : '30px 30px'}}></div>
            </div>
            <div className='w-full z-10 relative pt-20 pb-10'>
                <h1 className='mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold w-11/12 sm:w-3/4 md:w-2/3 text-center text-white'>Spend more time connecting, not scheduling</h1>
                <p className='text-[#F8F8F8] w-11/12 sm:w-3/4 md:w-3/5 text-center mx-auto mt-10 text-lg sm:text-xl'>Book more meetings and hit goals faster by streamlining your scheduling process and automating manual busywork</p>
            </div>
            <div className='z-10 relative w-full flex flex-col md:flex-row gap-5 px-10 sm:px-20 md:px-5 lg:px-10 xl:gap-10 xl:px-20'>
                <div className='w-full md:w-1/3 bg-white rounded-md border border-gray-400 py-8 px-4 lg:px-8 shadow-[0_4px_4px_-2px] shadow-gray-400 flex flex-col justify-between gap-12'>
                    <div>
                        <FontAwesomeIcon icon={faUserClock} size = "xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Availability Preferences</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Customize exactly how and when you're booked.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>

                </div>
                <div className='w-full md:w-1/3 bg-white rounded-md border border-gray-400 py-8 px-4 lg:px-8 shadow-[0_4px_4px_-2px] shadow-gray-400 flex flex-col justify-between gap-12'>
                    <div>
                    <FontAwesomeIcon icon={faPeopleGroup} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Teams Scheduling</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>The automated scheduling you know and love for multi-person meetings.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>

                </div>
                <div className='w-full md:w-1/3 bg-white rounded-md border border-gray-400 py-8 px-4 lg:px-8 shadow-[0_4px_4px_-2px] shadow-gray-400 flex flex-col justify-between gap-12'>
                    <div>
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Routing Forms</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Request information to efficiently screen and qualify people before they can schedule with you.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>

                </div>
            </div>
        </div>
    </>
  )
}

export default Section3
