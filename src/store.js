import { createStore } from 'vuex'

const store = createStore({
    /* store the data */
    state: () => ({
            /* to search */
            /* 모달에서 오는 출발, 도착 value에서  */
            selectClass: '',
            depPlandTime: '',
            /* to modal*/
            /* 모달에서는 출발, 도착값을 받고 넘겨준다. */
            departure: 'GMP ',
            arrival: 'CJU ',
            airport_dep: 'Gimpo International Airport',
            airport_arr: 'Jeju International Airport',
            dep_code: '',
            arr_code: '',
            /* temporary data for reverse departure to arrival */
            tem_short: '',
            tem_airport: '',
            //tem_code: '',
    }),
    /* computed */
    getters :{
        shortDep: (state) => {
            return state.departure.slice(-4, -1)
        },
        shortFli: (state) => {
            return state.arrival.slice(-4, -1)
        },   
        getAirport_dep: (state) => {
            return state.airport_dep
        },
        getAirport_arr: (state) => {
            return state.airport_arr
        }

    },
    /* mutations can modify state`s data only / state.data (=this.data) */
    mutations :{
        
    }, 
    /* be able to use ajax, 비동기 */
    actions : {

    }
})

export default store