import React from 'react'
import ComingSoon from './ComingSoon'


const Mission: React.FC = () => {
    const title = "Mission section: coming soon 😊"
    return (
        <div id='mission'>

            <ComingSoon title={title} />
        </div>
    )
}

export default Mission