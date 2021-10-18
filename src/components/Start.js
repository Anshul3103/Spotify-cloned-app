import React from 'react'
import "../CSS/Start.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
function Start({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
                <Footer/>
            </div>


        </div>
    )
}

export default Start
