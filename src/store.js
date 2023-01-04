import { createStore } from "vuex";
import axios from "axios";
import dotenv from "dotenv"; // make sure to hide api encoding code

dotenv.config();

const store = createStore({
  /* store the data */
  state: () => ({
    /* to search */
    isActive: false /* search 바 활성화 */,
    /* 모달에서 오는 출발, 도착 value에서 ..입력값..  */
    depPlandTime: "",
    depAirportNm: "",
    arrAirportNm: "",
    selectClass: "economy", // default
    totalPerson: 1, // default
    /* to modal*/
    /* 모달에서는 출발, 도착값을 받고 넘겨준다. */
    departure: "GMP ",
    arrival: "CJU ",
    airlineNm: "",
    airport_dep: "Gimpo International Airport",
    airport_arr: "Jeju International Airport",
    depAirportId: "NAARKSS",
    arrAirportId: "NAARKPC",
    /* temporary data for reverse departure to arrival */
    tem_short: "",
    tem_airport: "",
    tem_code: "",
    /* to ticketBox */
    d_placeholder: "Search country or city",
    a_placeholder: "Search country or city",
    tem_depNm: "Gimpo",
    tem_arrNm: "Jeju",
    depNm: "Gimpo",
    arrNm: "Jeju",
    tem_DepArrNm: "",
    depTime: [],
    depMin: [],
    arrTime: [],
    arrMin: [],
    exMonth: new Date().getMonth() + 1,
    exDate: new Date().getDate(),
    exTime: "",
    pageNo: 1,
    picked_from: new Date(),
    tickets: [],
    totalCount: 1,
    loading: false,
    noTicket: false,
  }),
  /* computed */
  getters: {
    shortDep: (state) => {
      return state.departure.slice(-4, -1);
    },
    shortArr: (state) => {
      return state.arrival.slice(-4, -1);
    },
    getAirport_dep: (state) => {
      return state.airport_dep;
    },
    getAirport_arr: (state) => {
      return state.airport_arr;
    },
  },
  /* mutations can modify state`s data only / state.data (=this.data) */
  mutations: {
    /* find parameter */
    updateState(state, payload) {
      /* Object.keys() 전달된 객체에서 직접 찾은, 열거할 수 잇는 속성 이름에 해당하는 문자열을 반환 */
      Object.keys(payload) // 새로운 배열데이터를 만들어줌 ['tickets', ]
        .forEach((key) => {
          state[key] = payload[key]; // 무엇을 추가하든 state에 존재하는 것이면 배열 데이터로 만들어줌
        });
    },
  },
  /* be able to use ajax, 비동기 */
  actions: {
    async searchInfo({ commit, dispatch }) {
      if (this.state.loading) return;
      commit("updateState", {
        loading: true,
        totalCount: 1,
      });
      try {
        const res = await dispatch("fetchInfo");
        const totalCount = res.data.reponse.body.totalCount;

        if (this.totalCount == 0) {
          commit("updateState", {
            noTicket: true,
          });
        }
        // eslint-disable-next-line no-console

        /*  const total = parseInt(totalCount, 10) // trans to the decimal system */
        const pageLength = Math.ceil(totalCount / 20);

        /* additional 추후에 무한 로딩 넣기 */
        if (pageLength > 1) {
          for (let pageNo = 2; pageNo <= pageLength; pageNo += 1) {
            const res = await dispatch("fetchInfo")({
              pageNo: pageNo,
            });
            const { item } = res.data.response.body.items.item;
            commit("updateState", {
              tickets: [...item],
            });
          }
        } else alert("there is no result..");
      } catch (message) {
        commit("updateState", {
          tickets: [],
        });
      }
    },
    /* 다른 페이지도 부를 수 있게 하는 함수 */
    /* actions 인자 context (state, mutations, getters), payload (request element) */
    /* fetchInfo 에서 에러를 잡고 사실상 에러없는 결과물은 searchInfo */
    async fetchInfo({ state, commit }) {
      try {
        dotenv.config();
        //const FLIGHT_API_KEY = process.env.VUE_APP_API_KEY;
        this.state.depPlandTime =
          +[state.picked_from.getFullYear()] +
          +[("0" + (state.picked_from.getMonth() + 1)).slice(-2)] +
          +[("0" + state.picked_from.getDate()).slice(-2)];
        /* use heroku for allow cors */
        /* const url = `https://john-i-gotta-go.herokuapp.com/http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&depAirportId=${state.depAirportId}&arrAirportId=${state.arrAirportId}&depPlandTime=${state.depPlandTime}&numOfRows=300&pageNo=${this.state.pageNo}&_type=json`; */
        const url =
          "https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=eixV3mOlRoqUyi%2BK9P6%2BS3BQMBXCroFM31lGc%2BOSp80JFNv7B8%2FiCEV49OSfF2bchwh5N7z50Sw8OQFWCkZbDg%3D%3D&pageNo=1&numOfRows=10&_type=json&depAirportId=NAARKJJ&arrAirportId=NAARKPC&depPlandTime=20201201&airlineId=AAR";
        state.exMonth = state.picked_from.getMonth() + 1;
        state.exDate = state.picked_from.getDate();

        axios.get(url).then((res) => {
          /* 하위 단위까지 모.두 경로를 써줘야됨 */
          const item = res.data.response.body.items.item;
          this.state.totalCount = res.data.response.body.totalCount;
          if (this.state.totalCount < 1) return this.state.noTicket;

          this.state.depTime = res.data.response.body.items.item.forEach(
            (obj) => {
              /* 보간법을 이용하면 function 가능 (object에 간섭을 안하므로 가능) */
              obj.depTime = `${obj.depPlandTime}`.slice(-4, -2);
              /* Object.values : make every Object to Array */
              return Object.values(obj);
            }
          );
          this.state.depMin = res.data.response.body.items.item.forEach(
            (obj) => {
              obj.depMin = `${obj.depPlandTime}`.slice(-2);
              return Object.values(obj);
            }
          );
          this.state.arrTime = res.data.response.body.items.item.forEach(
            (obj) => {
              obj.arrTime = `${obj.arrPlandTime}`.slice(-4, -2);
              return Object.values(obj);
            }
          );
          this.state.arrMin = res.data.response.body.items.item.forEach(
            (obj) => {
              obj.arrMin = `${obj.arrPlandTime}`.slice(-2);
              return Object.values(obj);
            }
          );

          // eslint-disable-next-line no-console
          console.log(
            res,
            this.state.loading,
            this.state.totalCount,
            this.state.noTicket
          );
          // eslint-disable-next-line no-console
          console.log(item, state.depPlandTime, state.exDate);
          commit("updateState", {
            /* copy for push array */
            tickets: [...item],
          });
          // eslint-disable-next-line no-console
          console.log(
            state.depAirportId,
            state.arrAirportId,
            state.depPlandTime,
            state.exMonth,
            state.exTime,
            this.state.loading
          );
          // eslint-disable-next-line no-console
          console.log(state.exMonth);

          /*  if(res.data.response.resultMsg){
                            reject(res.data.response.resultMsg)
                        } */
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error", err);
        throw err;
      }

      // requset element : depAirportId, arrAirportId, depPlandTime // chose certain airline : &airlineId=AAR

      /* declare the object from api call for using array (follow their own upper root, !camelCase!) */

      // 구조분해 -> payload ...  여기서 의문점은 다른 컴포넌트에서 쓰일 정보를 store에서 말고 다른 컴포넌트에서 가져와 payload 로 객체분해를 꼬옥 해야될까..?
      /* handle success */
      /* figure out only data (data -> response -> body -> item) */
    },
  },
});

export default store;
