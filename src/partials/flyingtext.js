import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';

const FlyingText = function () {
    const [jadwal, setJadwal] = useState('')
    const [shalat, setShalat] = useState('')

    const Date = moment().format("YYYY-MM-DD");
    console.log(Date, 'ini date')
    const loadJadwal = (Date) => {
        return axios.get(`https://api.pray.zone/v2/times/day.json?city=jakarta&date=${Date}`)
            .then(function (response) {
                console.log(response.data.results.datetime[0].times, "ini response")
                setJadwal(response.data.results.datetime[0].times)
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    console.log(jadwal, 'ini jadwal')
    console.log(jadwal.asr, 'ini asar')


    useEffect(() => {
        loadJadwal(Date)
    },[])
    useEffect(() => {
        let dataShalat = []
        // for (const [key, value] of Object.entries(tafsir)) {
        //     let bla = (`${key}: ${value}`)
        //     // console.log(`${key}`, "maping")
        //     console.log(bla, "maping vallue")
        //     console.log(typeof bla, 'type of')
        //     tewew.push(bla)
        // }
        var x;
        for (x in jadwal) {
            var txt = "";
            txt = `${x}. ${jadwal[x]}`
            dataShalat.push(txt)
        }
        console.log(dataShalat, 'ini data shalat')
        setShalat(dataShalat)
    }, [jadwal])
    console.log(shalat[0], 'wooooeeee')
    return (
        <div className='card' style={{ backgroundColor: 'white', color: 'blue' }}>
            <marquee><p className='mt-1 mb-1 mr-3'> Jadwal shalat Jakarta dan sekitarnya {Date} : '' {shalat[0]} || {shalat[2]} || {shalat[3]} || {shalat[4]} || {shalat[6]} || {shalat[7]} ''</p></marquee>
            
        </div>
    )
}

export default FlyingText