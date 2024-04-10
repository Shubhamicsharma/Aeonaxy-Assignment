import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUsersRectangle, faShield, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Section6 = () => {
  return (
    <>
        <div className='w-full z-10 relative pt-20 pb-10'>
            <h1 className='mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold w-11/12 sm:w-3/4 md:w-1/2 text-center text-[#083757]'>For teams of all sizes</h1>
            <p className='text-[#083757] w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 text-center mx-auto mt-10 text-lg sm:text-xl'>From small businesses to Fortune 100 enterprises-Calendly supports scheduling at scale with robust security and administrative controls</p>
        </div>
        <div className='flex flex-col gap-10 md:flex-row p-5 sm:p-10 lg:p-20 md:gap-0 lg:gap-20'>
            <div className='grid grid-cols-1 w-full md:w-3/5 sm:gap-10'>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faUsersRectangle} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Admin Management</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Easily manage your organization's users and scheduling processes from one centralized place.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faShield} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Security & Compliance</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Trust Calendly to safeguard company data and meet your compliance requirements.</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>
                <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                    <div>
                        <FontAwesomeIcon icon={faCircleInfo} size="xl" style={{color: "#006bff",}} />
                        <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Learn more about Calendly for Enterprise</h1>
                        <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Connect up to six calendars per user to check real-time availability</p>
                    </div>
                    
                    <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                </div>

            </div>
            <div className='w-full md:w-2/5 flex items-center'>
                <img src="https://www.alloysoftware.com/wp-content/uploads/2020/04/working-remotely-monitor.png" alt="" className='mx-auto' />
            </div>
        </div>
    </>
  )
}

export default Section6