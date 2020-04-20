import React from 'react';
import Count from './Count'
export default (props) => {
    const {jumlahSiswa} = props;
    return(
        <div>
            <h1>Jumlah anak Sekolah di sini adalah : {jumlahSiswa}</h1>
            <Count jumlahSiswa = {jumlahSiswa}/>
        </div>
    )
}
// export default Index