import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLaptop, faMobileScreenButton, faCloud, faWallet } from '@fortawesome/free-solid-svg-icons'

const Section5 = () => {
  return (
    <>
        <div className='bg-[#F7FAFF]'>
            <div className='w-full z-10 relative pt-20 pb-10'>
                <h1 className='mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold w-11/12 sm:w-3/4 md:w-1/2 text-center text-[#083757]'>Stay in sync from any app, on any device</h1>
                <p className='text-[#083757] w-11/12 sm:w-3/4 md:w-3/5 text-center mx-auto mt-10 text-lg sm:text-xl'>Reclaim your time and your tabs with native integrations with over 70 different apps, and mobile and browser apps for easier access</p>
            </div>
            <div className='flex flex-col gap-10 md:flex-row p-5 sm:p-10 lg:p-20 md:gap-0 lg:gap-10'>
                <div className='w-full md:w-2/5 flex items-center'>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/5PxkQEs6JHgXUIbi3ZGVgT/7b603afdf7838c24c46b1bac683cffb5/features_overview_3__1_.png?w=1138&h=1245&q=50&fm=webp" alt="" className='mx-auto' />
                </div>
                <div className='grid grid-cols-2 w-full md:w-3/5 gap-5 sm:gap-10'>
                    <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                        <div>
                            <FontAwesomeIcon icon={faLaptop} size="xl" style={{color: "#006bff",}} />
                            <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Calendly for Browsers</h1>
                            <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Use Calendly while you're on the web, without switching tabs.</p>
                        </div>
                        
                        <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                    </div>
                    <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                        <div>
                            <FontAwesomeIcon icon={faMobileScreenButton} size="xl" style={{color: "#006bff",}} />
                            <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Calendly for Mobile</h1>
                            <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Book meetings, get notifications, & more on the go.</p>
                        </div>
                        
                        <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                    </div>
                    <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                        <div>
                            <FontAwesomeIcon icon={faCloud} size="xl" style={{color: "#006BFF",}} />
                            <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Calendly for CRMS</h1>
                            <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Make booking meetings simple for teams who use CRMs.</p>
                        </div>
                        
                        <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                    </div>
                    <div className='flex flex-col justify-between gap-12 py-8 px-0 sm:px-4 lg:px-8'>
                        <div>
                            <FontAwesomeIcon icon={faWallet} size="xl" style={{color: "#006bff",}} />
                            <h1 className='mt-5 text-base font-bold text-[#083757] lg:text-xl xl:text-2xl'>Payments</h1>
                            <p className='mt-5 text-base lg:text-lg xl:text-xl font-light text-[#083757]'>Streamline payments for Calendly events, with Paypal or Stripe.</p>
                        </div>
                        
                        <p className='font-bold text-[#006BFF] text-base sm:text-lg md:text-xl cursor-pointer w-fit'>Learn More <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#006bff",}} /></p>
                    </div>

                </div>
                
            </div>
        </div>
    </>
  )
}

export default Section5