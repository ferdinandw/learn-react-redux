import React from 'react'
import {connect} from 'react-redux';

const Count = (props) => {
    const {jumlahSiswa } = props
    return (
        <div>
            <h1>total Jumlah {jumlahSiswa}</h1>    
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        jumlahSiswa: state.jumlahSiswa
    }
    
}

export default connect(mapStateToProps)(Count)
