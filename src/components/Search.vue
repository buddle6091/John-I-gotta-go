<template>
<div class="selectContainer"> 
  <div class="flightContainer">
   <span><h1>{{ shortDep }}</h1>
    {{ getAirport_dep }}</span> 
  <div>  
 <img src="../assets/icon/airplane2.png" alt="비행기" :style="airplane_img_inactive"/>
 </div>
   <span><h1>{{ shortFli }}</h1>
    {{ getAirport_arr }}</span>
    </div>
    <div class="shortInfo">
    <span>10.19</span>~ <span>10.22</span>|
    <span>3 people</span>|
    <span>economy</span>      
</div>
  </div>
<div class="selectContainer">  
  <ToggleButton :style="{marginLeft:'70%'}"/>
   
  <div class="flightContainer">
   <span data-bs-toggle="modal" data-bs-target="#exampleModal"><h1> {{ shortDep }}</h1>
    {{ getAirport_dep }}</span> 
  <div>  
 <img src="../assets/icon/airplane2.png" alt="비행기2" :style="airplane_img_active"/>
 <Button layout='reverse' @click="reverse" color='base' :style="{top:'4px', left:'1px', display: 'relative'}">
   <div class="material-icons" :style="{fontSize:'30px', display:'flex'}">compare_arrows</div>
 </Button> </div>
   <span  data-bs-toggle="modal" data-bs-target="#exampleModal"><h1> {{ shortFli }} </h1>
    {{ getAirport_arr }}</span>
    </div>
<!--search Departure-->
  <!--search Destination-->
<div class="set" :style="{zIndex: '30'}">
  <span class="material-icons"> date_range </span> 
   <div class="dateBox"><i class="material-icons">flight_takeoff</i>
    <datepicker class="picker" v-model="picked_from" placeholder="Depart Date" :weekStartsOn='0' 
     :lower-limit="new Date()" :style="{ width: '6rem', backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
    <div class="dateBox"><i class="material-icons">flight_land</i>
    <datepicker class="picker" v-if="beDisabled" v-model="picked_to" placeholder="Return Date" :weekStartsOn='0' 
     :lower-limit="picked_from" :style="{ width: '8rem', backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
</div>
<!-- passengers -->
<div class="set">
 <span class="material-icons">people</span>
 <ul class="block" > 
  <li class="block-radio passengers">
    <input type="radio" id="adult" name="passenger" value="1" checked>
      <label for="adult"> Adult &times; <span> {{ person[0] }} </span>
         <h2>12+ years old</h2></label>
  </li>
  <li class="block-radio passengers">
      <input type="radio" id="kid" name="passenger" value="0"> 
        <label for="kid"><i class="material-icons">child_care</i>kid &times; <span> {{ person[1] }} </span>
        <h2>under 12 </h2></label>
  </li>
  <li class="block-radio passengers">
      <input type="radio" id="baby" name="passenger" value="0"> 
       <label for="baby">baby &times; <span> {{ person[2] }} </span>
       <h2>less than 24 months</h2></label>
  </li>
  <li class="BtnContainer">
  <Button layout='Increase' id="btn_inc" color='base' @click="btnIncrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-person-plus-fill">
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> </Button>
  <Button layout='Decrease' id="btn_dec" color='base' @click="btnDecrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    </Button>
 </li> 
</ul>       
</div>
<!--class-->
<div class="set">
 <span class="material-icons">flight_class</span>
 <ul class="block"> 
  <li class="block-radio class">
    <input type="radio" id="class1" name="class" value="economy" v-model="selectClass" checked>
        <label for="class1"> <i class="material-icons">airline_seat_recline_normal</i>
         <h2>Economy</h2></label>
  </li>
  <li class="block-radio class">
      <input type="radio" id="class2" name="class" value="premium economy" v-model="selectClass"> 
        <label for="class2"> <i class="material-icons">airline_seat_recline_extra</i>
         <h2>Premium economy</h2></label>         
  </li>
  <li class="block-radio class">
      <input type="radio" id="class3" name="class" value="business" v-model="selectClass"> 
       <label for="class3"> <i class="material-icons">airline_seat_flat_angled</i>
         <h2>Business</h2></label>
  </li>
  <li class="block-radio class">
      <input type="radio" id="class4" name="class" value="first" v-model="selectClass"> 
       <label for="class4"> <i class="material-icons">airline_seat_individual_suite</i>
         <h2>First</h2></label>     
  </li>
</ul>       
</div>
  <Button @click="search" :style="{marginTop: '2rem', zIndex: '-1'}"> Search </Button>
</div>   
</template>

<script>
import Button from '../UI/UI/neumorphism/button/Button.vue';
import ToggleButton from '../UI/UI/neumorphism/toggle-button/ToggleButton.vue';
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
// eslint-disable-next-line no-unused-vars
const picked = ref(new Date())
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { enUS } from 'date-fns/locale'
// eslint-disable-next-line no-unused-vars
import { isSameDay } from 'date-fns'



export default defineComponent({   // 데이터 저장하는 곳  {{데이터바인딩}}
  
  props: {
  
  },
  name: 'Search-component',
  components: {
   ToggleButton: ToggleButton,
   Button: Button,
   Datepicker: Datepicker
  },
  
  data(){
    
    return{
      picked_from: new Date(),
      picked_to: '',
      person: [1, 0, 0],
      selectClass: '',
      selectEl: document.getElementsByName('class'),
      openModal : false,
      btnActive: false,
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      DepartureDate : 'September 17th', 
      ArrivalDate : 'October 15th',
      
      airplane_img_inactive : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto'},
      airplane_img_active : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto'},
     
     /* datePicker Elements */
      selected: null,
      from: null,
      to: null,
      yearSelected: null,
      monthSelected: null,
    }
  },
setup() {

  
},

  methods: {
    reverse(){
      /* shortDep <-> shortFli */
      this.$store.state.tem_short = this.$store.state.arrival
      this.$store.state.arrival = this.$store.state.departure
      this.$store.state.departure = this.$store.state.tem_short
      /* getAirport_dep <-> getAirport_arr */
      this.$store.state.tem_airport = this.$store.state.airport_arr
      this.$store.state.airport_arr = this.$store.state.airport_dep
      this.$store.state.airport_dep = this.$store.state.tem_airport
    },
    // 한계치를 넘으면 버튼 잠그기
    btnIncrease() {
      if(document.querySelector("input[id=adult]:checked")) 
        this.person[0]++;
        else if(document.querySelector("input[id=kid]:checked"))
        this.person[1]++;
        else
        this.person[2]++;

      const totalPerson = this.person.reduce((a, b) => a + b, 0)
      if(totalPerson > 8)
      //document.getElementById("btn_inc").disabled = true;
      alert('Sorry, can not choose over 9'); // -> 이거 나중에 팝업으로 바꾸기
      },
    btnDecrease() {
      if(document.querySelector("input[id=adult]:checked")) 
        this.person[0]--;
        else if(document.querySelector("input[id=kid]:checked"))
        this.person[1]--;
        else
        this.person[2]--;
        },   
    async search(){
      //const converter = require("xml-js");
      const FLIGHT_API_KEY = 'gOB08iIzzqGOwRT3bTdx%2Fuo6IEk0zKSilGVmnKx4mGOy%2B%2Bq2d%2FraX49coFC8zIZlC3Yx%2FfUPUyfddEH0Ww0RUA%3D%3D';
      const depPlandTime = [this.picked_from.getFullYear()] + [("0" + (this.picked_from.getMonth() + 1)).slice(-2)] + [("0" + this.picked_from.getDate()).slice(-2)];
      // requset element : depairportId, arrAirportId, depPlandTime
      const url = `http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&numOfRows=20&pageNo=1&depAirportId=NAARKJJ&arrAirportId=NAARKPC&depPlandTime=${depPlandTime}&_type=json`
      const res = await axios.get(url)
      // eslint-disable-next-line no-console
      console.log(depPlandTime)
      // eslint-disable-next-line no-console
      console.log(res)
    } 

  },
  
  computed: mapGetters({
    shortDep : 'shortDep',
    shortFli : 'shortFli',
    getAirport_dep : 'getAirport_dep',
    getAirport_arr: 'getAirport_arr'
  }),

  watch: {
    person(val){
      if(val == 10){
        alert('10 dltkd ss')
      }
      /* const totalPerson = this.person.reduce((a, b) => a + b, 0);
      console.log(totalPerson) */
    }
  }

 
})
</script>
 
<style lang="scss" scoped>
@import '../UI/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  perspective: 700px; 
}
html{
  font-size: 16px;
}

.App{
  font-family: sans-serif;
  background: $base;
}

.selectContainer {
 // border: 1px solid rgba(0, 0, 0, 0.1);
  margin: {
    top: 15px;
    left: auto;
    right: auto;  
  };
  width: 88%;
  height: 34rem;
  max-width: 835px;
  min-width: 400px;
  box-sizing: border-box;
  background: $base;
  border-radius: $radius-3;
   box-shadow: $shadow-convex-hover;
  padding: $spacing-4 $spacing-6;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  overflow: hidden;
  transition: height 0.4s;

  &__inactive-content{
    opacity: 1;
    transition: opacity 0.4s;
    position: absolute;
  }

  &__active-content{
    opacity: 0;
    transition: opacity 0.4s
  }

  &.is-active{
    
    .selectContainer__inactive{
      opacity: 0;
    }
  
    .selectContainer__active{
      opacity: 1;
    }
  }
  
.flightContainer{
  display: flex;
  justify-content: center;
  margin: {top: 11px;}  
  cursor: pointer;
  span{
    color: #757575;
    font: {
      size: 10px;}
    padding: {
      left: 40px;
      right: 40px;}
    
    h1{
      color: #000000;
      font: {
        size: 38px;}
        }
      text-align: center;}
    div{
      display:flex;
      flex-direction: column;
    }
}
.shortInfo{
  width: 20rem;
  height: 2rem;
  color: #969696e8;
  line-height: center;
  text-align: center;
  border-radius: 10px;
  background: rgba(168, 168, 168, 0.1);
  box-shadow: $shadow-concave;
  top: 13px;
  position: relative;
  span{
    padding: 10px, 10px;
    margin-right: 10px;
    font: { 
      size: 7px;
      weight: bold;
      }
    color: rgb(70, 68, 68) !important;
  }
}

.set{
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap:  nowrap;               
  position: relative;
  z-index: -5;
  left: 10px;
  margin: {
    top: 1.4rem;
    //left: 2px;
    //right: auto;
  }
  span[class=material-icons]{
    font-size: 30px; 
    color: rgb(80, 80, 80); 
    margin: auto;
    position: relative;
    left: -10px;
    } 
    .dateBox{
      width: 9rem;
      height: 3rem;
      display: flex;
      align-items: center;
      vertical-align: middle;
      color: $text-main;
      box-sizing: border-box;
      cursor: pointer;
      margin: {
          left: 10px;
          right: 5px;
        };
      padding: 0 $spacing-4 0 $spacing-1;
      background: $base;
      box-shadow: $shadow-concave;
      border-radius: $radius-1;
    
        i{
          font-size: 18px;
          text-align: flex-start;
          margin-left: 10px;
        }
    
        span{
          font-size: 14px;
        }
    }
/* 블럭 잡고 각 블럭을 따닥따닥 연결..
 그 후 radio 버튼을 블럭으로 디자인 하고 */
  .block{
    width: 18rem;
    height: 5rem;
    padding: 1px;
    border-radius: 15px;
    box-shadow: $shadow-convex-hover;
    background-color: $base;
    position: relative;
    cursor: pointer;
    box-shadow: $shadow-convex-hover;
    justify-content: center;
    //align-items: center;
    display: flex;

    li{
      display: inline;
      text-align: center;
      font-size: 0.9rem;
      }  
    h2{
      color: $text-main;
      font-size: 2px;
      line-height: 0.6rem;
      }
    [class=material-icons]{
      font-size: 30px;   
      color: rgb(80, 80, 80); 
      position: relative;
      right: 0px;
    }
    input[type="radio"] {
        display:none;
        }
    input[type="radio"]:not(:checked) ~ label {
      box-shadow: none;
      //transition: box-shadow ease-in-out 0.5s;
    }
    /* passengers radio*/
    input[id="kid"]:checked ~ label, input[id="baby"]:checked ~ label{
        width: 4.9rem;
        height: 5rem;
        top: -1px;
        left: -1px;
        padding-top: 10px;
        border-radius: 0px 0px 0px 0px;
        background-color: $base;
        box-shadow: $shadow-concave-large;
        transition: box-shadow ease-in-out 0.5s;
      }

      input[id="adult"]:checked ~ label{
        width: 4.9rem;
        height: 5rem;
        top: -1px;
        left: -1px;
        padding-top: 10px;
        border-radius: 15px 0px 0px 15px;
        background-color: $base;
        box-shadow: $shadow-concave-large;
        transition: box-shadow ease-in-out 0.5s;
      }

    /* class radio*/
      input[id="class2"]:checked ~ label, input[id="class3"]:checked ~ label{
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

      input[id="class1"]:checked ~ label{
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

      input[id="class4"]:checked ~ label{
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

      /* 이거 라벨 안에 부모 자식 나누니까 다 마지막 자식으로 표시되는 것
      같음 ㅇㅇ 그냥 다 하나하나 빼서 디자인 하는 방법이 나을듯 */
}

  .block-radio{
    border: 0.1rem dashed $disabled;
    border: {
      top: none;
      left: none;
      bottom: none;
    } 
    position: relative;
    z-index: inherit;

    &:last-child{
      border: none;
    }

    &.passengers{
        width: 30%;
        div{
          top: 15px;
          position: relative;
        }
    }
    &.class{
      width: 25%;
      label{
        top: 10px;
        position: relative;
        }
/*       input[type="radio"]:checked + label{
        width: 4.5rem;
        height: 5rem;
        top: -1px;
        left: -1px;
        padding-top: 10px;
        border-radius: 0px 0px 0px 0px;
        color: $primary;
        background-color: red;
          } */
    }
  }

  .BtnContainer{
    width: 10%;
    height: auto;
    position: relative;
    flex-direction: column;
  }
}

.ticketContainer{
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  }
}
</style>