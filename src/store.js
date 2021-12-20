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
            tempo: '',
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
            return state.airport
        },
        getAirport_arr: (state) => {
            return state.airport
        }

    },
    /* mutations can modify state`s data only / state.data (=this.data) */
    mutations :{
        selectDep(state){
            state.departure = state.target.value
            // eslint-disable-next-line no-console
            console.log(state.departure)
            // innertext 에 넣으면 상자가 없어짐. value는 인식을 못받음 아래것만 바뀌게 해야됨.
            state.shortFli = state.departure.slice(1, 3)
            // eslint-disable-next-line no-console
            console.log(state.shortFli)
        },
        shortFli(state){
            return state.departure.slice()      
          }
    }, 
    /* be able to use ajax */
    actions : {

    }
})

export default store