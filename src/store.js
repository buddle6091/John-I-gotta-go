import { createStore } from 'vuex'
import axios from 'axios'
import dotenv from 'dotenv' // make sure to hide api encoding code

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
            depAirportId: 'NAARKSS',
            arrAirportId: 'NAARKPC',
            /* temporary data for reverse departure to arrival */
            tem_short: '',
            tem_airport: '',
            tem_code: '',
            picked_from: new Date(),
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
        async searchInfo({state}, ){
            //처음에 기본값은 디스플레이상의 기본값이라 서치 눌러도 값이 넘어가지 않음
            // 빌드 버전 업로드 전에 dotenv axios 문제해결 되면 api 키 가리기
            dotenv.config();
            // 구조분해 -> payload
            const FLIGHT_API_KEY = 'gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D';
            const depPlandTime = [state.picked_from.getFullYear()] + [("0" + (state.picked_from.getMonth() + 1)).slice(-2)] + [("0" + state.picked_from.getDate()).slice(-2)];
            // requset element : depAirportId, arrAirportId, depPlandTime // chose certain airline : &airlineId=AAR
            // 7일 할일 : COMMIT 으로 state 값을 변경 한것으로 ajax 하기
            axios.get(`http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&numOfRows=10&pageNo=1&depAirportId=${state.depAirportId}&arrAirportId=${state.arrAirportId}&depPlandTime=${depPlandTime}`)
            /* handle success */
            .then((res) => {
              /* figure out only data (data -> response -> body -> item) */
              // eslint-disable-next-line no-console
              console.log(state.depAirportId, state.arrAirportId)
              // eslint-disable-next-line no-console
              console.log(depPlandTime)
              // eslint-disable-next-line no-console
              console.log(res.data.response.body)
              // eslint-disable-next-line no-console
              console.log(res.data) 
            })
            // eslint-disable-next-line no-console
            //console.log(this.$store.state.depPlandTime)
          } 
    }
})

export default store