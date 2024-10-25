import React from 'react'
import heroImage from "../assets/hero-image.png"

const HeroSection = () => {
    return (
        <div className='flex items-center justify-center pl-10 pr-10 border h-heroHeight bg-heroBg'>
            <div className=''>
                <h3 className='py-2 text-2xl font-medium'> PROMOTE</h3>
                <h1 className='text-6xl font-bold font-starDos'> TECHNOLOGY <br />
                    INNOVATE LIVES</h1>
                <p className='py-2'> Promotes technological innovation, impacts lives through
                    digital solutions, and transforms the digital landscape through strategic insights.</p>
                <button className='relative w-40 pr-10 rounded-sm group btn bg-btnBg text-bgText hover:bg-btnHover' > Learn More <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="transition-all duration-300 ease-linear  absolute bottom-2.5 size-6 group-hover:ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </span>
                </button>
            </div>
            <img src={heroImage} alt="hero image" width={500} />
        </div>
    )
}

export default HeroSection