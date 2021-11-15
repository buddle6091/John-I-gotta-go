<template>
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
   
  <div class="flightContainer">
   <span  data-bs-toggle="modal" data-bs-target="#exampleModal"><h1>ICN</h1>
    Incheon International Airport</span> 
  <div>  
 <img src=".\assets\icon\airplane2.png" alt="비행기2" :style="airplane_img_active"/>
 <Button layout='reverse' color='base' :style="{top:'4px', left:'1px', display: 'relative'}">
   <div class="material-icons" :style="{fontSize:'30px', display:'flex'}">compare_arrows</div>
 </Button> </div>
   <span  data-bs-toggle="modal" data-bs-target="#exampleModal"><h1>CJU</h1>
    Jeju Airport</span>
    </div>
<!--search Departure-->
  <!--search Destination-->
<div class="set">
  <span class="material-icons"> date_range </span> 
   <div class="dateBox"><i class="material-icons">flight_takeoff</i>
    <datepicker class="picker" v-model="from" placeholder="Depart Date" :weekStartsOn='0' 
     :lower-limit="new Date()" :style="{ width: '6rem', backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
    <div class="dateBox"><i class="material-icons">flight_land</i>
    <datepicker class="picker" v-model="to" placeholder="Return Date" :weekStartsOn='0' 
     :lower-limit="picked" :style="{ width: '8rem', backgroundColor: 'rgba(0, 0, 0, 0)' }"/>
    </div> 
</div>
<!-- passengers -->
<div class="set" :style="{ zIndex: -5 }">
 <span class="material-icons">people</span>
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
 <span class="material-icons">flight_class</span>
 <ul class="block"> 
  <li class="block-radio-first class">
   <label>
    <input type="radio" id="class1" name="class" value="economy" v-model="selectClass" checked>
        <div> <i class="material-icons">airline_seat_recline_normal</i>
         <h2>Economy</h2></div>
      </label>
  </li>
  <li class="block-radio class">
      <label>
      <input type="radio" id="class2" name="class" value="premium economy" v-model="selectClass"> 
        <div> <i class="material-icons">airline_seat_recline_extra</i>
         <h2>Premium economy</h2></div>         
      </label>
  </li>
  <li class="block-radio class">
      <label>
      <input type="radio" id="class3" name="class" value="business" v-model="selectClass"> 
       <div> <i class="material-icons">airline_seat_flat_angled</i>
         <h2>Business</h2></div>
      </label> 
  </li>
  <li class="block-radio-last class">
      <label>
      <input type="radio" id="class4" name="class" value="first" v-model="selectClass"> 
       <div> <i class="material-icons">airline_seat_individual_suite</i>
         <h2>First</h2></div>     
      </label> 
  </li>
</ul>       
</div>

  <Button @click="search" :style="{marginTop: '2rem', zIndex: '-1'}"> Search </Button>
</div>   
</template>

<script>

//import Search from './components/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';
//import Icon from './components/UI/neumorphism/decorated-icon/DecoratedIcon.vue'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
const picked = ref(new Date())
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { enUS } from 'date-fns/locale'
// eslint-disable-next-line no-unused-vars
import { isSameDay } from 'date-fns'
export default {
    
}
</script>

<style lang="scss">
    
</style>