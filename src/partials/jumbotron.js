import React from 'react'
import alquran from '../alquran.png'
const Header = function() {

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={alquran} className="d-block w-100" alt='alquran' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header