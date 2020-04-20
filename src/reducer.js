const initialState = {
    jumlahSiswa: 1000,
    nilaiSiswa: 0
}

const TAMBAHSISWA = `TAMBAHSISWA`;
const DROPOUT = `DROPOUT`;
export {
    TAMBAHSISWA,
    DROPOUT
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case 'TAMBAHSISWA':
            return Object.assign( {}, state,{jumlahSiswa: state.jumlahSiswa + 1})
        case 'DROPOUT':
            return Object.assign( {}, state,{jumlahSiswa: state.jumlahSiswa - 1})
        case 'TAMBAHNILAI':
        case 'KURANGNILAI':
        default:
            return state;
    }
}