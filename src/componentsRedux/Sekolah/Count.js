import React from 'react'
// import {connect} from 'react-redux'
export default (props) => {
    const {jumlahSiswa } = props
    return (
        <div>
            <h1>total Jumlah {jumlahSiswa}</h1>    
        </div>
    )
}
