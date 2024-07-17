import React from 'react'
import heroImage from "../assets/hero-image.png"

const HeroSection = () => {
    return (
        <div className='flex items-center justify-around pl-5 pr-5 border h-heroHeight bg-heroBg'>
            <div className=''>
                <h3 className='py-2 text-2xl'> PROMOTE</h3>
                <h1 className='text-6xl '> TECHNOLOGY <br />
                    INNOVATE LIVES</h1>
                <p className='py-2'> Promotes technological innovation, impacts lives through
                    digital solutions, and transforms the digital landscape through strategic insights.</p>
                <button className='rounded-sm btn'> Learn More <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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