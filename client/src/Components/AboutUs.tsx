import React from 'react'
import itSolution from "../assets/itSolution.svg"
import continuousLearning from "../assets/continuousLearning.svg"
import workshop from "../assets/workshop.svg"


export const AboutUs: React.FC = () => {
    return (
        <div id='about' className='flex'>
            <div className="grid w-1/2 grid-cols-5 pt-10 grid-rows-8 gap-7 ">
                <div className="w-32 h-32 col-start-2 col-end-3 row-start-1 row-end-3 border rounded shadow-lg">
                    <img src={itSolution} alt="IT solution" />
                </div>
                <div className="w-32 h-32 col-start-2 col-end-3 row-start-3 row-end-5 border rounded shadow-lg ">
                    <img src={continuousLearning} alt="Continuous Learning" />
                </div>
                <div className="w-32 h-32 col-start-3 col-end-4 row-start-2 row-end-4 ml-4 border rounded shadow-lg">
                    <img src={workshop} alt="Workshop" />
                </div>
            </div>


            <div className='grid w-1/2 grid-cols-2 border-2'>
                <p className='border'> part two </p>
                <p className='col-span-2 border'> part two </p>
                <p className='border'> part two </p>

            </div>
        </div>

    )
}