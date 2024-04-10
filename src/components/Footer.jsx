import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
        <div className='flex flex-col gap-12 sm:gap-8 p-5 sm:p-10 lg:p-20 box-border'>
            <div className='flex flex-col lg:flex-row  gap-16 '>
                <div className='w-full lg:w-1/2 xl:w-1/3 flex flex-col justify-between gap-14 box-border'>
                    <div className=' overflow-hidden'>
                        <p className='text-[#083757] text-xl sm:text-2xl md:3xl font-black leading-[2rem] sm:leading-[2.75rem] lg:text-4xl xl:text-5xl lg:leading-[3.75rem] xl:leading-[4.25rem] '>Easy<br /><span className='text-[#006BFF]'>ahead</span></p>
                        <p className='w-full text-base sm:text-lg md-text-xl text-[#083757] tracking-wider font-normal mt-5 '>We take the work out of connecting with others so you can accomplish more.</p>
                    </div>
                    <div className='w-full rounded-lg'>
                        <select className='w-1/2 lg:w-full rounded-lg font-semibold' name="language" id="language">
                            <option>English</option>
                            <option>Russian</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Chinese</option>
                            <option>Arabic</option>
                            <option>Japanese</option>
                        </select>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-2 justify-start">
                        <button className='text-white items-center bg-black justify-center w-36 rounded-lg p-2 flex gap-2'>
                            <img className='h-[1.5rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/862px-Apple_logo_white.svg.png" alt="" />
                            <div className=' text-left'>
                                <p className='text-[0.65rem] leading-[0.35rem]'>Download on the</p>
                                <p className='font-bold'>App Store</p>
                            </div>
                        </button>
                        <button className='text-white items-center bg-black justify-center w-36 rounded-lg p-2 flex gap-2'>
                            <img className='h-[1.5rem]' src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="" />
                            <div className=' text-left'>
                                <p className='text-[0.65rem] leading-[0.35rem]'>Get it on</p>
                                <p className='font-bold'>Google Play</p>
                            </div>
                        </button>
                    </div>
                    <div className='flex gap-8 flex-wrap'>
                        <FontAwesomeIcon icon={faTwitter} size='xl' style={{color: "#000000",}} />
                        <FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#000000",}} />
                        <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#000000",}} />
                        <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#000000",}} />
                        <FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#000000",}} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-2/3 grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>About</h1>
                        <a href = "#" className='text-[#083757] text-lg'>About Calendly</a>
                        <a href = "#" className='text-[#083757] text-lg'>Contact Sales</a>
                        <a href = "#" className='text-[#083757] text-lg'>Newsroom</a>
                        <a href = "#" className='text-[#083757] text-lg'>Careers</a>
                        <a href = "#" className='text-[#083757] text-lg'>Security</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>Solutions</h1>
                        <a href = "#" className='text-[#083757] text-lg'>Customer Success</a>
                        <a href = "#" className='text-[#083757] text-lg'>Sales</a>
                        <a href = "#" className='text-[#083757] text-lg'>Recruiting</a>
                        <a href = "#" className='text-[#083757] text-lg'>Information Technology</a>
                        <a href = "#" className='text-[#083757] text-lg'>Marketing</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>Popular Features</h1>
                        <a href = "#" className='text-[#083757] text-lg'>Embed Calendly</a>
                        <a href = "#" className='text-[#083757] text-lg'>Availability</a>
                        <a href = "#" className='text-[#083757] text-lg'>Sending Notifications</a>
                        <a href = "#" className='text-[#083757] text-lg'>Using Calendly Mobile</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>Support</h1>
                        <a href = "#" className='text-[#083757] text-lg'>Help Center</a>
                        <a href = "#" className='text-[#083757] text-lg'>Video Tutorials</a>
                        <a href = "#" className='text-[#083757] text-lg'>Cookie Settings</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>Add-Ons</h1>
                        <a href = "#" className='text-[#083757] text-lg'>Download for Chrome</a>
                        <a href = "#" className='text-[#083757] text-lg'>Download for Firefox</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#083757] font-bold text-2xl'>Developers</h1>
                        <a href = "#" className='text-[#083757] text-lg'>Developer Tools</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between text-xs text-[#083757]'>
                <p>Copyright Calendly 2022</p>
                <p>Privacy/Terms and Conditions</p>
            </div>
        </div>
    </>
  )
}

export default Footer