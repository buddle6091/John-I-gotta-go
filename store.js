import { createStore } from 'vuex'
import axios from 'axios'
import dotenv from 'dotenv' // make sure to hide api encoding code

const store = createStore({
    //namespaced: true,
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
            /* Essential API Request elements  */
            /* temporary data for reverse departure to arrival */
            tem_short: '',
            tem_airport: '',
            tem_code: '',
            picked_from: new Date(),
            depAirportId: 'NAARKSS',
            arrAirportId: 'MAARKPC',
            search_result: {}
    }),
    /* computed */
    getters: {
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
        },
        depPlandTime: (state) => {
            return [state.picked_from.getFullYear()] + [("0" + (state.picked_from.getMonth() + 1)).slice(-2)] + [("0" + state.picked_from.getDate()).slice(-2)];
        }
    },
    /* mutations can modify state`s data only / state.data (=this.data) */
    mutations :{
        /* getValue (state, data) {

        } */
    }, 
    /* be able to use ajax, 비동기 */
    actions : {
        async searchInfo({ state }, payload){
            //처음에 기본값은 디스플레이상의 기본값이라 서치 눌러도 값이 넘어가지 않음
            // 빌드 버전 업로드 전에 dotenv axios 문제해결 되면 api 키 가리기
            dotenv.config();
            // 구조분해 -> payload
            // const { dep_code, arr_code } = payload;
            const FLIGHT_API_KEY = 'gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D';
            const { depPlandTime } = payload
            //*        this.$store.state.depPlandTime = [this.$store.state.picked_from.getFullYear()] + [("0" + (this.$state.store.picked_from.getMonth() + 1)).slice(-2)] + [("0" + this.$state.store.picked_from.getDate()).slice(-2)];
            // Essential request element : depAirportId, arrAirportId, deplandTime / numOfRows, pageNo (certain airline -> airlineId=AAR)
            const res = await axios.get(`http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&numOfRows=10&pageNo=1&depAirportId=${state.depAirportId}&arrAirportId=${state.arrAirportId}&depPlandTime=${depPlandTime}`)
            /* handle success */
            // eslint-disable-next-line no-console
            console.log(state.depAirportId, state.arrAirportId)
            // eslint-disable-next-line no-console
            console.log(depPlandTime);
            // eslint-disable-next-line no-console
            console.log(res.data.response.body);
          } 
    }
})

export default store