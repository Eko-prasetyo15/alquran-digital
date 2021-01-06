import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadSurah } from '../actions/action'
import Header from '../partials/jumbotron'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'
import FlyingText from '../partials/flyingtext'

const Home = function () {
    const [surah, setSurah] = useState('')
    const [state, setState] = useState([])
    const [modalAudio, setModalAudio] = useState(false);

    const toggleaudio = () => setModalAudio(!modalAudio);
    const loadSurah = () => {
        return axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response")
                setSurah(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        loadSurah()
    }, [])

    const loadViewData = (data) => {
        sessionStorage.setItem("stepper", surah);
        window.location.assign(`/surah/${data}`);
    }


    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            {/* <img src="https://s.itl.cat/pngfile/s/38-389357_fasting-in-ramadan-quran-ramadan.jpg" classNameName="img-fluid" /> */}
            <Header />
            <Navbar />
            <FlyingText />
            <div className="row mr-3 ml-3 mt-2" >
                {surah && surah.map((item, index) => (
                    <div className="col-xl-4 col-sm-6 col-12" key={index}>
                        {/* <Link to="/surah" > */}
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center mr-1">
                                            <h7>{item.number_of_surah}.</h7>
                                        </div>
                                        <div className="media-body text-left">
                                            <Link onClick={() => loadViewData(item.number_of_surah)}>
                                                <a href='/surah' ><h6 className="primary">{item.name}</h6></a>
                                            </Link>
                                            <span >{item.name_translations.id}</span>
                                            <br></br>

                                        </div>
                                        <div className="align-self-center">
                                            {/* <i className="icon-rocket danger font-large-2 float-right"></i> */}
                                            <Link onClick={() => loadViewData(item.number_of_surah)}>
                                                <a href='' ><h4>{item.name_translations.ar}</h4></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href={item.recitation} target="_blank" rel="nofollow" title="alquran digital"><i className="fa fa-headphones mr-1"></i>recitation/murotal</a>
                                {/* <a type="button" class="btn btn-success mb-1 mt-0 " data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}><i className="fa fa-headphones mr-1"></i>recitation/murotal</a> */}
                            </div>

                        </div>
                        {/* </Link> */}
                    </div>
                ))}
            </div>
            <Footer />
            {/* <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Recitation/Murotal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <iframe src={item.recitation} width="470" height="250" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home