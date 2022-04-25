<template>
<div v-for="ticket in tickets" :key="ticket" :ticket="ticket">
<div class ="ticketBox" @click="ticket.unfold =! ticket.unfold"
:style="{ height: ticket.unfold ? `300px` : `100px`,
         transition : ticket.unfold ?'0.6s' : '0.8s' }">  <!--ticket`s base--> <!--토글 부여-->
                    <!--insert handle action-->
                    <!--누르면 밑의 객체들이 정해진 방향, 길이만큼 밀려남 -->
                    <!--밀려나간 상태까지 걸리는 시간-->
                    <!--Onclick Action-->

<div id="firstDisplay">
  <div id="flightDetail">
    <div id="detailLabel">
      Departures</div>
    {{ shortDep }}
     <div id="detailLabel"> 
       {{ getAirport_dep }}</div>
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
    {{ shortArr }}
     <div id="detailLabel">
       {{ getAirport_arr }}</div>
       </div>
  </div>
 
  <div id="first" :style="{transform: ticket.unfold ? 'rotate3d(1, 0, 0, -180deg)':'rotate3d(1, 0, 0, 0deg)',
  transition: ticket.unfold ? '0.4s' : '1s'}">
     
  <!--간단한 정보(출발, 목적지, 시간, 항공사)-->

  <div id="firstTop"> 
   <!-- 해당 항공사에 속한 그림만 보여지게 if -->
   <img src="../assets/JEJU_airline.png" :style="{ width: '9rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '제주항공'"/>
   <img src="../assets/ASIANA_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '아시아나항공'"/>
   <img src="../assets/JINAIR_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '진에어'"/>
   <img src="../assets/JEJU_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '에어서울'"/>
   <img src="../assets/KOREAN_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto', marginTop: '-0.7rem'}" v-if="ticket.airlineNm == '대한항공'"/>
   <img src="../assets/BUSAN_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '에어부산'"/>
   <img src="../assets/TWAY_airline.png" :style="{ width: '4.2rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '티웨이항공'"/>
   <img src="../assets/EASTAR_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '이스타항공'"/>
   <img src="../assets/HI_AIR_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '하이에어'"/>
   <img src="../assets/FLY_GANGWON_airline.png" :style="{ width: '7.5rem', height: 'auto', margin: 'auto'}" v-if="ticket.airlineNm == '플라이강원'"/>


    <div id="timeContainer">
     <div id="dateContainer">  <!--날짜, 시간 장소 등을 저장할 공간-->
      {{ depNm }}             <!--출발지-->  <!-- <-- 이거 해결법 찾기 -->
      <div id="detailtime"> {{ ticket.depTime }}:{{ ticket.depMin }} </div>  <!--시간-->
      {{ ex_month }} {{ this.$store.state.exDate }}   <!--날짜-->                                       
     </div>
      <img alt="비행기" src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true" :style="Airplane_out"/>
     <div id="dateContainer"><!--날짜, 시간 장소 등을 저장할 공간-->
      {{ arrNm }}     <!--출발지-->
      <div id="detailtime">  {{ ticket.arrTime }}:{{ ticket.arrMin }} </div>  <!--시간-->
      {{ ex_month }} {{ this.$store.state.exDate }}  <!--날짜-->
    </div>
  </div>
    </div>
  <div id="firstBehind">
          <div id="firstBehindDisplay">
            <div id="firstBehindRow">
              <div id="detail">
                Flight Time
                <div id="detailLabel">{{ ticket.depTime }}:{{ ticket.depMin }} - {{ ticket.arrTime }}:{{ ticket.arrMin }} </div> <!-- arrPlandTime - depPlandTime -->
              </div>
              <div id="detail">
                Transfer
                <div id="detailLabel">No Transfer</div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                Duration
                <div id="detailLabel">h  min</div>
              </div>
              <div id="detail">
                Gate<div id="detailLabel"> -- </div>
              </div>
            </div>
            <div id="firstBehindRow">
              <div id="detail">
                Boarding Time
                <div id="detailLabel"> {{ ticket.depTime }}:{{ ticket.depMin }} - 20min </div>  <!-- depPlandTime - 20min -->
              </div>
              <div id="detail">
                Seat
                <div id="detailLabel">14C</div> <!-- random -->
              </div>
            </div>
          </div> 
<div id="second" :style="{transform: ticket.unfold ? `rotate3d(1, 0, 0, -180deg)`:`rotate3d(1, 0, 0, 0deg)`,
 transition: ticket.unfold ? '0.8s' : '0.8s'  }">
    <div id="secondTop"/>
             <div id="secondBehind">
              <div id="secondBehindDisplay">
                <div id="price">
                  Price
                  <div id="priceLabel">please check in website</div> 
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
            
               <div id="third"  :style="{ transform: ticket.unfold ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`,
        transition: ticket.unfold ? '1s' : '0.4s' }">
                <div id="thirdTop"/>
                 <div id="secondBehindBottom">
                </div>
              </div> 
            </div>
          </div> 
         </div>
      </div>  
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {   // 데이터 저장하는 곳  {{ 데이터바인딩 }}
 
  props : {

  },    
  name: 'TicketBox',

  methods: {  

  },

  mounted() { 

  },

  components: {
    
  },

  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    ...mapState(['depNm', 'arrNm', 'airlineNm', 'resTime']),
    ...mapGetters({
      shortDep: 'shortDep',
      shortArr: 'shortArr',
      getAirport_dep : 'getAirport_dep',
      getAirport_arr: 'getAirport_arr',
      getAirline: 'getAirline',
      getDepAirportNm: 'getDepAirportNm'
    }),
    ex_month() {
      let eng_Month = ''
      if(this.$store.state.exMonth == '1'){
        eng_Month = 'January'
      }
      else if(this.$store.state.exMonth == '2'){
        eng_Month = 'Febuary'
      }
      else if(this.$store.state.exMonth == '3'){
        eng_Month = 'March'
      }
      else if(this.$store.state.exMonth == '4'){
        eng_Month = 'April'
      }
      else if(this.$store.state.exMonth == '5'){
        eng_Month = 'May'
      }
      else if(this.$store.state.exMonth == '6'){
        eng_Month = 'June'
      }
      else if(this.$store.state.exMonth == '7'){
        eng_Month = 'July'
      }
      else if(this.$store.state.exMonth == '8'){
        eng_Month = 'August'
      }
      else if(this.$store.state.exMonth == '9'){
        eng_Month = 'September'
      }
      else if(this.$store.state.exMonth == '10'){
        eng_Month = 'October'
      }
      else if(this.$store.state.exMonth == '11'){
        eng_Month = 'November'
      }
      else if(this.$store.state.exMonth == '12'){
        eng_Month = 'December'
      }
      return eng_Month
    },

  },
  
  data(){
    
    return{          
      openModal : true,
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      Departure : 'Incheon',
      Arrival : 'Jeju',
      ArrivalDate : 'October 15th',
      Airplane_in :{  height:'37px',
                      marginTop:'23px',
                      marginLeft:'8px',
                      marginRight:'10px',
                      position:'absolute',
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
@import '../UI/scss/main.scss';
 
.ticketBox{
    width: 340px;
    height: 100px;
    position: relative;
    backface-visibility: hidden;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.1);
    transform-origin: bottom;
    position: relative;
    top: 1rem;
    margin:{
      top: 1.5rem;
      left: auto;
      right: auto;
      bottom: 0;
    }
    cursor: grab;  
}

 #timeContainer {
    display: flex;
    margin:{
      top: 13px;
      left: auto;
      right: 1.3rem;}

  }
                        
#dateContainer{           /*첫페이지-출발지의 시간, 날짜*/
  color: rgb(121, 115, 115);
  font-size: 9px;
  padding-top: 10px; 
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
    padding: 12px 23px;
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
  height: 45px;
  top: 48px;
  margin-left: 140px;
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
    padding: 6px 23px;
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
    backface-visibility: hidden;
    border-radius: 8px;
  }
  
  #secondBehind {
    width: 340px;
    height: 50px;
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
    height: 50px;
    position: absolute;
    background: white;
    transform-origin: center;
    transform: rotate3d(1, 0, 0, -180deg);
    backface-visibility: hidden;
    border-radius: 0px 0px 8px 8px;
    border-radius: 8px;
    box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
  }

  #thirdTop {
  width: 340px;
  height: 50px;
  position: absolute;
  background: rgb(190, 190, 190);
  backface-visibility: hidden;
  border-radius: 8px;
}
  
  #third {
    width: 340px;
    height: 50px;
    position: absolute;
    transform-origin: bottom;
    transform-style: preserve-3d;
    border-radius: 8px;
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