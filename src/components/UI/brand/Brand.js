import React from 'react';
import '../brand/style/brand.css';
import brands from '../../img/s10+.jpg'
function brand() {
    return (
        <div className='container-fuild row'>
        
                <div className="col-md-7 brands_description">
                    <h1>Future-ready</h1>
                    <h3>Bigger,better,faster</h3>
                    <p>The new <span>Galaxy S10 5G</span> is here</p>
                </div>

                <div className="col-md-5 brands_image">
                <img src={brands} alt=""/>
                </div>
        </div>
    )
}

export default brand
