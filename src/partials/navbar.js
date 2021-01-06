import React, { useState, useEffect } from 'react'
import moment from 'moment';


const Navbar = function () {
    const [time, setTime] = useState('')
    // var moment = require('moment');
    const Date = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(Date, 'daateee')
    useEffect (() => {
        setTime(Date)
    },[])  

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0a1c2e" }}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="/" >AbuShanum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/surah" style={{ color: 'white' }}>Surah</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                Kajian Sunnah
                             </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="https://www.youtube.com/user/rodjatv">Rodja Tv</a></li>
                                <li><a class="dropdown-item" href="https://www.youtube.com/user/moslemchannel">Yufid</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="https://www.youtube.com/channel/UC-tEtTRwEpRmlo26dGTpanA">Ashiil Tv</a></li>
                                <li><a class="dropdown-item" href="https://www.youtube.com/user/rodjabdg">Tarbiyah Sunnah</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/tafsir" style={{ color: 'white' }}>Tafsir</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://haditsarbain.com/" target="_blank" rel="nofollow" title="alquran digital" style={{ color: 'white' }}>Hadist Arba'in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/recitation" style={{ color: 'white' }}>Murotal</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/user/rodjatv" target="_blank" rel="nofollow" title="alquran digital" style={{ color: 'white' }}>Kajian Sunnah</a>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{ color: 'blue' }}>
                        {time}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar