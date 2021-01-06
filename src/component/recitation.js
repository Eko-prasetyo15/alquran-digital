import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'

const Recitation = function (props) {
    const [dataTable, setDataTable] = useState('')
    const loadData = () => {
        return axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
            .then(function (response) {
                console.log("ada")
                console.log(response.data, "ini response")
                setDataTable(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Navbar />
            <br></br>
            <div className='container'>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="">
                                    <tr>
                                        <th scope="col">No. Surah</th>
                                        <th scope="col">Nama Surah</th>
                                        <th scope="col">Jumlah Ayat</th>
                                        <th scope="col">Jenis Surat</th>
                                        <th scope="col">Recitation/Murotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTable && dataTable.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.number_of_surah}</td>
                                            <td>{item.name}</td>
                                            <td>{item.number_of_ayah}</td>
                                            <td>{item.type}</td>
                                            <td><a href={item.recitation} target="_blank" rel="nofollow" title="alquran digital"><i className="fa fa-headphones mr-1"></i>'klik untuk mendengarkan'</a></td>
                                            {/* <td><a type="button" class="btn btn-success mb-1 mt-0 " data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}><i className="fa fa-headphones mr-1"></i>recitation/murotal</a></td> */}
                                        </tr>
                                    ))}
                                    {/* {nodes} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Recitation