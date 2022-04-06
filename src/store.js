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
            depNm: '',
            arrNm: '',
            airlineNm: '',
            airport_dep: 'Gimpo International Airport',
            airport_arr: 'Jeju International Airport',
            depAirportId: 'NAARKSS',
            arrAirportId: 'NAARKPC',
            /* temporary data for reverse departure to arrival */
            tem_short: '',
            tem_airport: '',
            tem_code: '',
            picked_from: new Date(),
            tickets: [],
            loading: false   
        }),
    /* computed */
    getters :{
        shortDep: (state) => {
            return state.departure.slice(-4, -1)
        },
        shortArr: (state) => {
            return state.arrival.slice(-4, -1)
        },   
        getAirport_dep: (state) => {
            return state.airport_dep
        },
        getAirport_arr: (state) => {
            return state.airport_arr
        },
    },
    /* mutations can modify state`s data only / state.data (=this.data) */
    mutations :{
        /* find parameter */
        updateState (state, payload) {
            /* Object.keys() 전달된 객체에서 직접 찾은, 열거할 수 잇는 속성 이름에 해당하는 문자열을 반환 */
            Object.keys(payload)  // 새로운 배열데이터를 만들어줌 ['tickets', ]
            .forEach(key => {
                state[key] = payload[key]  // 무엇을 추가하든 state에 존재하는 것이면 배열 데이터로 만들어줌
            })
        },
    /*     Eng_Dep (state) {
            if ()
        }
         */
    }, 
    /* be able to use ajax, 비동기 */
    actions : {
        /* actions 인자 context & payload 굳이 써야할까 */
        /* 다른 페이지도 부를 수 있게 하는 함수 */
        fetchInfo ({ state, commit }, pageNo) {
            //처음에 기본값은 디스플레이상의 기본값이라 서치 눌러도 값이 넘어가지 않음
            // 빌드 버전 업로드 전에 dotenv axios 문제해결 되면 api 키 가리기
            dotenv.config()
            const FLIGHT_API_KEY = 'gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D';
            const depPlandTime = [state.picked_from.getFullYear()] + [("0" + (state.picked_from.getMonth() + 1)).slice(-2)] + [("0" + state.picked_from.getDate()).slice(-2)]
            const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&depAirportId=${this.state.depAirportId}&arrAirportId=${this.state.arrAirportId}&depPlandTime=${depPlandTime}&numOfRows=20&pageNo=${pageNo}&_type=json`
            
            return new Promise((resolve, reject) => {
                // requset element : depAirportId, arrAirportId, depPlandTime // chose certain airline : &airlineId=AAR
                axios.get(url)
                    .then(res => {
                        /* 하위 단위까지 모.두 경로를 써줘야됨 */
                        const item  = res.data.response.body.items.item
                        this.state.depNm = item.depAirportNm
                        this.arrNm = item.arrAirportNm
                        this.airlineNm = item.airlineNm
                        // eslint-disable-next-line no-console
                        console.log(item)
                        // eslint-disable-next-line no-console
                        console.log(res.data.response.body.items)
                        commit('updateState', {
                            tickets: item,

                        })
                        resolve(res)
                        // eslint-disable-next-line no-console
                        console.log(state.depAirportId, state.arrAirportId, depPlandTime)
                        // eslint-disable-next-line no-console
                        console.log(item[0].depPlandTime)
                        
                        if(res.data.response.resultMsg){
                            reject(res.data.response.resultMsg)
                        }
                    })
                    .catch(err => {
                        reject(err.message)
                    })
             
                /* declare the object from api call for using array (follow their own upper root, !camelCase!) */
                 
                // 구조분해 -> payload ...  여기서 의문점은 다른 컴포넌트에서 쓰일 정보를 store에서 말고 다른 컴포넌트에서 가져와 payload 로 객체분해를 꼬옥 해야될까..?
                /* handle success */
                /* figure out only data (data -> response -> body -> item) */
                
            })            
        },
        /* 실질적으로 버튼을 누르면 항공권의 초기 정보를 넘기는 버튼
        -> 20개단위로 처음에 보여주고, 여기서 스크롤을 더 내리면 그 다음 pageNo로 넘어가서 20개씩 산출*/
       /* async 문에서는 try & catch */
        async searchInfo ({ commit, dispatch }){
            try {
                // eslint-disable-next-line no-undef
                const res = await dispatch('fetchInfo')({
                    pageNo: 1
                })
                const { item } = res.data.response.body.items.item
                commit('updateState',{
                    loading: true,
                    tickets: item
                })
                const { totalCount } = res.data.reponse.body
                
                /* additional  */
                if (totalCount > 1) {
                  for (let i = 2; i <= totalCount; i++){
                      if (i > totalCount) break
                      await dispatch('fetchInfo', i)
                  }
                }
            } catch (resultMsg) {
                commit('updateState', 
                resultMsg)
            }
        }
    },
    })

export default store 