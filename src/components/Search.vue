<template>
  <!-- inactive - active 토탈 컨테이너 -->
  <div class="selectContainer__total">
    <!-- 활성화 되기 전의 컨테이너 -->
    <div
      class="selectContainer__inactive"
      @click="Active()"
      :style="{
        transition: $store.state.isActive ? '4s' : '4s',
        opacity: $store.state.isActive ? 0 : 1,
        display: $store.state.isActive ? 'none' : 'inline',
      }">
      <!-- 초기값 false -->
      <div class="flightContainer">
        <span>
          <h1>{{ shortDep }}</h1>
          {{ getAirport_dep }}
        </span>
        <div>
          <img
            src="./airplane2.png"
            alt="비행기"
            :style="airplane_img_inactive" />
        </div>
        <span>
          <h1>{{ shortArr }}</h1>
          {{ getAirport_arr }}
        </span>
      </div>
      <div class="shortInfo">
        <span>{{ $store.state.exMonth }}.{{ $store.state.exDate }}</span
        >~ <span>{{ $store.state.exMonth }}.{{ $store.state.exDate }}</span
        >| <span>{{ $store.state.totalPerson }} people</span>|
        <span> {{ $store.state.selectClass }} </span>
      </div>
      <i class="material-icons">keyboard_double_arrow_down</i>
    </div>

    <!-- 활성화 된 후의 컨테이너 -->
    <div
      class="selectContainer__active"
      :style="{
        height: $store.state.isActive ? activeHeight : inactiveHeight,
        transition: $store.state.isActive ? '0.6s' : '1s',
        opacity: $store.state.isActive ? 1 : 0,
      }">
      <!-- 편도 - 왕복 토글 버튼 -->
      <ToggleButton />

      <!-- 모달창 연계 -->
      <div class="flightContainer">
        <span data-bs-toggle="modal" data-bs-target="#exampleModal">
          <h1>{{ shortDep }}</h1>
          {{ getAirport_dep }}
        </span>
        <div>
          <img
            src="./airplane2.png"
            alt="비행기2"
            :style="airplane_img_active" />
          <Button
            layout="reverse"
            @click="reverse"
            color="base"
            :style="{
              top: '4px',
              left: '1px',
              padding: '',
              display: 'relative',
            }">
            <div
              class="material-icons"
              :style="{
                fontSize: '30px',
                display: 'flex',
                marginLeft: '-13px',
              }">
              compare_arrows
            </div>
          </Button>
        </div>
        <span data-bs-toggle="modal" data-bs-target="#exampleModal">
          <h1>{{ shortArr }}</h1>
          {{ getAirport_arr }}
        </span>
      </div>
      <!--search Destination-->
      <div class="set">
        <span class="material-icons"> date_range </span>
        <div
          class="dateBox"
          :style="{
            zIndex: '10',
          }">
          <i class="material-icons">flight_takeoff</i>
          <datepicker
            class="picker"
            v-model="$store.state.picked_from"
            placeholder="Depart Date"
            :weekStartsOn="0"
            :lower-limit="new Date()"
            :style="{
              width: '6rem',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              zIndex: '30',
            }" />
        </div>
        <div class="dateBox">
          <i class="material-icons">flight_land</i>
          <div v-if="toggle">
            <datepicker
              class="picker"
              v-model="$store.state.picked_from"
              placeholder="Depart Date"
              :weekStartsOn="0"
              :lower-limit="new Date()" />
          </div>
        </div>
      </div>
      <!-- passengers -->
      <div class="set" :style="{ zIndex: '-10' }">
        <span class="material-icons">people</span>
        <ul class="block">
          <li class="block-radio passengers">
            <input type="radio" id="adult" name="passenger" value="1" checked />
            <label for="adult"
              ><i class="material-icons">man_4</i>&times;&nbsp;
              <span> {{ person[0] }} </span>
              <h2>Adult</h2>
              <h2>12+ years old</h2>
            </label>
          </li>
          <li class="block-radio passengers">
            <input type="radio" id="kid" name="passenger" value="0" />
            <label for="kid"
              ><i class="material-icons">boy</i>&times;&nbsp;<span>
                {{ person[1] }}
              </span>
              <h2>Kid</h2>
              <h2>under 12</h2>
            </label>
          </li>
          <li class="block-radio passengers">
            <input type="radio" id="baby" name="passenger" value="0" />
            <label for="baby"
              ><i class="material-icons">baby_changing_station</i>&times;&nbsp;
              <span> {{ person[2] }} </span>
              <h2>baby</h2>
              <h2>under 24 months</h2>
            </label>
          </li>
          <li class="BtnContainer">
            <Button
              layout="Increase"
              id="btn_inc"
              color="base"
              @click="btnIncrease">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-plus-fill">
                <path
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </Button>
            <Button
              layout="Decrease"
              id="btn_dec"
              color="base"
              @click="btnDecrease">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-dash-fill"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                <path
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </Button>
          </li>
        </ul>
      </div>
      <!--class-->
      <div class="set" :style="{ zIndex: '-10' }">
        <span class="material-icons">flight_class</span>
        <ul class="block">
          <li class="block-radio class">
            <input
              type="radio"
              id="class1"
              name="class"
              value="economy"
              v-model="$store.state.selectClass"
              checked />
            <label for="class1">
              <i class="material-icons">airline_seat_recline_normal</i>
              <h2>Economy</h2>
            </label>
          </li>
          <li class="block-radio class">
            <input
              type="radio"
              id="class2"
              name="class"
              value="premium economy"
              v-model="$store.state.selectClass" />
            <label for="class2">
              <i class="material-icons">airline_seat_recline_extra</i>
              <h2>Premium economy</h2>
            </label>
          </li>
          <li class="block-radio class">
            <input
              type="radio"
              id="class3"
              name="class"
              value="business"
              v-model="$store.state.selectClass" />
            <label for="class3">
              <i class="material-icons">airline_seat_flat_angled</i>
              <h2>Business</h2>
            </label>
          </li>
          <li class="block-radio class">
            <input
              type="radio"
              id="class4"
              name="class"
              value="first"
              v-model="$store.state.selectClass" />
            <label for="class4">
              <i class="material-icons">airline_seat_individual_suite</i>
              <h2>First</h2>
            </label>
          </li>
        </ul>
      </div>
      <Button
        @click="[searchTicket(), unActive()]"
        :style="{ marginTop: '2.5em', zIndex: '-10' }"
        :class="{ 'isnot-active': $store.state.isActive }">
        Search
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "../UI/UI/neumorphism/button/Button.vue";
import ToggleButton from "../UI/UI/neumorphism/toggle-button/ToggleButton.vue";
import Datepicker from "vue3-datepicker";
import { mapState, mapGetters, mapActions } from "vuex";
import { defineComponent, ref } from "vue";
// eslint-disable-next-line no-unused-vars
const picked = ref(new Date());
// eslint-disable-next-line no-unused-vars
import { enUS } from "date-fns/locale";
// eslint-disable-next-line no-unused-vars
import { isSameDay } from "date-fns";

export default defineComponent({
  // 데이터 저장하는 곳  {{데이터바인딩}}

  name: "Search-component",
  components: {
    ToggleButton: ToggleButton,
    Button: Button,
    Datepicker: Datepicker,
  },

  data() {
    return {
      inactiveHeight: "15rem",
      picked_from: new Date(),
      picked_to: "",
      toggle: false,
      person: [1, 0, 0],
      selectClass: "",
      openModal: false,
      btnActive: false,
      DepartureDate: "September 17th",
      ArrivalDate: "October 15th",

      airplane_img_inactive: {
        width: "30px",
        height: "30px",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      },
      airplane_img_active: {
        width: "30px",
        height: "30px",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      },

      /* datePicker Elements */
      selected: null,
      from: null,
      to: null,
      yearSelected: null,
      monthSelected: null,
    };
  },

  methods: {
    Active() {
      this.$store.state.isActive = true;
    },
    unActive() {
      this.$store.state.isActive = false;
    },
    reverse() {
      /* shortDep <-> shortArr */
      this.$store.state.tem_short = this.$store.state.arrival;
      this.$store.state.arrival = this.$store.state.departure;
      this.$store.state.departure = this.$store.state.tem_short;
      /* getAirport_dep <-> getAirport_arr */
      this.$store.state.tem_airport = this.$store.state.airport_arr;
      this.$store.state.airport_arr = this.$store.state.airport_dep;
      this.$store.state.airport_dep = this.$store.state.tem_airport;
      /*.depAirportId <-> arrAirportId */
      this.$store.state.tem_code = this.$store.state.arrAirportId;
      this.$store.state.arrAirportId = this.$store.state.depAirportId;
      this.$store.state.depAirportId = this.$store.state.tem_code;
      /* tem_depNm _<-> tem_arrNm */
      this.$store.state.tem_DepArrNm = this.$store.state.tem_depNm;
      this.$store.state.tem_depNm = this.$store.state.tem_arrNm;
      this.$store.state.tem_arrNm = this.$store.state.tem_DepArrNm;
    },
    // 한계치를 넘으면 버튼 잠그기
    btnIncrease() {
      if (document.querySelector("input[id=adult]:checked")) this.person[0]++;
      else if (document.querySelector("input[id=kid]:checked"))
        this.person[1]++;
      else this.person[2]++;

      /* Prevent from over 9 */
      if (this.person[0] > 9) this.person[0] = 9;

      this.$store.state.totalPerson =
        this.person.reduce((a, b) => a + b, 0) + 1;
      if (this.$store.state.totalPerson > 9)
        alert("Sorry, can not choose over 9"); // -> 이거 나중에 팝업으로 바꾸기
      this.$store.state.totalPerson--;
    },
    btnDecrease() {
      if (document.querySelector("input[id=adult]:checked")) this.person[0]--;
      else if (document.querySelector("input[id=kid]:checked"))
        this.person[1]--;
      else this.person[2]--;

      /* Prevent from negative num */
      if (this.person[0] < 1) this.person[0] = 0;
      else if (this.person[1] < 1) this.person[1] = 0;
      else this.person[2] < 1;
      this.person[2] = 0;

      this.$store.state.totalPerson = this.person.reduce((a, b) => a + b, 0);
      if (this.$store.state.totalPerson < 1)
        alert("Sorry, can not choose under 1"); // -> 이거 나중에 팝업으로 바꾸기
    },
    async searchTicket() {
      this.$store.dispatch("searchInfo");
      this.unfold == false;
      this.$store.state.depNm = this.$store.state.tem_depNm;
      this.$store.state.arrNm = this.$store.state.tem_arrNm;
    },
  },

  computed: {
    ...mapState(["arrival", "departure", "tem_short", "selectClass"]),
    ...mapGetters({
      shortDep: "shortDep",
      shortArr: "shortArr",
      getAirport_dep: "getAirport_dep",
      getAirport_arr: "getAirport_arr",
    }),
    ...mapActions({
      searchInfo: "searchInfo",
    }),
    /* phoneHeight() {
        return window.matchMedia('screen and (max-width: 440px)').matches ? '60vh' : '35rem'
    }, */
    activeHeight() {
      return document.getElementsByClassName("selectContainer__active").height;
    },
  },

  watch: {},
});
</script>

<style lang="scss" scoped>
@import "../UI/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Raleway:ital,wght@1,500&display=swap");

* {
  perspective: 700px;
  user-select: none; // prevent block
}

html {
  font-size: 16px;
}

.selectContainer {
  margin: {
    top: 15px;
    left: 0px;
    right: 0;
    bottom: 0;
  }
  position: relative;
  flex-wrap: wrap;

  &__total {
    width: 27rem;
    box-sizing: border-box;
    background: $base;
    border-radius: $radius-3;
    box-shadow: $shadow-convex-hover;

    margin: {
      left: auto;
      right: auto;
    }

    position: relative;
    display: flex;
    overflow: hidden;
    transition: height 0.4s;

    .flightContainer {
      display: flex;
      justify-content: center;
      margin-top: 11px;
      cursor: pointer;

      span {
        color: #757575;

        font: {
          size: 10px;
        }

        padding: {
          left: 40px;
          right: 40px;
        }

        h1 {
          color: #000000;
          font-size: 38px;
        }

        text-align: center;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }

    &.is-active {
      .selectContainer__inactive {
        opacity: 0;
        display: none;
      }

      .selectContainer__active {
        opacity: 1;
      }
    }

    &.isnot-active {
      .selectContainer__inactive {
        opacity: 1;
        display: flex;
      }

      .selectContainer__active {
        opacity: 0;
        display: none;
      }
    }
  }

  &__inactive {
    justify-content: center;
    height: 15rem;
    padding: 1em 2.7em;
    opacity: 1;
    transition: opacity 0.4s;
    position: relative;

    h1 {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
    }

    .shortInfo {
      width: 19rem;
      height: 2.2rem;
      top: 1.8rem;
      left: 1.55rem;
      color: #969696e8;
      line-height: center;
      text-align: center;
      border-radius: 10px;
      background: rgba(168, 168, 168, 0.1);
      box-shadow: $shadow-concave;
      position: relative;
      padding: 10px, 10px;

      span {
        margin-right: 10px;
        font-family: "Montserrat", sans-serif;

        font: {
          size: 11px;
          weight: bold;
        }

        color: rgb(83, 83, 83) !important;
      }
    }

    i {
      font-size: 25px;
      color: #5296fb;

      margin: {
        top: 2.5rem;
        left: 10.2rem;
      }

      animation: shake 1s;
      animation-iteration-count: infinite;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      //perspective: 1000px;

      @keyframes shake {
        10%,
        90% {
          transform: translate3d(0, -1px, 0);
        }

        20%,
        80% {
          transform: translate3d(0, 1px, 0);
        }

        30% {
          transform: translate3d(0, 3px, 0);
        }

        50%,
        70% {
          transform: translate3d(0, -4px, 0);
        }

        40%,
        60% {
          transform: translate3d(0, 4px, 0);
        }
      }
    }
  }

  &__active {
    height: 35rem;
    padding: 2em;
    opacity: 0;
    transition: opacity 0.4s;

    h1 {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
    }

    .set {
      top: 10px;
      left: 10px;

      margin: {
        top: 1.6rem;
        left: -2em;
      }

      align-content: flex-start;
      display: flex;
      flex-direction: row;
      //flex-wrap: nowrap;
      position: relative;

      span[class="material-icons"] {
        font-size: 30px;
        color: rgb(80, 80, 80);

        margin: {
          top: auto;
          left: 0.7em;
          right: 0.3em;
          bottom: auto;
        }

        position: relative;
        left: -10px;
      }

      .dateBox {
        width: 10rem;
        height: 3rem;
        display: flex;
        align-items: center;
        vertical-align: middle;
        color: $text-main;
        box-sizing: border-box;
        cursor: pointer;
        margin-right: 1em;
        padding: 0 $spacing-4 0 $spacing-1;
        background: $base;
        box-shadow: $shadow-concave;
        border-radius: $radius-1;

        i {
          font-size: 18px;
          text-align: flex-start;

          margin: {
            left: 10px;
            right: 7px;
          }
        }

        span {
          font-size: 14px;
        }
      }

      .block {
        width: 18rem;
        height: 5rem;
        padding: 0.5px;
        border-radius: 15px;
        box-shadow: $shadow-convex-hover;
        background-color: $base;
        position: relative;
        cursor: pointer;
        box-shadow: $shadow-convex-hover;
        justify-content: center;
        //align-items: center;
        display: flex;

        li {
          display: inline;
          text-align: center;
          font-size: 0.9rem;
        }

        span {
          font-family: "Montserrat", sans-serif;
          font-weight: bold;
        }

        h2 {
          color: $text-main;
          font-size: 2px;
          line-height: 0.6rem;
        }

        [class="material-icons"] {
          font-size: 30px;
          color: rgb(80, 80, 80);
          position: relative;
          right: 0px;
        }

        input[type="radio"] {
          display: none;
        }

        input[type="radio"]:not(:checked) ~ label {
          box-shadow: none;
        }

        /* passengers radio*/
        input[id="kid"]:checked ~ label,
        input[id="baby"]:checked ~ label {
          width: 5.3rem;
          height: 5rem;
          padding-top: 1px;
          border-radius: 0px 0px 0px 0px;
          background-color: $base;
          box-shadow: $shadow-concave-large;
          transition: box-shadow ease-in-out 0.5s;
        }

        input[id="adult"]:checked ~ label {
          width: 5.3rem;
          height: 5rem;
          padding-top: 1px;
          border-radius: 15px 0px 0px 15px;
          background-color: $base;
          box-shadow: $shadow-concave-large;
          transition: box-shadow ease-in-out 0.5s;
        }

        /* class radio*/
        input[id="class2"]:checked ~ label,
        input[id="class3"]:checked ~ label {
          width: 4.5rem;
          height: 5rem;
          top: -1px;
          left: -0.5px;
          padding-top: 10px;
          border-radius: 0px 0px 0px 0px;
          background-color: $base;
          box-shadow: $shadow-concave-large;
          transition: box-shadow ease-in-out 0.5s;
        }

        input[id="class1"]:checked ~ label {
          width: 4.5rem;
          height: 5rem;
          top: -1px;
          left: -1px;
          padding-top: 10px;
          border-radius: 15px 0px 0px 15px;
          background-color: $base;
          box-shadow: $shadow-concave-large;
          transition: box-shadow ease-in-out 0.5s;
        }

        input[id="class4"]:checked ~ label {
          width: 4.5rem;
          height: 5rem;
          top: -1px;
          padding-top: 10px;
          border-radius: 0px 15px 15px 0px;
          color: $primary;
          background-color: $base;
          box-shadow: $shadow-concave-large;
          transition: box-shadow ease-in-out 0.5s;
        }
      }

      .block-radio {
        border: 0.1rem dashed $disabled;

        border: {
          top: none;
          left: none;
          bottom: none;
        }

        position: relative;
        z-index: inherit;

        &:last-child {
          border: none;
        }

        &.passengers {
          width: 30%;

          div {
            top: 15px;
            position: relative;
          }
        }

        &.class {
          width: 25%;

          label {
            top: 10px;
            position: relative;
          }
        }
      }

      .BtnContainer {
        width: 10%;
        height: auto;
        position: relative;
        flex-direction: column;
      }
    }
  }

  // @media only screen and (max-width: 440px)

  @include phone {
    &__total {
      width: 95vw;
      min-width: 375px;
      box-sizing: border-box;
      background: $base;
      border-radius: $radius-3;
      box-shadow: $shadow-convex-hover;
      margin: 0, auto;
      position: relative;
      display: flex;
      overflow: hidden;
      transition: height 0.4s;

      .flightContainer {
        display: flex;
        justify-content: center;
        margin-top: 11px;
        cursor: pointer;

        span {
          color: #757575;

          font: {
            size: 10px;
          }

          padding: {
            left: 40px;
            right: 40px;
          }

          h1 {
            color: #000000;
            font-size: 38px;
          }

          text-align: center;
        }

        div {
          display: flex;
          flex-direction: column;
        }
      }

      &.is-active {
        .selectContainer__inactive {
          opacity: 0;
          display: none;
        }

        .selectContainer__active {
          opacity: 1;
        }
      }

      &.isnot-active {
        .selectContainer__inactive {
          opacity: 1;
          display: flex;
        }

        .selectContainer__active {
          opacity: 0;
          display: none;
        }
      }
    }

    &__inactive {
      justify-content: center;
      height: 20rem;
      padding: 1em 2.7em;
      opacity: 1;
      transition: opacity 0.4s;
      position: relative;

      h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
      }

      .shortInfo {
        width: 30rem;
        height: 2.2rem;
        top: 1.8rem;
        left: 2rem;
        color: #969696e8;
        line-height: center;
        text-align: center;
        border-radius: 10px;
        background: rgba(168, 168, 168, 0.1);
        box-shadow: $shadow-concave;
        position: relative;
        padding: 10px, 10px;

        span {
          margin-right: 10px;
          font-family: "Montserrat", sans-serif;

          font: {
            size: 11px;
            weight: bold;
          }

          color: rgb(83, 83, 83) !important;
        }
      }

      i {
        font-size: 25px;
        color: #5296fb;

        margin: {
          top: 2rem;
          left: 16.2rem;
        }

        animation: shake 1s;
        animation-iteration-count: infinite;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        //perspective: 1000px;

        @keyframes shake {
          10%,
          90% {
            transform: translate3d(0, -1px, 0);
          }

          20%,
          80% {
            transform: translate3d(0, 1px, 0);
          }

          30% {
            transform: translate3d(0, 3px, 0);
          }

          50%,
          70% {
            transform: translate3d(0, -4px, 0);
          }

          40%,
          60% {
            transform: translate3d(0, 4px, 0);
          }
        }
      }
    }

    &__active {
      height: 53rem;
      padding: 2em;
      opacity: 0;
      transition: opacity 0.4s;

      h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
      }

      .set {
        top: 12px;
        left: 10px;

        margin: {
          top: 1rem;
          left: -2em;
          bottom: 3rem;
        }

        align-content: flex-start;
        display: flex;
        flex-direction: row;
        //flex-wrap: nowrap;
        position: relative;
        z-index: -5;

        span[class="material-icons"] {
          font-size: 30px;
          color: rgb(80, 80, 80);

          margin: {
            top: auto;
            left: 0.7em;
            right: 0.3em;
          }

          position: relative;
        }

        .dateBox {
          width: 14rem;
          height: 4rem;
          display: flex;
          align-items: center;
          vertical-align: middle;
          color: $text-main;
          box-sizing: border-box;
          cursor: pointer;
          margin: {
            top: 0.5rem;
            right: 1.6rem;
          }
          padding: 0 $spacing-4 0 $spacing-1;
          background: $base;
          box-shadow: $shadow-concave;
          border-radius: $radius-1;

          i {
            font-size: 2rem;
            text-align: flex-start;

            margin: {
              left: 10px;
              right: 7px;
            }
          }
        }

        .block {
          width: 59vw;
          height: 8rem;
          border-radius: 15px;
          box-shadow: $shadow-convex-hover;
          background-color: $base;
          position: relative;
          cursor: pointer;
          box-shadow: $shadow-convex-hover;
          display: flex;

          li {
            display: inline;
            text-align: center;
            font-size: 0.9rem;
          }

          span {
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
          }

          h2 {
            color: $text-main;
            font-size: 2px;
            line-height: 0.6rem;
          }

          [class="material-icons"] {
            font-size: 30px;
            color: rgb(80, 80, 80);
            position: relative;
            right: 0px;
          }

          input[type="radio"] {
            display: none;
          }

          input[type="radio"]:not(:checked) ~ label {
            box-shadow: none;
          }

          /* passengers radio*/
          input[id="kid"]:checked ~ label,
          input[id="baby"]:checked ~ label {
            width: 7.6rem;
            height: 8rem;
            padding-top: 1px;
            border-radius: 0px 0px 0px 0px;
            background-color: $base;
            box-shadow: $shadow-concave-large;
            transition: box-shadow ease-in-out 0.5s;
          }

          input[id="adult"]:checked ~ label {
            width: 7.6rem;
            height: 8rem;
            padding-top: 1px;
            border-radius: 15px 0px 0px 15px;
            background-color: $base;
            box-shadow: $shadow-concave-large;
            transition: box-shadow ease-in-out 0.5s;
          }

          /* class radio*/
          input[id="class2"]:checked ~ label,
          input[id="class3"]:checked ~ label {
            width: 6.2rem;
            height: 8rem;
            top: -1px;
            left: -0.5px;
            padding-top: 10px;
            border-radius: 0px 0px 0px 0px;
            background-color: $base;
            box-shadow: $shadow-concave-large;
            transition: box-shadow ease-in-out 0.5s;
          }

          input[id="class1"]:checked ~ label {
            width: 6.2rem;
            height: 8rem;
            top: -1px;
            left: -1px;
            padding-top: 10px;
            border-radius: 15px 0px 0px 15px;
            background-color: $base;
            box-shadow: $shadow-concave-large;
            transition: box-shadow ease-in-out 0.5s;
          }

          input[id="class4"]:checked ~ label {
            width: 6.3rem;
            height: 8rem;
            top: -1px;
            padding-top: 10px;
            border-radius: 0px 15px 15px 0px;
            color: $primary;
            background-color: $base;
            box-shadow: $shadow-concave-large;
            transition: box-shadow ease-in-out 0.5s;
          }
        }

        .block-radio {
          border: 0.1rem dashed $disabled;

          border: {
            top: none;
            left: none;
            bottom: none;
          }

          position: relative;
          z-index: inherit;

          &:last-child {
            border: none;
          }

          &.passengers {
            width: 30%;
            height: 8rem;
            div {
              top: 15px;
              position: relative;
            }
          }

          &.class {
            width: 25%;
            label {
              top: 10px;
              position: relative;
            }
          }
        }

        .BtnContainer {
          width: 10%;
          height: auto;
          position: relative;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
