<!--App.vue-->

<template>

<div class="App">
<header><span>John, I gotta go🛫</span></header>
<div class="selectContainer" @click="openModal = true"> 
  <div class="flightContainer">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" :style="airplane_img_inactive"/>
 </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
    <div class="shortInfo">
    <span>10.19</span>~ <span>10.22</span>
    <span>3 people</span>
    <span>economy</span>
</div>
  </div>

<div class="selectContainer">  
  <ToggleButton :style="{marginLeft:'70%'}"/>
  <div class="flightContainer">
   <span><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" :style="airplane_img_active"/>
 <Button layout='reverse' color='base' :style="{top: '10px', display: 'inline'}">
   <div class="material-icons" :style="{fontSize:'30px', display:'flex'}">compare_arrows</div>
   </Button> </div>
   <span><h1>CJU</h1>
    Jeju Airport</span>
    </div>
<!--search Departure-->
  <!--search Destination-->

<div class="set">
  <i class="material-icons"> calendar_today </i>
 <Search class="searchDate" 
 type='form' text="Depart Date" place="Select date" />
 <Search class="searchDate" 
 type='form' text="Return Date" place="Select date"/>
</div>
<Icon icon='pesrson' :style="{width:'0px', height: '0px'}"/>

<!-- passengers -->
<div class="set">
 <i class="material-icons">people</i>
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
</div>

<!--class-->
<div class="set">
  <i class="material-icons">airline_seat_recline_extra</i>
  <ul class="classContainer">
    <li class="economy">
      <input type="radio" name="class" value="economy" v-model="selectClass" checked="checked">Economy </li>
    <li class="preEconomy">
      <input type="radio" name="class" value="premium economy" v-model="selectClass"> Premium Economy </li>
    <li class="business">
      <input type="radio" name="class" value="business" v-model="selectClass"> business </li>
    <li class="firstClass">
      <input type="radio" name="class" value="first" v-model="selectClass"> First </li>
  </ul>
</div>

<Button> Search </Button>

</div>   

<div class="container">
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
      airplane_img_inactive : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: '20px', marginRight: '20px'},
      airplane_img_active : 
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

.App{
  font-family: sans-serif;
  background: $base;
}

.flight_Info {
    text-align: flex-start;
    margin-left: 40px;
    margin-top: 30px;
} 

header{
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 46px;
  margin: 0 auto;
  position: relative;
  top: 0;
  span{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: justify;
    word-spacing: 2px;
    letter-spacing: 3px;
    position: fixed;
    height: 30px;
    top: 0;
    bottom: 0; 
    left: 10px;
    margin: auto;
    }

}

.selectContainer {
  border: 2px solid $base;
  margin: {
    left: 1em;
    right: 1em;
  };
  width: 90%;
  max-width: 1035px;
  height: auto;
  box-sizing: border-box;
  background: $base;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  margin: auto;
  padding: $spacing-4 $spacing-6;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  cursor: pointer;

  &__inactive{
    position: absolute;
    opacity: 1;
    h3{
      top: 10px;
    }
  }
  &__active-content{
    overflow: hidden;
    transition: width 0.5s ease;
  }

  &:active{
    .selectContainer__inactive-content{
      opacity: 0;
    }
    .selectContainer__active-content{
      opacity: 1;
    }
  }

  
.flightContainer{
  display: flex;
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
.shortInfo{
  position: relative;
  top: 10px;
  span{
    padding: 10px, 10px;
    margin-right: 10px;
  }
}
.set{
  width: 90%;
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  margin: {
    top: 1rem;
  }
  left: -20px;

  [class=material-icons]{
    font-size: 30px; 
    color: rgb(80, 80, 80); 
    margin: auto;
    position: relative;
    right: 8px;
  }
}

.block{
  border: 1px solid rgba(168, 168, 168, 0.2);
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
  width: 90%;
  max-width: 21rem;
  height: 5rem;
  position: relative;
  display: flex;

 li{
  display: inline;
  text-align: center;
  font-size: 0.9rem;
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
  width: 10%;
  display: flex;
  position: relative;
  flex-direction: column;
}

.classContainer{
  @extend .passengers;
  width: 100%;
  border-radius: 15px, 15px, 15px, 15px;
  height: 4rem;
  margin: {
   
    bottom: 1.6rem;
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
  width: 25%;
  border-radius: 15px, 15px, 15px, 15px;
  border: {
    right: none;
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