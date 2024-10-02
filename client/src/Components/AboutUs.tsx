import React from 'react'
import itSolution from "../assets/itSolution.svg"
import continuousLearning from "../assets/continuousLearning.svg"
import workshop from "../assets/workshop.svg"


export const AboutUs: React.FC = () => {
    return (
        <div id='about' className='flex flex-wrap pt-10 md:flex-nowrap bg-heroBg'>
            <div className="grid grid-cols-5 grid-rows-5 pt-10 md:w-1/2 gap-7 ">
                <div className="col-start-2 col-end-3 row-start-1 row-end-3 border rounded shadow-lg h-36 w-36 hover:shadow-xl">
                    <img src={itSolution} alt="IT solution" />
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-5 border rounded shadow-lg h-36 w-36 hover:shadow-xl">
                    <img src={continuousLearning} alt="Continuous Learning" />
                </div>
                <div className="col-start-3 col-end-4 row-start-2 row-end-4 ml-20 border rounded shadow-lg md:ml-8 h-36 w-36 hover:shadow-xl">
                    <img src={workshop} alt="Workshop" />
                </div>
            </div>


            <div className=' md:w-1/2'>
                <h2 className='text-3xl font-bold'> What we do...</h2>
                <p className='pb-8'> We are committed to revolutionizing the digital landscape through our innovative services and solutions.</p>

                <ul className='list-image-triangle'>
                    <li className='mb-5 font-bold'>
                        <p className='absolute '>Workshops and Training </p>
                        <p className='pt-5 font-normal'>
                            Create a recognizable and trustworthy brand that resonates deeply with our target audience, reflecting our values and commitment to excellence.
                        </p>
                    </li>

                    <li className='pb-4 font-bold'>IT & Software solution <br />
                        <span className='font-normal'>
                            Delivering innovative IT and software solutions tailored to meet your plans and ideas and overcome its challenges, ensuring everything  works together smoothly
                        </span>
                    </li>
                    <li className='font-bold '> Continuous Learning and Adaption <br />
                        <span className='font-normal'>
                            Cultivating a culture of ongoing learning and adaptability within your organization to stay ahead in the ever-evolving digital landscape.
                        </span>
                    </li>
                </ul>

            </div>
        </div>
    )
}