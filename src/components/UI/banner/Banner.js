import React from 'react'
import video from '../../video/videoplayback.mp4'
function brand() {
    return (
        <div className="container-fuild">
            <div className="overlay"></div>
                <video  width="100%" height="50%" loop="true" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video} type="video/mp4"/>
                </video>
        </div>
    )
}

export default brand
