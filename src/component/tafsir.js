import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'


const Tafsir = function (props) {
    // let data = sessionStorage.getItem('stepper');
    const abc = window.location.href
    const def = abc.trim();
    const nomor = def.split('/')[4];

    const [select, setSelect] = useState('')
    const [options, setOptions] = useState('')
    const [tafsir, setTafsir] = useState('')
    const [translate, setTranslate] = useState('01')
    const [isCheck, setIsCheck] = useState(false)
    const [tes, setTes] = useState('')
    const [baru, setBaru] = useState([])

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
    const loadAyah = (options) => {
        return axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${options}.json`)
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response bawah")
                console.log(response.data.tafsir.id.kemenag.text, 'tafsir')
                setTes(response.data)
                // setAyat(response.data.verses)
                // setSurah(response.data.number_of_surah)
                setTafsir(response.data.tafsir.id.kemenag.text)
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    // const aku = Object.values(tafsir);
    // console.log(aku,'arayyyy')
    // const kamu = Object.keys(tafsir)
    useEffect(() => {
        let tewew = []
        // for (const [key, value] of Object.entries(tafsir)) {
        //     let bla = (`${key}: ${value}`)
        //     // console.log(`${key}`, "maping")
        //     console.log(bla, "maping vallue")
        //     console.log(typeof bla, 'type of')
        //     tewew.push(bla)
        // }
        var x;
        for (x in tafsir) {
            var txt = "";
            txt = `${x}. ${tafsir[x]}`
            tewew.push(txt)
        }
        console.log(tewew, 'ini tewew')
        setBaru(tewew)
    }, [tafsir])


    // console.log(baru, 'baru')

    useEffect(() => {
        loadSurah()
        loadAyah(options)
    }, [options])
    return (
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
                {/* <div className="col-xl-2 col-sm-6 col-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={onChangeTerjemah}>
                        <option selected>Terjemahan</option>
                        <option value='01'>Indonesia</option>
                        <option value='02'>English</option>
                    </select>
                </div> */}
            </div>
            <div className="mr-5 ml-5 mt-5">
                {baru && baru.length > 0 ? (<h5 className="mr-3 ml-3"><strong>Tafsir : KEMENAG</strong></h5>) : null}
                <br></br>
                {baru && baru.map((data, index) => {
                    console.log(data, "wew")
                    return (
                        <>
                            <p className="mr-3 ml-3"key={index}>{data}</p>
                            <hr></hr>
                            <br></br>
                        </>
                    )                
                })}
                {/* {tafsir && tafsir.map((item, index) => (
                    <div key={index}>
                        <p>{console.log(item, 'uuuuu')}</p>
                        <span class="badge bg-primary">{surah}:{item.number}</span>
                        <p className="text-right mr-3 ml-3"><strong>{item.text}</strong></p>
                        <br></br>
                        <p className="text-right mr-3 ml-3">{translate === '01' ? item.translation_id : item.translation_en}</p>
                        <hr className="ml-3"></hr>
                    </div>
                ))} */}
            </div>
            <Footer />
        </div>
    )
}

export default Tafsir