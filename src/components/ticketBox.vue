<template>
  <div>
    <div v-if="$store.state.loading == true">
      <div v-for="skeleton in 5" :key="skeleton">
        <div class="skeleton">
          <div class="skeleton ticket">
            <div class="skeleton airlineImg"></div>
            <div
              :style="{
                flexDirection: 'column',
                display: 'inline-block',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '1.3rem',
              }">
              <div class="skeleton flightInfo small-text"></div>
              <div class="skeleton flightInfo middle-text"></div>
              <div class="skeleton flightInfo small-text"></div>
            </div>
            <div
              :style="{
                flexDirection: 'column',
                display: 'inline-block',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '1.3rem',
              }">
              <div class="skeleton flightInfo small-text"></div>
              <div class="skeleton flightInfo middle-text"></div>
              <div class="skeleton flightInfo small-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="howtouse"
      :style="{ display: $store.state.isActive ? 'none' : true }">
      <h2>🤷‍♂️How to use 'John, I gotta go'🤷</h2>
      <br />
      <p>
        1. If you wanna search your destination, click on the container at the
        top.
      </p>
      <br />
      <p>
        2. Click the arrival - destination zone, and choose arrival, destination
        in modal window.
      </p>
      <br />
      <p>2-1. Across arrow button can switch arrival to destination.</p>
      <br />
      <p>
        2-2. Please understand that we only support 'One way' at the moment.
        Also only domestic line :)
      </p>
      <br />
      <p>3. And then, choose flight date, people and class.</p>
      <br />
      <p>
        4. After click 'search' button, available tickets will be right here.
      </p>
      <br />
      <p>
        5. Thank you for using 'John, I gotta go' and hope it will help you on
        your journey🛫.
      </p>
      <br />
    </div>

    <div class="notFound" v-if="$store.state.totalCount == 0">
      <img src="./no_result.png" />
      <div class="underShadow"></div>
      <h2>Sorry, there is no ticket today :(</h2>
      <br />
      <p>How about change your flight date?</p>
    </div>

    <div class="totalContainer">
      <div v-for="ticket in tickets" :key="ticket" :ticket="ticket">
        <div
          class="ticketBox"
          @click="ticket.unfold = !ticket.unfold"
          :style="{
            height: ticket.unfold ? `300px` : `100px`,
            transition: ticket.unfold ? '0.6s' : '0.8s',
          }">
          <div class="firstDisplay">
            <div class="flightDetail">
              <div class="detailLabel">Departures</div>
              {{ shortDep }}
              <div class="detailLabel">
                {{ getAirport_dep }}
              </div>
            </div>
            <div class="flightDetail">
              <div class="animContainer" style="left: -20px">
                <div class="animation">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <div class="animContainer" style="left: 30px">
                <div class="animation">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <img
                src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
                :style="Airplane_in" />
            </div>
            <div class="flightDetail">
              <div class="detailLabel">Arrivals</div>
              {{ shortArr }}
              <div class="detailLabel">
                {{ getAirport_arr }}
              </div>
            </div>
          </div>

          <div
            class="first"
            :style="{
              transform: ticket.unfold
                ? 'rotate3d(1, 0, 0, -180deg)'
                : 'rotate3d(1, 0, 0, 0deg)',
              transition: ticket.unfold ? '0.4s' : '1s',
            }">
            <div class="firstTop">
              <img
                src="./jejuairline_white.png"
                :style="{ width: '7.2em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '제주항공'" />
              <img
                src="./ASIANA_airline.png"
                :style="{ width: '7.5em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '아시아나항공'" />
              <img
                src="./JINAIR_airline.png"
                :style="{ width: '6.9em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '진에어'" />
              <img
                src="./JEJU_airline.png"
                :style="{ width: '7.5em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '에어서울'" />
              <img
                src="./KOREAN_airline.png"
                :style="{
                  width: '7.5em',
                  height: 'auto',
                  margin: 'auto',
                  marginTop: '-0.7rem',
                }"
                v-if="ticket.airlineNm == '대한항공'" />
              <img
                src="./BUSAN_airline.png"
                :style="{ width: '7.5em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '에어부산'" />
              <img
                src="./TWAY_airline.png"
                :style="{ width: '4.2em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '티웨이항공'" />
              <img
                src="./EASTAR_airline.png"
                :style="{ width: '7.5em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '이스타항공'" />
              <img
                src="./HI_AIR_airline.png"
                :style="{ width: 'auto', height: '4.2em', margin: 'auto' }"
                v-if="ticket.airlineNm == '하이에어'" />
              <img
                src="./FLY_GANGWON_airline.png"
                :style="{ width: '7.5em', height: 'auto', margin: 'auto' }"
                v-if="ticket.airlineNm == '플라이강원'" />

              <div class="timeContainer">
                <!--날짜, 시간 장소 등을 저장할 공간-->
                <div class="dateContainer">
                  <!--출발지-->
                  {{ depNm }}
                  <!--시간-->
                  <div class="detailtime">
                    {{ ticket.depTime }}:{{ ticket.depMin }}
                  </div>
                  <!--날짜-->
                  {{ ex_month }} {{ this.$store.state.exDate }}
                </div>
                <img
                  alt="비행기"
                  src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
                  :style="Airplane_out" />
                <!--날짜, 시간 장소 등을 저장할 공간-->
                <div class="dateContainer">
                  <!--출발지-->
                  {{ arrNm }}
                  <!--시간-->
                  <div class="detailtime">
                    {{ ticket.arrTime }}:{{ ticket.arrMin }}
                  </div>
                  <!--날짜-->
                  {{ ex_month }} {{ this.$store.state.exDate }}
                </div>
              </div>
            </div>
            <div class="firstBehind">
              <div class="firstBehindDisplay">
                <div class="firstBehindRow">
                  <div class="detail">
                    Flight Time
                    <div class="detailLabel">
                      {{ ticket.depTime }}:{{ ticket.depMin }} -
                      {{ ticket.arrTime }}:{{ ticket.arrMin }}
                    </div>
                    <!-- arrPlandTime - depPlandTime -->
                  </div>
                  <div class="detail">
                    Transfer
                    <div class="detailLabel">No Transfer</div>
                  </div>
                </div>
                <div class="firstBehindRow">
                  <div class="detail">
                    Duration
                    <div class="detailLabel">about 1hour</div>
                  </div>
                  <div class="detail">
                    Flight Num
                    <div class="detailLabel">{{ ticket.vihicleId }}</div>
                  </div>
                </div>
                <div class="firstBehindRow">
                  <div class="detail">
                    Boarding Time
                    <div class="detailLabel">
                      {{ ticket.depTime }}:{{ ticket.depMin }} - 20min
                    </div>
                    <!-- depPlandTime - 20min -->
                  </div>
                  <div class="detail">
                    People
                    <div class="detailLabel">
                      {{ $store.state.totalPerson }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="second"
                :style="{
                  transform: ticket.unfold
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transition: ticket.unfold ? '0.8s' : '0.8s',
                }">
                <div class="secondTop" />
                <div class="secondBehind">
                  <div class="secondBehindDisplay">
                    <div class="price">
                      Price
                      <div class="priceLabel">please check in website</div>
                    </div>
                    <div class="price">
                      Class
                      <div class="priceLabel">
                        {{ $store.state.selectClass }}
                      </div>
                    </div>
                    <img
                      id="barCode"
                      src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true" />
                  </div>

                  <div
                    class="third"
                    :style="{
                      transform: ticket.unfold
                        ? `rotate3d(1, 0, 0, -180deg)`
                        : `rotate3d(1, 0, 0, 0deg)`,
                      transition: ticket.unfold ? '1s' : '0.4s',
                    }">
                    <div class="thirdTop" />
                    <div class="secondBehindBottom">
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.jejuair.net/ko/ibe/booking/Availability.do'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '제주항공'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://flyasiana.com/I/KR/KO/LowerPriceSearchList.do?menuId=CM201802220000728256&utm_source=google_pc&utm_medium=cpc&utm_campaign=brand_basic_creative&utm_content=&utm_term=&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45bR1j-o5izxMY3T37Abkzw3P8AHcYDdFfVSB2sFDm5z-qeb_HtM4fYaAn-ZEALw_wcB'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '아시아나항공'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.jinair.com/booking/index?&ctrCd=KOR&snsLang=ko_KR&cid=BC_affiliate_AirMoney_PC_null_20200801'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '진에어'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://flyairseoul.com/I/ko/viewBooking.do'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '에어서울'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.koreanair.com/kr/ko'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '대한항공'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.airbusan.com/content/individual/'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '에어부산'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.twayair.com/app/main'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '티웨이항공'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.eastarjet.com/newstar/PGWHC00001?lang=KR'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '이스타항공'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://www.hi-airlines.com/'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '하이에어'">
                        Booked in airline website
                      </Button>
                      <Button
                        layout="href"
                        color="base"
                        onclick="location.href='https://flygangwon.com/ko/main/main.do'"
                        style="font-size: 17px"
                        v-if="ticket.airlineNm == '플라이강원'">
                        Booked in airline website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../UI/UI/neumorphism/button/Button.vue";
import { mapState, mapGetters } from "vuex";
export default {
  props: {},
  name: "TicketBox",

  methods: {},

  mounted() {},

  components: {
    Button: Button,
  },

  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    ...mapState(["depNm", "arrNm", "airlineNm", "selectClass"]),
    ...mapGetters({
      shortDep: "shortDep",
      shortArr: "shortArr",
      getAirport_dep: "getAirport_dep",
      getAirport_arr: "getAirport_arr",
      getAirline: "getAirline",
      getDepAirportNm: "getDepAirportNm",
    }),

    loading() {
      return this.$store.state.loading;
    },

    ex_month() {
      let eng_Month = "";
      if (this.$store.state.exMonth == "1") {
        eng_Month = "January";
      } else if (this.$store.state.exMonth == "2") {
        eng_Month = "Febuary";
      } else if (this.$store.state.exMonth == "3") {
        eng_Month = "March";
      } else if (this.$store.state.exMonth == "4") {
        eng_Month = "April";
      } else if (this.$store.state.exMonth == "5") {
        eng_Month = "May";
      } else if (this.$store.state.exMonth == "6") {
        eng_Month = "June";
      } else if (this.$store.state.exMonth == "7") {
        eng_Month = "July";
      } else if (this.$store.state.exMonth == "8") {
        eng_Month = "August";
      } else if (this.$store.state.exMonth == "9") {
        eng_Month = "September";
      } else if (this.$store.state.exMonth == "10") {
        eng_Month = "October";
      } else if (this.$store.state.exMonth == "11") {
        eng_Month = "November";
      } else if (this.$store.state.exMonth == "12") {
        eng_Month = "December";
      }
      return eng_Month;
    },
  },

  data() {
    return {
      openModal: true,
      unfold: false,
      Departure: "Incheon",
      Arrival: "Jeju",
      ArrivalDate: "October 15th",
      Airplane_in: {
        height: "37px",
        marginTop: "23px",
        marginLeft: "8px",
        marginRight: "10px",
        position: "absolute",
      },
      Airplane_out: {
        height: "27px",
        marginTop: "24px",
        marginLeft: "10px",
        marginRight: "16px",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../UI/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");

* {
  user-select: none;
}

.loadingWindow {
  text-align: center;
  span {
    margin: {
      top: 4rem;
      left: auto;
    }
    display: inline;
    font-size: 160px;
    color: #777777;
    animation: blink 1.5s;
    animation-iteration-count: infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes blink {
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    }
  }
}

.howtouse {
  width: 28rem;
  height: auto;
  margin: {
    top: 2rem;
    left: auto;
    right: auto;
  }
  padding: 1rem;
  border: 2px dashed #b9acac;
  border-radius: $radius-3;
  h2 {
    font: {
      family: "Raleway", sans-serif;
      weight: bold;
    }
  }
  p {
    margin-top: -12px;
    font: {
      family: "Indie Flower", cursive;
      size: 20px;
      weight: 400;
    }
  }
}

.notFound {
  width: 30rem;
  margin: {
    top: 4.2rem;
    left: auto;
    right: auto;
  }
  padding: {
    left: auto;
    right: auto;
  }
  img {
    width: 30rem;
  }
  .underShadow {
    width: 10rem;
    height: 1.3rem;
    margin: {
      top: -1.2rem;
      left: 11rem;
      bottom: 2rem;
    }
    border-radius: 100%;
    background-color: rgb(189, 189, 189);
  }

  h2 {
    left: 10px;
    color: rgba(0, 0, 0, 0.729);
    font: {
      family: "Comfortaa", cursive;
      size: 29px;
      weight: bold;
    }
    position: relative;
  }
  p {
    left: 99px;
    margin: {
      top: -13px;
      bottom: 6rem;
    }
    color: rgb(158, 158, 158);
    font: {
      size: 15px;
      family: "Comfortaa", cursive;
    }
    position: relative;
  }
}
.skeleton {
  position: relative;
  display: flex;
  justify-content: center;

  @keyframes skeleton-gradation {
    0% {
      background-color: rgba(216, 216, 216, 0.1);
    }

    50% {
      background-color: rgba(216, 216, 216, 0.664);
    }

    100% {
      background-color: rgba(216, 216, 216, 0.1);
    }
  }
  &.ticket {
    max-width: 340px;
    max-height: 100px;
    width: 340px;
    height: 100px;
    top: 1rem;
    margin: {
      top: 1rem;
      left: auto;
      right: auto;
    }
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px rgba(37, 37, 37, 0.171);
  }

  &.airlineImg {
    width: 7.2rem;
    height: 4rem;
    margin: {
      top: auto;
      left: 1rem;
      right: auto;
      bottom: auto;
    }
    background-color: rgb(216, 216, 216);
    border-radius: 4px;
    animation: skeleton-gradation 1.7s infinite ease-in-out;
  }
  &.flightInfo {
    background-color: rgb(216, 216, 216);
    animation: skeleton-gradation 1.7s infinite ease-in-out;

    &.small-text {
      width: 2rem;
      height: 0.55rem;
      margin: {
        top: 5px;
        bottom: 5px;
      }
      border-radius: 2px;
    }
    &.middle-text {
      width: 3.8rem;
      height: 1.25rem;
      border-radius: 2px;
    }
  }
}
.totalContainer {
  justify-content: center;
}
.ticketBox {
  width: 340px;
  height: 100px;
  position: relative;
  backface-visibility: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.1);
  transform-origin: bottom;
  display: flex;
  top: 1rem;
  margin: {
    top: 1.5rem;
    left: auto;
    right: auto;
    bottom: 0;
  }
  cursor: grab;
}

.timeContainer {
  display: flex;
  margin: {
    top: 13px;
    left: auto;
    right: 1.3rem;
  }
}

.dateContainer {
  color: rgb(121, 115, 115);
  font-size: 9px;
  padding-top: 10px;
}

.detailtime {
  font-weight: bold;
  color: #000000;
  font-size: 16px;
}

.first {
  width: 340px;
  height: 100px;
  position: absolute;
  border-radius: 5px;
  color: #000;
  transform-origin: bottom;
  transform-style: preserve-3d;
  border-radius: 8px;
  display: flex;
  animation: shake 0.3s;

  /* vibration effect when close to flight v2 */
  /*  :hover {
      animation: shake 1s;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      
      20%, 80% {
        transform: translate3d(1px, 0, 0);
      }

      30% {
        transform : translate3d(2px, 0, 0);
      }

      50%, 70% {
        transform: translate3d(-4px, 0, 0);
      } 

      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    } */
}

.firstTop {
  width: 340px;
  height: 100px;
  position: absolute;
  background: #ffffff;
  backface-visibility: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.15);
  display: flex;
  justify-content: space-around;
}

.firstDisplay {
  /*첫번째 칸에 종속되어 있는 */
  width: 100%;
  height: 100px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 23px;
  flex-wrap: wrap;
  backface-visibility: hidden;
  box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.17);
}

.flightDetail {
  font-size: 20px;
  font-weight: bold;
  margin: -3px 0px 0px 10px;
  color: #3f3f3f;
  flex: 0.4;
}

.detailLabel {
  color: lightslategrey;
  font-size: 9px;
}

.animContainer {
  padding-left: 0px;
  position: absolute;
  width: 30px;
  height: 45px;
  top: 48px;
  margin-left: 140px;
  overflow: hidden;
}

.animation {
  width: 100px;
  position: absolute;
  display: flex;
  animation: 1s slidein 2s infinite linear;
}

@keyframes slidein {
  to {
    transform: translateX(-18px);
  }

  from {
    transform: translateX(0px);
  }
}

.circle {
  width: 5px;
  height: 5px;
  background: #707070;
  border-radius: 50%;
  margin-right: 13px;
}
.firstBehind {
  width: 340px;
  height: 100px;
  position: absolute;
  background: #fff;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px dashed #d1d1d1;
  border-left: none;
  border-right: none;
}

.firstBehindDisplay {
  width: 100%;
  height: 100px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  padding: 6px 23px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

.firstBehindRow {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 7px;
  text-align: left;
}

.detail {
  font-size: 15px;
  color: rgb(69, 69, 69);
  font-weight: bold;
}

.detailLabel {
  color: #686868;
  font-size: 10px;
  font-weight: 100;
}

.second {
  width: 340px;
  height: 50px;
  position: absolute;
  bottom: -2px;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: 0.2s;
  border-radius: 8px;
}

.secondTop {
  width: 340px;
  height: 50px;
  position: absolute;
  background: rgb(231, 231, 231);
  backface-visibility: hidden;
  border-radius: 8px;
}

.secondBehind {
  width: 340px;
  height: 50px;
  position: absolute;
  background: #fff;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px dashed #d1d1d1;
  border-left: none;
  border-right: none;
}

.secondBehindDisplay {
  width: 100%;
  height: 50px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  border-bottom: 1px dashed #d1d1d1;
  display: flex;
  justify-content: space-between;
  padding: 10px 23px;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

.secondBehindBottom {
  width: 340px;
  height: 50px;
  position: absolute;
  background: white;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 0px 0px 8px 8px;
  border-radius: 8px;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
}

.thirdTop {
  width: 340px;
  height: 50px;
  position: absolute;
  background: rgb(190, 190, 190);
  backface-visibility: hidden;
  border-radius: 8px;
}

.third {
  width: 340px;
  height: 50px;
  position: absolute;
  transform-origin: bottom;
  transform-style: preserve-3d;
  border-radius: 8px;
}

.price {
  color: #2d2d2d;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-top: -2px;
}

.priceLabel {
  color: #747474;
  font-weight: 100;
  font-size: 10px;
  text-align: left;
}
</style>
