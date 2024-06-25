import React from 'react'
import image from "../assets/comingsoon.svg"

const ComingSoon: React.FC = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen px-4 py-16 bg-base-200">
            <img className='py-5 w-60 ' src={image} alt="Coming soon" />
            <p> Under Construction, Coming soon.. 😊</p>
        </div>

    )
}
export default ComingSoon