<!--App.vue-->

<template>

<div class="App">
<header>John, I gotta go🛫</header>
<div class="base">
</div>
<div class="selectContainer" @click="openModal = true"> 
    <div class="flightContainer">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" :style="airplane_img"/>
 </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
    <span>Depart Date</span>
    <span>Return Date</span>
    <span>Passengers</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
  </div>

<div class="selectContainer" v-if="openModal == true">  
  <ToggleButton :style="{marginLeft:'70%'}"/>
  <div class="flightContainer">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img alt="dd" src=".\assets\icon\airplane2.png" :style="airplane_img"/>
 <Button layout='reverse' color='base' :style="{top: '10px', display: 'inline'}">
   <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" :style="{position:'absolute', display: 'flex',}">
   <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
   </svg> -->
   <div class="material-icons" :style="{margin: '0px auto'}">compare_arrows</div>
   </Button> </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
<!--search Departure-->
  <!--search Destination-->

<div class="dateContainer">
 <Search class="searchDate" 
 type='form' text="Depart Date" place="Select date" />
 <Search class="searchDate" 
 type='form' text="Return Date" place="Select date"/>
</div>
<Icon icon='pesrson' :style="{width:'0px', height: '0px'}"/>

<span class="material-icons" style="font-size: 40px;">people</span>
 <ul class="passengers"> 
  <li class="passengersAdult">
   <label>
    <input type="radio" id="passenger1" name="passenger" value="adult" checked>
        <div>Adult 
          &times; <span> 1 </span>
         <h2>12+ years old</h2></div>
      </label>
  </li>
  <li class="passengersKids">
      <label>
      <input type="radio" id="passenger2" name="passenger" value="kid"> 
        kid &times; <span> 0 </span>
        <h2>under 12 </h2>
      </label>
  </li>
  <li class="passengersBaby">
      <label>
      <input type="radio" id="passenger3" name="passenger" value="baby"> 
       <div>baby &times; <span> 0 </span>
       <h2>less than 24 months</h2></div>
      </label> 
  </li>
  <li class="BtnContainer">
  <Button layout='Increase' color='base' @click="btnIncrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-person-plus-fill">
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> </Button>
  <Button layout='Decrease' color='base' @click="btnDecrease" > 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    </Button>
 </li> 
</ul>       
  <div class="classContainer">
   
    <div class="economy">
      <input type="radio" name="class" value="economy" v-model="selectClass" checked="checked">Economy </div>
    <div class="preEconomy">
      <input type="radio" name="class" value="premium economy" v-model="selectClass"> Premium Economy </div>
    <div class="business">
      <input type="radio" name="class" value="business" v-model="selectClass"> business </div>
    <div class="firstClass">
      <input type="radio" name="class" value="first" v-model="selectClass"> First </div>
  </div>


<Button> Search </Button>

</div>   

<div class="cardContainer" :style="{marginTop:'30px'}">
  <TicketBox/>
</div>
 </div>


</template>

<script>
import data from './data'; 
import Button from './components/UI/neumorphism/button/Button.vue';
//import Modal from './modal.vue';
import TicketBox from './ticketBox.vue';
import ToggleButton from './components/UI/neumorphism/toggle-button/ToggleButton.vue';
import Search from './components/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';
import Icon from './components/UI/neumorphism/decorated-icon/DecoratedIcon.vue'
import { ref } from 'vue'

export default{   // 데이터 저장하는 곳  {{데이터바인딩}}
  
  props: {
  
  },
  name: 'App',
  components: {
   TicketBox : TicketBox,
   //Modal : Modal,
   ToggleButton: ToggleButton,
   Search: Search,
   Button: Button,
   Icon: Icon,
  },
  
  data(){
    
    return{
      ticket: data,   // from data.js,
      person : 0,
      selectClass : '',
      openModal : false,
      btnActive: false,
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      Departure : 'Incheon',
      Arrival : 'Jeju',
      DepartureDate : 'September 17th', 
      ArrivalDate : 'October 15th',
      airplane_img : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: '10px'},
      
    }
  },

setup(){

  let person = ref(0)
  function btnIncrease(){
     person.value += 1
  }
  return {
    btnIncrease,
  }
},
  methods: {  
    activeModal(){
      this.openModal == true;
    },
    btnDecrease(){
     this.person--;
    }
  },
  watch: {
    
  },

  mounted() { 

  },

  computed: { 

  }

}
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

#base {
    display: flex;
    align-items: center;
    justify-content: center;
    background : #ededed;
}

.App{
  font-family: sans-serif;
  background: $base;

}

.flight_Info {
    text-align: start;
    margin-left: 40px;
    margin-top: 30px;
} 

header{
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  width: 387px;
  height: 46px;
  text-align: justify;
  word-spacing: 2px;
  letter-spacing: 3px;
  position: relative;
  display: flex;
  z-index: 5;
}

.selectContainer {
  border: 1px solid $base;
  margin: {
    left: 1em;
    right: 1em;
  };
  width: 90%;
  max-width: 1035px;
  height: auto;
  box-sizing: border-box;
  background: $base-liner;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  cursor: pointer;
}

.flightContainer{
  display: flex;
  //flex-wrap: wrap;
  justify-content: center;
  margin: {
    top: 10px;
    } 
  span{
    color: #757575;
    font: {
      size: 10px;
    }
    padding: {
      left: 40px;
      right: 40px;}
 
    h1{
      color: #000000;
      font: {
        size: 38px;}
        }
      text-align: center; 
  }
}

.dateContainer{
  display: flex;
  //flex-wrap: wrap;
  justify-content: center;

  .searchDate{
    margin: 16px;
  }
}

.cardContainer{
  border-radius : solid 10px;
  position: relative; 
  width : 387px;
  height : auto;
}

.block{
  border-radius: 15px;
  box-shadow: $shadow-drop;
  background: $base;
  justify-content: center;
}

/* Design radio button */
input[type="radio"]{
 display: none;

  &:checked ~ div{
    background-color: rgba($primary, 0.1);
    transition: background-color .4s ease;
   }
}


.passengers{
  @extend .block;
  width: 100%;
  max-width: 30rem;
  height: 5rem;
  position: relative;
  display: flex;
  //flex-direction: row;
  //justify-content: space-between;
 li{
  justify-content: center;
  display: inline;
  text-align: center;
 
  }  
  h2{
      color: $text-main;
        font: {
        size: 0.2em;
      }    
      margin: {
        top: 6px;
      }
      padding: {
        bottom: 6px;
      }
    }
}
.selectLine{     
  height: 100%;
  border: 0.1rem dashed #a8a8a8;
  border: {
    left: none;
    top: none;
    bottom: none;
  }
  background: $base;
}
.passengersAdult{
  width: 30%;
  @extend .selectLine;
  border-radius: 15px 0px 0px 15px;
  position: relative;
  
  label{
     margin: 10px;
   }
}  

.passengersKids, .passengersBaby{
  width: 30%;
  @extend .passengersAdult;
  border-radius: 0 0 0 0;
}

.BtnContainer{
  display: flex;
  position: relative;
  flex-direction: column;
}

.classContainer{
  @extend .passengers;
  border-radius: 15px, 15px, 15px, 15px;
  height: 4rem;
  margin: {
    top: 0.2rem;
    bottom: 1.4rem;
  }
}

.economy, .preEconomy, .business{
  @extend .selectLine;
  width: 25%;
  position: relative;
  display: flex;
}
.firstClass{
  @extend .selectLine;
  border-radius: 15px, 15px, 15px, 15px;
  border: {
    right: none;
  }
}


</style>