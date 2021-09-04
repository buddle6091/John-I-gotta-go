<template>

<Button_new> import </Button_new>
<Modal/>
  <div class="Aspp">
<div id="header" style="padding-top:7px">Find Your Flight🛫 </div>

<div class="base">
</div>

<div class="flight_Info"> <p>your trip</p></div>
         
<div id="departure_flight"> 

<h2  @click="openModal = true">INC - CJU</h2> <div id='oneway'>  one way</div>

</div>

<div class="showDepartureDate">   
  {{ DepartureDate }}, 2021 
  </div> 

<TicketBox/>

 </div>


</template>


<script>
import data from './data.js'; 
import Modal from './modal.vue';
import TicketBox from './ticketBox.vue';
import Button from './components/UI/button/Button.vue'

export default {   // 데이터 저장하는 곳  {{데이터바인딩}}

   emit: [
       'array_air.unfold =! array_air.unfold'
    ],   
 
  props : {
 
  },    
  name: 'App',

  methods: {   
    
  },

  mounted() { 

  },

  components: {
   TicketBox : TicketBox,
   Modal : Modal,
   Button_new: Button,
  },

  computed: {
    

  },
  
  data(){
    
    return{  
      ticket : data,   // from data.js
      
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
  } 
}
</script>
 
<style lang="scss" scoped>
@import './components/scss/main.scss';

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  perspective: 700px;
  font-family: arial, 'Times New Roman', Times, serif;
 
}

#base {
    display: flex;
    align-items: center;
    justify-content: center;
    background : #ededed;
}

.App{
  font-family: sans-serif;
  text-align: center;
  display: flex;  
  flex-direction: column;
  box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.15);
  width: 400px;
  height: auto;
	background: rgb(94, 145, 255);

}

.flight_Info {
    text-align: start;
    margin-left: 40px;
    margin-top: 30px;
} 

#header{
  color: rgb(34, 34, 34);
  font-weight: bold;
  font-size: 20px;
  width: 340px;
  height: 46px;
  text-align: center;
  margin-top: 30px;
  word-spacing: 2px;
  letter-spacing: 1px;
}

#departure_flight{
  color: #141414;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1px;
  display: flex;
  margin-top: 10px;
  margin-left: 40px;
  cursor: grab;
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

.departure{
    width: 50px;
    height: 30px;
    z-index: auto;
    left: 10px;
    top: 70px;
    font-size: larger;
    font-family:'Times New Roman', Times;
    color:#ffff00
}

.arrival{
    width: 50px;
    height: 30px;
    z-index: auto;
    left: 80px;
    top: 70px;
    font-size: larger;
    font-family:'Times New Roman', Times;
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


</style>