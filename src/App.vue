<template>
<div id="header" style="padding-top:7px">Find Your Flight </div>


<div class="back">
</div>
<div class="base">
</div>

<div class="flight_Info"> <p>your trip</p></div>

<div id="departure_flight" @click="modaling"> 

<h2 @click="openModal = true" >INC - CJU</h2> <div id='oneway'>  one way</div>

</div>

<div class="showDepartureDate">   
  {{ DepartureDate }}, 2021 
  </div> 

<div v-for="(array_air,i) in ticket" v-bind:key="i"  >
 
 
<div class ="ticketBox" @click="array_air.unfold =! array_air.unfold" :class= "{ clickHeight: array_air.unfold = true }" >  <!--ticket`s base--> <!--토글 부여-->
          <!--insert handle action-->
                      <!--누르면 밑의 객체들이 정해진 방향, 길이만큼 밀려남 -->
                     <!--밀려나간 상태까지 걸리는 시간-->
                    <!--Onclick Action-->

<div id="firstDisplay">
  <div id="flightDetail">
    <div id="detailLabel">
      Departures</div>
    INC
     <div id="detailLabel"> 
       Incheon International Airport</div>
       </div>
  <div id="flightDetail">
      <div id="animContainer" style="left: -20px">
        <div id="animation">
        <div id="circle"> </div>
        <div id="circle"> </div>  
        <div id="circle"> </div>
        </div>   
      </div>
      <div id="animContainer" style="left:30px">
        <div id="animation">
        <div id="circle"> </div>
        <div id="circle"> </div>
        <div id="circle"> </div>
        </div>   
      </div>
      <img src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true" 
 :style="Airplane_in"/>
  </div>
  <div id="flightDetail">
    <div id="detailLabel">
      Arrivals </div>
    CJU
     <div id="detailLabel">
       Jeju International Airport</div>
       </div>
 </div>
 

  <transition-group name = "unfold_anim" :duration="{enter : 100, leave : 100000}">
  
   <div id="first" v-if="array_air.unfold">
     
  <!--간단한 정보(출발, 목적지, 시간, 항공사)-->

  <div id="firstTop"> 
  <img :src="ticket[i].img" :style="ticket[i].style"/>
   <div id="timeContainer">
     <div id="dateContainer">  <!--날짜, 시간 장소 등을 저장할 공간-->
   {{ Departure }}             <!--출발3지-->
    <div id="detailtime"> 09:40 </div>  <!--시간-->
    {{DepartureDate }}                     <!--날짜-->
                                         <!--이미지-->
 </div>
  <img alt="비행기" 
  src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true" 
 :style="Airplane_out"/>
 <div id="dateContainer">  <!--날짜, 시간 장소 등을 저장할 공간-->
     {{ Arrival }}     <!--출발지-->
        <div id="detailtime"> 10:30 </div>  <!--시간-->
   {{ DepartureDate }}                   <!--날짜-->
    </div>
  </div>
    </div>
  <div id="firstBehind">
          <div id="firstBehindDisplay">
            <div id="firstBehindRow">
              <div id="detail">
                Flight Time
                <div id="detailLabel">09:40 - 10:30</div>
              </div>
              <div id="detail">
                Transfer
                <div id="detailLabel">No Transfer</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                Duration
                <div id="detailLabel">0h 50 min</div>
              </div>
              <div id="detail">
                13<div id="detailLabel">Gate</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                Boarding Time
                <div id="detailLabel">09:15</div>
              </div>
              <div id="detail">
                Seat
                <div id="detailLabel">14C</div>
              </div>
              
            </div>
          </div>

<transition-group name = "unfold_anim" :duration="{enter : 100, leave : 100000}">
  
<div id="second" v-if="array_air.unfold">
    <div id="secondTop"/>
             <div id="secondBehind">
              <div id="secondBehindDisplay">
                <div id="price">
                  Price
                  <div id="priceLabel">$17</div>
                </div>
                <div id="price">
                  Class
                  <div id="priceLabel">Economy</div>
                </div>
                <img
                  id="barCode"
                  src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true"
                />
              </div>
           
               <div id="third" v-if="array_air.unfold">
                <div id="thirdTop"/>
                 <div id="secondBehindBottom">
                  <button
                    id="button">
                    Go to website
                  </button>
                </div>
              </div> 
            </div>
     </div> </transition-group>
         </div>
      </div></transition-group>
  </div>
 </div>

 



</template>


<script>
import data from './data.js'; 
//import Modal from './modal.vue';
//import ticketBox from '/ticketBox.vue';
 
export default {   // 데이터 저장하는 곳  {{데이터바인딩}}


  props : {
    color : { 
      type : String, 

    }
 
  },    
  name: 'ticketBox',

  methods: {  


      unfolding: function()
    {
       this.unfold = !this.unfold;
     },


     
  
    
  },

  mounted() { 

  },

  components: {
   // Modal : Modal

  },

  computed: {
    

  },
  
  data(){
    
    return{    
      openModal : true,
      ticket : data,   // from data.js
      
      clickNum : this.unfold,
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
 
<style>
/*펼치기*/

.clickHeight{
  height: 300px;
}

.unfold_anim-leave-active{ 
  transform: rotate3d(1, 0, 0, -180deg);  /* 펼치기 */
}

.unfold_anim-enter-active{
transform: rotate3d(1, 0, 0, -180deg);  /* 접기 */

}

.unfolding2-leave-active, .unfolding2-leave-from{

transform: rotate3d(1, 0, 0, -810deg);
transition-delay: 0.3s;
}

.unfolding2-enter-from{
transform: rotate3d(1, 1, 1, 0deg);
transition-delay: 1s;
}


/*접기*/


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

#back {

    width: 20px;
    height: 20px;
    position: absolute;
    left: 4px;
    top: 20px;
}

.ModalFrame 
{
  width: 400px;
  height: 200px;
}

.App{
  font-family: sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 0px 41px -7px rgba(0, 0, 0, 0.15);
  width: 400px;
  height: auto;
	background: #f3f3f3;

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

#hyphen_oneway
{
    width: 10px;
    height: 5px;
    z-index: auto;
    left: 65px;
    top: 70px;
    font-size: larger;
    font-family:'Times New Roman', Times;
}

#hyphen_roundtrip
{
    width: 10px;
    height: 5px;
    z-index: auto;
    left: 65px;
    top: 70px;
    font-size: larger;
    font-family:'Times New Roman', Times;
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

#showPeople{
    width: 30px;
    height: 30px;
    z-index: auto;
}

#BoardingPassContainer{
    position: relative;
    width: 400px;
    height: 100px;
    margin: 10px;
}

.ticketBox{
    width: 340px;
    height: 100px;
    position: relative;
    backface-visibility: hidden;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.1);
    transform-origin: bottom;
    margin: 20px;
    cursor: grab;  
}

 #timeContainer {
    display: flex;
    padding-top: 14px;
  }

                        
#dateContainer{            /*첫페이지-출발지의 시간, 날짜*/

  color: rgb(121, 115, 115);
  font-size: 9px;
  padding-top: 11px;
   
  
}


#detailtime{
  font-weight: bold;
  color:#000000;
  font-size: 16px;
 
}



  #first {
    width: 340px;
    height: 100px;
    position: absolute;
    border-radius: 5px;
    color: #000;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.6s;
    border-radius: 8px;
    display: flex;
  
  }

  #firstTop {
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

  #firstDisplay {  /*첫번째 칸에 종속되어 있는 */
    width: 100%;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 23px;
    flex-wrap: wrap;
    backface-visibility: hidden;
    box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.17);
  }

  #flightDetail {
    font-size: 20px;
    font-weight: bold;
    margin: -3px 0px 0px 10px;
    color: #3f3f3f;
    flex: 0.4;
  }

#detailLabel{
  color: lightslategrey;
  font-size: 9px;

}


#animContainer{
  padding-left: 0px;
  position: absolute;
  width: 30px;
  height: 35px;
  top: 30px;
  margin-left: 10px;
  overflow: hidden;
}

#animation{
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



#circle {
  width: 5px;
  height: 5px;
  background: #707070;
  border-radius: 50%;
  margin-right: 13px;
}
  #firstBehind {
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
  
  #firstBehindDisplay {
    width: 100%;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 8px;
    padding: 12px 23px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
  }
  
  #firstBehindRow {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 7px;
    text-align: left;
  }
  
  #detail {
    font-size: 15px;
    color: rgb(69, 69, 69);
    font-weight: bold;
  }
  
  #detailLabel {
    color: #686868;
    font-size: 10px;
    font-weight: 100;
  }
  
  #second {
    width: 340px;
    height: 50px;
    position: absolute;
    bottom: -2px;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.2s;
    border-radius: 8px;
  }
  
  #secondTop {
    width: 340px;
    height: 50px;
    position: absolute;
    background: rgb(231, 231, 231);
    backface-visibility: visible;
    border-radius: 8px;
  }
 
  
  #secondBehind {
    width: 340px;
    height: 50px;
    position: absolute;
    background: #fff;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, 0deg);
    backface-visibility: visible;
    border-radius: 8px;
    border: 1px dashed #d1d1d1;
    border-left: none;
    border-right: none;
  }
  
  #secondBehindDisplay {
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
  
  #secondBehindBottom {
    width: 340px;
    height: 100px;
    position: absolute;
    background: #fff;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, -180deg);
    backface-visibility: hidden;
    border-radius: 0px 0px 8px 8px;
    border-radius: 8px;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
  }
  
  #third {
    width: 340px;
    height: 100px;
    position: absolute;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 1s;
    border-radius: 8px;
  }

    
  #button {
    color: #2d2d2d;
    font-size: 19px;
    font-weight: bold;
    padding: 4px 124px;
    border: 1px solid #2d2d2d;
    background: #fff;
    border-radius: 4px;
    margin-top: 9px;
  }
  
  #price {
    color: #2d2d2d;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin-top: -2px;
  }
  
  #priceLabel {
    color: #747474;
    font-weight: 100;
    font-size: 10px;
    text-align: left;
  }
  
  #barCode {
    width: 98px;
    height: 30px;
  }
  
</style>

