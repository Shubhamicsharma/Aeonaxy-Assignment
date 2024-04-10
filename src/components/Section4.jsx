import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBars, faLaptopCode, faCalendar, faChartSimple } from '@fortawesome/free-solid-svg-icons'

const Section4 = () => {
  return (
    <>
        <div className='flex flex-col gap-10 md:flex-row p-5 sm:p-10 lg:p-20 md:gap-0 lg:gap-10'>
            <div className='grid grid-cols-2 w-full md:w-3/5 gap-5 sm:gap-10'>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Workflows</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Automate communications before and after meetings.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faLaptopCode} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Website scheduling</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Add Calendly to your website to streamline scheduling.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} flip="vertical" size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Calendar Connections</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Connect up to six calendars per user to check real-time availability</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faChartSimple} rotation={90} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Meeting Polls</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Poll your attendees for their availability and arrive at the best time for most</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>

            </div>
            <div className='w-full md:w-2/5 flex items-center'>
                <img src="https://20four7va.com/wp-content/uploads/2022/05/calendly-1536x1242.jpeg" alt="" className='' />
            </div>
        </div>
    </>
  )
}

export default Section4