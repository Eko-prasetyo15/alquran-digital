import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'


const Page = function (props) {
    // let data = sessionStorage.getItem('stepper');
    const abc = window.location.href
    const def = abc.trim();
    const nomor = def.split('/')[4];
    const [ayat, setAyat] = useState('')
    const [surah, setSurah] = useState('')
    const [select, setSelect] = useState('')
    const [options, setOptions] = useState('')
    const [tafsir, setTafsir] = useState('')
    const [translate, setTranslate] = useState('01')
    const [isCheck, setIsCheck] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onChangeSurah = (e) => {
        console.log(e.target.value, "target")
        setOptions(e.target.value)
    }
    const onChangeTerjemah = (e) => {
        console.log(e.target.value, "terjemah")
        setTranslate(e.target.value)
    }
    const loadSurah = () => {
        return axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response")
                setSelect(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const loadAyah = (nomor) => {
        return axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${nomor}.json`)
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response bawah")
                console.log(response.data.tafsir.id.kemenag.text, 'tafsir')
                setAyat(response.data.verses)
                setSurah(response.data.number_of_surah)
                setTafsir(response.data.tafsir.id.kemenag.text)
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    const newLoad = (options) => {
        return axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${options}.json`)
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response")
                setIsLoading(response.data)
                setAyat(response.data.verses)
                setSurah(response.data.number_of_surah)
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    useEffect(() => {
        loadSurah()
        loadAyah(nomor)
        if (options) {
            newLoad(options)
        }

    }, [options])
    console.log(translate, 'translate')
    return (
        <>
            <div style={{ backgroundColor: '#F0F8FF' }}>
                <Navbar />
                <br></br>
                <div className='row justify-content-center'>
                    <div className="col-xl-2 col-sm-6 col-6">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={onChangeSurah}>
                            <option selected>Pilih Surah</option>
                            {select && select.map(data => {
                                return (
                                    <option key={data.number_of_surah} value={data.number_of_surah}>{data.name} || {data.name_translations.ar}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-6">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={onChangeTerjemah}>
                            <option selected>Terjemahan</option>
                            <option value='01'>Indonesia</option>
                            <option value='02'>English</option>
                        </select>
                    </div>
                    {/* <div className="col-xl-2 col-sm-6 col-6">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Tafsir</label>
                    </div>
                </div> */}
                </div>
                        <div className="mr-5 ml-5 mt-5">
                            {ayat && ayat.map((item, index) => (
                                <div key={index}>
                                    <span class="badge bg-primary">{surah}:{item.number}</span>
                                    <p className="text-right mr-3 ml-3"><strong>{item.text}</strong></p>
                                    <br></br>
                                    <p className="text-right mr-3 ml-3">{translate === '01' ? item.translation_id : item.translation_en}</p>
                                    <hr className="ml-3"></hr>
                                </div>
                            ))}
                        </div>
                <Footer />
            </div>
        </>
    )
}

export default Page