import React from 'react';
import Count from './Count'
export default (props) => {
    const {jumlahMurid} = props;
    return(
        <div>
            <h1>Jumlah anak Sekolah di sini adalah : {jumlahMurid}</h1>
            <Count jumlahMurid = {jumlahMurid}/>
        </div>
    )
}
// export default Index