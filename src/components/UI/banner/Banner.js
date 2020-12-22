import React from 'react'
import video from '../../video/videoplayback.mp4'
function brand() {
    return (
        <div className="container-fluid">
            <div className="overlay"></div>
                <video  width="100%" height="50%" loop="true" autoplay="true" autoplay playsinline  preload="auto" controls muted autoPlay="true">
                <source src={video} type="video/mp4"/>
                </video>
        </div>
    )
}

export default brand
