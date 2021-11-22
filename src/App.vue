<!--App.vue-->

<template>
<Modal/>
<div class="App">
<span>John, I gotta go🛫</span>
<Search/>
<TicketBox/>

</div>


</template>

<script>
import data from './data'; 
//import Button from './components/UI/neumorphism/button/Button.vue';
import TicketBox from './ticketBox.vue';
import Modal from './Modal.vue'
//import ToggleButton from './components/UI/neumorphism/toggle-button/ToggleButton.vue';
import Search from './Search.vue';
//import Icon from './components/UI/neumorphism/decorated-icon/DecoratedIcon.vue'
//import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import axios from 'axios'
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
  name: 'App',
  components: {
   TicketBox : TicketBox,
   Modal : Modal,
   //ToggleButton: ToggleButton,
   Search: Search,
   //Button: Button,
   //Icon: Icon,
   //Datepicker
 
  },
  
  data(){
    
    return{
      ticket: data,   // from data.js,
      picked_from: new Date(),
      picked_to: '',
      person: [1, 0, 0],
      selectClass: 'economy',
      openModal : false,
      btnActive: false,
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      Departure : 'Incheon',
      Arrival : 'Jeju',
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
      const url = `http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${FLIGHT_API_KEY}&numOfRows=10&pageNo=1&depAirportId=NAARKJJ&arrAirportId=NAARKPC&depPlandTime=${depPlandTime}&_type=json`
      const res = await axios.get(url)
      console.log(depPlandTime);
      console.log(res);
    } 

  },
  
  computed: {

  },

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
@import './components/scss/main.scss';
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
  max-width: 835px;
  min-width: 400px;
  height: auto;
  box-sizing: border-box;
  background: $base;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
  //position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;


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

  .block{
    width: 21rem;
    height: 5rem;
    border-radius: 15px;
    box-shadow: $shadow-convex-hover;
    background: $base;
    justify-content: center;
    position: relative;
    display: flex;
    cursor: pointer;

  div{
    top: 10px;
    position: relative;
  }

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

    /* Design radio button */
  input[type="radio"]{
  display: none;
  width: 100%;
  height: 70px;
}
 
  input:checked ~ div{
    //color: $primary;
    background-color: $primary;
   }
}

.block-radio-first {
  border-radius: 15px 0px 0px 15px;
  border: 0.1rem dashed $disabled;
  border: {
    top: none;
    left: none;
    bottom: none;
  }
  position: relative;

  .div{
    margin-top: 10px !important;
    position: inherit;
  }
 
    &.passengers{
      width: 30%;
  }
    &.class{
      width: 25%; 
  }
}

.block-radio{
  border-radius: 0px 0px 0px 0px;
  border: 0.1rem dashed $disabled;
  border: {
    top: none;
    left: none;
    bottom: none;
  } 
  position: relative;
  z-index: inherit;
  
   &.passengers{
      width: 30%;
  }
    &.class{
      width: 25%;     
  }
}

.block-radio-last{
  border-radius: 0px 15px 15px 0px;
  position: relative;
  z-index: inherit;
   &.passengers{
      border: 0.1rem dashed $disabled;
      border: {
        top: none;
        left: none;
        bottom: none;
      }
      width: 30%;
  }
    &.class{
      width: 25%;     
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