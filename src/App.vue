<!--App.vue-->

<template>
<Modal/>
<div class="App">
<span>John, I gotta go🛫</span>
<div class="selectContainer inactive"> 
  <div class="flightContainer">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" alt="비행기" :style="airplane_img_inactive"/>
 </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
    <div class="shortInfo">
    <span>10.19</span>~ <span>10.22</span>|
    <span>3 people</span>|
    <span>economy</span>      
</div>
  </div>
<div class="selectContainer active">  
  <ToggleButton :style="{marginLeft:'70%'}"/>
   
  <div class="flightContainer" data-bs-toggle="modal" data-bs-target="#exampleModal">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" alt="비행기2" :style="airplane_img_active"/>
 <Button layout='reverse' color='base' :style="{top:'4px', left:'1px',display: 'relative'}">
   <div class="material-icons" :style="{fontSize:'30px', display:'flex'}">compare_arrows</div>
   </Button> </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
<!--search Departure-->
  <!--search Destination-->
<div class="set">
  <i class="material-icons"> date_range </i> 
   <div class="dateBox"><i class="material-icons">flight_takeoff</i>
    <datepicker class="picker" v-model="from" placeholder="Depart Date" :weekStartsOn='0' :style="{ backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
    <div class="dateBox"><i class="material-icons">flight_land</i>
    <datepicker class="picker" v-model="to" placeholder="Return Date" :weekStartsOn='0' :style="{ backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
</div>
<!-- passengers -->
<div class="set" :style="{ zIndex: -5 }">
 <i class="material-icons">people</i>
 <ul class="block"> 
  <li class="block-radio first passengers">
   <label>
    <input type="radio" id="adult" name="passenger" value="1" checked>
        <div>Adult &times; <span> {{ person[0] }} </span>
         <h2>12+ years old</h2></div>
      </label>
  </li>
  <li class="block-radio passengers">
      <label>
      <input type="radio" id="kid" name="passenger" value="0"> 
        <div>kid &times; <span> {{ person[1] }} </span>
        <h2>under 12 </h2></div>
      </label>
  </li>
  <li class="block-radio passengers">
      <label>
      <input type="radio" id="baby" name="passenger" value="0"> 
       <div>baby &times; <span> {{ person[2] }} </span>
       <h2>less than 24 months</h2></div>
      </label> 
  </li>
  <li class="BtnContainer">
  <Button layout='Increase' color='base' @click="btnIncrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-person-plus-fill">
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> </Button>
  <Button layout='Decrease' color='base' @click="btnDecrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    </Button>
 </li> 
</ul>       
</div>
<!--class-->

<div class="set" :style="{ zIndex: -5 }">
 <i class="material-icons">flight_class</i>
 <ul class="block"> 
  <li class="block-radio-first class">
   <label>
    <input type="radio" id="class1" name="class" value="economy" checked>
        <div> <i class="material-icons">airline_seat_recline_normal</i>
         <h2>Economy</h2></div>
      </label>
  </li>
  <li class="block-radio class">
      <label>
      <input type="radio" id="class2" name="class" value="premium economy"> 
        <div> <i class="material-icons">airline_seat_recline_extra</i>
         <h2>Premium economy</h2></div>         
      </label>
  </li>
  <li class="block-radio class">
      <label>
      <input type="radio" id="class3" name="class" value="business"> 
       <div> <i class="material-icons">airline_seat_flat_angled</i>
         <h2>Business</h2></div>
      </label> 
  </li>
  <li class="block-radio-last class">
      <label>
      <input type="radio" id="class4" name="class" value="first"> 
       <div> <i class="material-icons">airline_seat_individual_suite</i>
         <h2>First</h2></div>     
      </label> 
  </li>
</ul>       
</div>

<Button :style="{marginTop: '2rem', zIndex: '-1'}"> Search </Button>
<!-- <div>
    <datepicker
      class="datebox"
      v-model="selected"
      :locale="locale"
      :upperLimit="to"
      :lowerLimit="from"
      :clearable="true"
			:disabledDates="{ predicate: isToday }"
    >

    </datepicker>
  </div>
  <div>
    <datepicker
      class="datebox"
      weekday-format="iiiiii"
      month-list-format="LLLL"
      v-model="from"
      :locale="locale"
      placeholder="from"
      weekStartsOn=0
    />
  </div> -->
<!--   <div>
    <datepicker class="picker" v-model="to" placeholder="to" />
  </div> -->
<!--   <div>
    <datepicker
      class="picker"
      v-model="to"
      :locale="locale"
      disabled
      placeholder="disabled"
    />
  </div> -->
</div>   

  <TicketBox/>

</div>


</template>

<script>
import data from './data'; 
import Button from './components/UI/neumorphism/button/Button.vue';
import TicketBox from './ticketBox.vue';
import Modal from './modal.vue';
import ToggleButton from './components/UI/neumorphism/toggle-button/ToggleButton.vue';
//import Search from './components/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';
//import Icon from './components/UI/neumorphism/decorated-icon/DecoratedIcon.vue'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
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
   ToggleButton: ToggleButton,
   //Search: Search,
   Button: Button,
   //Icon: Icon,
   Datepicker
 
  },
  
  data(){
    
    return{
      ticket: data,   // from data.js,
      person: [1, 0, 0],
      countAdult: 1,
      countKid: 0,
      countBaby: 0,
      selectClass: '',
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
  
    btnIncrease() {
      if(document.querySelector("input[id=adult]:checked")) 
        this.person[0]++;
        else if(document.querySelector("input[id=kid]:checked"))
        this.person[1]++;
        else
        this.person[2]++;
   },
    btnDecrease() {
      if(document.querySelector("input[id=adult]:checked")) 
        this.person[0]--;
        else if(document.querySelector("input[id=kid]:checked"))
        this.person[1]--;
        else
        this.person[2]--;
   },
  },
  
  computed: {

  },

  watch: {
 
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
  width: 100%;
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;               
  position: relative;
  left: -20px;
  margin: {
    top: 1rem;
    left: 2px;
    right: auto;
  }

    .dateBox{
        display: flex;
        align-items: center;
        vertical-align: middle;
        color: $text-main;
        width: 42%;
        box-sizing: border-box;
        cursor: pointer;
        margin: {
          left: auto;
          right: auto;
        };
        padding: 0 $spacing-4 0 $spacing-1;
        background: $base;
        box-shadow: $shadow-concave;
        border-radius: $radius-1;
    
        i{
          font-size: 2px;
          text-align: flex-start;
        }
    
        span{
          font-size: 14px;
        }
    }
  [class=material-icons]{
    font-size: 30px; 
    color: rgb(80, 80, 80); 
    margin: auto;
    position: relative;
    right: 8px;
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