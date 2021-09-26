<template>

<div class="App">
<div id="header" style="padding-top:7px">John, I gotta go🛫 </div>
<div class="base">
</div>

<div class="selectContainer">  
   <ToggleButton :style="{marginLeft:'180px'}"/>
  <Search text="Departure" place="Incheon" @input="handler"/>  <!--search Departure-->
  <Search text="Destination" place="To"/>     <!--search Destination-->



 <Search :style="{width:'36%', position:'absolute', justifyContent:'spaceAround'}" 
 type='form' text="Depart Date" place="Select date" />
 <Search :style="{width:'36%', position:'relative', marginLeft:'168px'}" 
 type='form' text="Return Date" place="Select date"/>

Passengers <Icon icon='person' :style="{width:'0px', height: '0px'}"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
 <div class="passengers"> 
  <div class="passengersAdult">
    <div class="detailPass">
      <input type="radio" name="passenger" v-model="picked" value="adult" checked> Adult x {{ picked }}
   <h2>12+ years old</h2>
   </div>
  </div>
  <div class="passengersKids">
    <div class="detailPass">
      <input type="radio" name="passenger" v-model="picked" value="kid"> kid x {{ picked }}
   <h2>under 12</h2>
   </div>
  </div>
  <div class="passengersBaby">
    <div class="detailPass">
      <input type="radio" name="passenger" v-model="picked" value="baby"> <h1> baby x {{ picked }} </h1>
   <h2>less than 24 months</h2>
   </div>
  </div>
  <div class="BtnContainer">
  <Button layout='Increase' color='base' @click="btnIncrease"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"  fill="currentColor" class="bi bi-person-plus-fill">
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> </Button>
  <Button layout='Decrease' color='base' @click="btnDecrease" style="top:1px"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
    </Button>
 </div> 
</div>      
  Class 
  <div class="classContainer">
   
    <div class="economy">
      <input type="radio" name="class" value="economy" v-model="selectClass" checked="checked">Economy </div>
    <div class="preEconomy">
      <input type="radio" name="class" value="premium economy" v-model="selectClass"> Premium Economy </div>
    <div class="business">
      <input type="radio" name="class" value="business" v-model="selectClass"> business </div>
    <div class="firstClass">
      <input type="radio" name="class" value="first" v-model="selectClass"> First </div>
 <span> your class = "{{ selectClass }}" </span> 
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
import Button from './components/UI/neumorphism/button/Button.vue'
//import Modal from './modal.vue';
import TicketBox from './ticketBox.vue';
import ToggleButton from './components/UI/neumorphism/toggle-button/ToggleButton.vue';
import Search from './components/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';
import Icon from './components/UI/neumorphism/decorated-icon/DecoratedIcon.vue'

export default{   // 데이터 저장하는 곳  {{데이터바인딩}}

   emit: [
      
    ],   
 
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
      btnActive: false,
      picked: "",
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      Departure : 'Incheon',
      Arrival : 'Jeju',
      DepartureDate : 'September 17th', 
      ArrivalDate : 'October 15th',
      Airplane_in :{ height:'37px',
                      marginTop:'14px',
                      marginLeft:'8px',
                      marginRight:'10px',
                      },            
       Airplane_out :{
                      height:'27px',
                      marginTop:'24px',
                      marginLeft:'10px',
                      marginRight:'16px',
                      },      
    }   
  },

  methods: {   
    selectPerson(event){
     console.log(event.target.value);
    },
    btnIncrease(){
     this.person++;
    },
    btnDecrease(){
     this.person--;
    }


  },

  watch: {
    
  },

  mounted() { 

  },

  computed: {  // methods -> computed (caching - save result) 
/*
  countPerson() {
    get(){
    return this. ~~~~
    }
    set(){

    }
  }
*/

  }

}
</script>
 
<style lang="scss" scoped>
@import './components/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

.selectContainer {
  border: 1px solid $base;
  left : 7px;
  width: 95%;
  height: auto;
  box-sizing: border-box;
  background: $base-liner;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
  cursor: pointer;
}

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  perspective: 700px;
 
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

#header{
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Dancing script', sans-serif;
  font-weight: 300;
  font-size: 20px;
  width: 387px;
  height: 46px;
  text-align: justify;
  word-spacing: 2px;
  letter-spacing: 3px;
  display: block;
  z-index: 20px;
}


#oneway{
  font-size: 12px;
  font-weight: 100px;
  background: lightsteelblue;
  border: 2px solid black;
  position: relative;
  border-radius: 10px;
  color: black;
  margin-left: 10px;
  margin-top: 5px;
  border-radius: 10px;
}


.showDepartureDate{
    width: 5000px;
    height: 30px;
    z-index: auto;
    margin-top: 5px;
    margin-left: 70px;
    font-size: smaller;
}

#showArrivalDate {
    width: 50px;
    height: 30px;
    z-index: auto;
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
  vertical-align: middle;
}
.passengers{
  @extend .block;
  width: 100%;
  height: 5rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.detailPass{
     h2{
        color: $text-main;
        font: {
        size: 0.2em;
      }    
      display: flex;  
      margin: {
        top: 20px;
      }
    }
}
.selectLine{     
  width: 28%;
  height: 100%;
  border: 0.1rem dashed #a8a8a8;
  border: {
    left: none;
    top: none;
    bottom: none;
  }
  background: $base;
}
.passengersAdult, .passengersKids, .passengersBaby{
  @extend .selectLine;
  border-radius: 15px 0px 0px 15px;
  position: relative;
  display: flex;
  justify-content: space-between;
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