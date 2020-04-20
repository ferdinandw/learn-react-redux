import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {TAMBAHSISWA, DROPOUT, TAMBAHNILAI, KURANGNILAI} from './../../reducer'

const Index = (props) => {
    const {jumlahSiswa, nilaiSiswa} = props;
    // const { dataJumlahMurid } = props;
    // const [jumlahMurid, setJumlahMurid] = useState(props.jumlahMurid);
    // const [nilaiSiswa, setNilaiSiswa] = useState(90);

    const tambahSiswa= () => {
        props.dispatch({type: TAMBAHSISWA})  
    }
    const dropOut = () => {
        props.dispatch({type: DROPOUT})
    }
    const tambahNilai = () =>{
        props.dispatch({type: TAMBAHNILAI})
    }
    const kurangNilai = () => {
        props.dispatch({type: KURANGNILAI})
    }


    // useEffect(() => {
    //     console.log(`use effect jumlah murid`, jumlahMurid)
    //     dataJumlahMurid(jumlahMurid)
    // }, [jumlahMurid,dataJumlahMurid])
    // useEffect(() => {
    //     console.log(`use effect nilai siswa`, nilaiSiswa)
    // }, [nilaiSiswa])


    return(
        <div>
            <div>
            <button onClick={tambahSiswa}>Tambah</button>
            <button onClick={dropOut}>Drop Out</button>
            </div>
            <div>
                Jumlah murid : {jumlahSiswa}
            </div>
            <div>
                Nilai : 
                <button onClick={tambahNilai}>Tambah</button>
                <button onClick={kurangNilai}>Kurang</button>
            </div>
            <div>
                Nilai siswa Adalah {nilaiSiswa}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jumlahSiswa: state.jumlahSiswa,
        nilaiSiswa: state.nilaiSiswa
    }
}

export default  connect(mapStateToProps) (Index);