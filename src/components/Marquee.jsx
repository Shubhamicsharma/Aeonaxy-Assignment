import Marquee from "react-fast-marquee";

import React from 'react'

const MarqueeContainer = () => {
  return (
    <>
        <div className="bg-[#F8F8F8] py-20 px-5 sm:px-10 md:px-16 lg:px-20 flex flex-col gap-16 place-items-center">

            <p className="text-xl sm:text-2xl md:text-3xl text-[#083757] font-black w-full sm:w-3/4 lg:w-2/4 text-center">Simplified scheduling for more than <span className="text-[#006BFF]">10,000,000</span> users worldwide</p>
            <Marquee
                autoFill = {true}
                className=""
            >
                <div className="mx-10">
                    <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png?20120913164145" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/244ce9c4c65c8425c8695a50ece73a4d/logo-ancestry.svg" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg" alt="" />
                </div>
                <div className="mx-10">
                    <img className="h-8" src="https://images.ctfassets.net/k0lk9kiuza3o/1Q5BQTaWAplnUICA96OWOw/be456a6b21b030de107077f2155ce467/Vector__22_.svg" alt="" />
                </div>
            </Marquee>
        </div>
    </>
  )
}

export default MarqueeContainer