const initialState = {
    jumlahSiswa: 1000,
    nilaiSiswa: 0
}

const TAMBAHSISWA = `TAMBAHSISWA`;
const DROPOUT = `DROPOUT`;
const TAMBAHNILAI = `TAMBAHNILAI`;
const KURANGNILAI = `KURANGNILAI`;
export {
    TAMBAHSISWA,
    DROPOUT,
    TAMBAHNILAI,
    KURANGNILAI
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case 'TAMBAHSISWA':
            return Object.assign( {}, state,{jumlahSiswa: state.jumlahSiswa + 1})
        case 'DROPOUT':
            return Object.assign( {}, state,{jumlahSiswa: state.jumlahSiswa - 1})
        case 'TAMBAHNILAI':
            return Object.assign( {}, state,{nilaiSiswa: state.nilaiSiswa + 1})
        case 'KURANGNILAI':
            return Object.assign( {}, state,{nilaiSiswa: state.nilaiSiswa - 1})
        default:
            return state;
    }
}