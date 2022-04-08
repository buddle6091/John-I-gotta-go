<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :style="{backgroundColor: '#eff1f650'}">
  <div class="modal-dialog">
    <div class="neu-modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">John, where are you going to 🛫</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-3">
      <div class="col-md-auto">
        <TextField class="is-invalid" id="dep_Text" aria-describedby="validationServer03Feedback" required data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text" v-model="departure" :value="departure" @change="selectDep($event)" type="search" placeholder="search country or city"> 
        {{ departure }}
         </TextField>
        <!-- <input type="text" class="neu-search is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text" placeholder="search country or city"> -->
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample">
          
        <div class="neu-accordion" id="accordionExample">
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingOne">
            <button class="neu-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#D_KR" aria-expanded="true" aria-controls="collapseOne">
                Domestic (South Korea) .
            </button>
            </h2>
            <div id="D_KR" class="neu-accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Incheon International Airport" name="NAARKSI" value="Seoul(ICN)">Seoul(ICN)</button> <!-- Incheon (NAARKSI) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Gimpo International Airport" name="NAARKSS" value="Seoul(GMP)">Seoul(GMP)</button> <!-- Gimpo (NAARKSS) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Jeju International Airport" name="NAARKPC" value="Jeju(CJU)">Jeju(CJU)</button> <!-- Jeju (NAARKPC) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Gwangju Airport" name="NAARKJJ" value="Gwangju(KWJ)">Gwangju(KWJ)</button> <!-- Gwangju (NAARKJJ) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Muan Airport" name="NAARKJB" value="Muan(MWX)">Muan(MWX)</button> <!-- Muan (NAARKJB) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Gunsan Airport" name="NAARKJK" value="Gunsan(KUV)">Gunsan(KUV)</button> <!-- Gunsan (NAARKJK) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Daegu International Airport" name="NAARKTN" value="Daegu(TAE)">Daegu(TAE)</button> <!-- Daegu (NAARKTN) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Sichuan Airport" name="NAARKPS" value="Sichuan(HIN)">Sichuan(HIN)</button> <!-- Sichuan (NAARKPS) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Yeosu Airport" name="NAARKJY" value="Yeosu(RSU)">Yeosu(RSU)</button> <!-- Yeosu (NAARKJY) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Ulsan Airport" name="NAARKPU" value="Ulsan(USN)">Ulsan(USN)</button> <!-- Ulsan (NAARKPU) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Wonju Airport" name="NAARKNW" value="Wonju(WJU)">Wonju(WJU)</button> <!-- Wonju (NAARKNW) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Cheongju Airport" name="NAARKYU" value="Cheongju(CJJ)">Cheongju(CJJ)</button> <!-- Cheongju (NAARKTU) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Pohang Airport" name="NAARKTH" value="Pohang(KPO)">Pohang(KPO)</button> <!-- Pohang (NAARKTH) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectDep($event)" id="Yangyang Airport" name="NAARKNY" value="Yangyang(YNY)">Yangyang(YNY)</button> <!-- Yangyang (NAARKNY) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled @click="selectDep($event)" id="Busan International Airport" value="Busan(PUS)">Busan(Pus)</button> <!-- Busan -->
              </div>
            </div>
          </div>
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingTwo">
              <button class="neu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#D_JP" aria-expanded="false" aria-controls="collapseTwo">
                Japan      
              </button>
            </h2>
            <div id="D_JP" class="neu-accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A second item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A third button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A fourth button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingThree">
              <button class="neu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#D_CH" aria-expanded="false" aria-controls="collapseThree">
                China
              </button>
            </h2>
            <div id="D_CH" class="neu-accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A second item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A third button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A fourth button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="col-md-auto">
        <TextField class="is-invalid" id="fli_text" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" labelstate type="search" placeholder="search country or city" value="hey" @input="arrival=$event.target.value">
         {{  }} </TextField>
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample2">
          <div class="neu-accordion" id="accordionExample">
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingOne">
            <button class="neu-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Domestic (South Korea)
            </button>
            </h2>
            <div id="collapseOne" class="neu-accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Incheon International Airport" name="NAARKSI" value="Seoul(ICN)">Seoul(ICN)</button> <!-- Incheon (NAARKSI) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Gimpo International Airport" name="NAARKSS" value="Seoul(GMP)">Seoul(GMP)</button> <!-- Gimpo (NAARKSS) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Jeju International Airport" name="NAARKPC" value="Jeju(CJU)">Jeju(CJU)</button> <!-- Jeju (NAARKPC) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Gwangju Airport" name="NAARKJJ" value="Gwangju(KWJ)">Gwangju(KWJ)</button> <!-- Gwangju (NAARKJJ) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Muan Airport" name="NAARKJB" value="Muan(MWX)">Muan(MWX)</button> <!-- Muan (NAARKJB) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Gunsan Airport" name="NAARKJK" value="Gunsan(KUV)">Gunsan(KUV)</button> <!-- Gunsan (NAARKJK) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Daegu International Airport" name="NAARKTN" value="Daegu(TAE)">Daegu(TAE)</button> <!-- Daegu (NAARKTN) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Sichuan Airport" name="NAARKPS" value="Sichuan(HIN)">Sichuan(HIN)</button> <!-- Sichuan (NAARKPS) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Yeosu Airport" name="NAARKJY" value="Yeosu(RSU)">Yeosu(RSU)</button> <!-- Yeosu (NAARKJY) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Ulsan Airport" name="NAARKPU" value="Ulsan(USN)">Ulsan(USN)</button> <!-- Ulsan (NAARKPU) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Wonju Airport" name="NAARKNW" value="Wonju(WJU)">Wonju(WJU)</button> <!-- Wonju (NAARKNW) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Cheongju Airport" name="NAARKYU" value="Cheongju(CJJ)">Cheongju(CJJ)</button> <!-- Cheongju (NAARKTU) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Pohang Airport" name="NAARKTH" value="Pohang(KPO)">Pohang(KPO)</button> <!-- Pohang (NAARKTH) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" @click="selectArr($event)" id="Yangyang Airport" name="NAARKNY" value="Yangyang(YNY)">Yangyang(YNY)</button> <!-- Yangyang (NAARKNY) -->
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled @click="selectArr($event)" id="Busan International Airport" value="Busan(PUS)">Busan(Pus)</button> <!-- Busan -->
              </div>
            </div>
          </div>
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingTwo">
              <button class="neu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Japan
              </button>
            </h2>
            <div id="collapseTwo" class="neu-accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action" ref="ICN">A second item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A third button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A fourth button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
          <div class="neu-accordion-item">
            <h2 class="neu-accordion-header" id="headingThree">
              <button class="neu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                China
              </button>
            </h2>
            <div id="collapseThree" class="neu-accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="neu-list-group">
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A second item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A third button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action">A fourth button item</button>
                <button type="button" class="neu-list-group-item neu-list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  <!-- button container -->
          <div class="modal-footer">
            <div class="g-col-6"><Button size="small" type="reset" style: marginRight=10px> reset </Button></div>
            <div class="g-col-6"><Button size="small" data-bs-dismiss="modal"> ok </Button></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Button from '../UI/UI/neumorphism/button/Button.vue';
import TextField from '../UI/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';

export default {   // 데이터 저장하는 곳  {{데이터바인딩}}
  props : {
    openModal: Boolean,
    value: String,
  },
  name: 'Modal-components',
  components: {
   TextField: TextField,
   Button: Button,
  },

  data(){   
    return{    
      departure: '',
      arrival: '',
    }  
  },
  /* 처음 실행 후 사용해도 실행 x -> 계산 결과 저장 like data()
  무조건 return 을 받아야 에러가 안 남*/
  computed : {

  },
  /* 사용할 때 마다 실행 */
  methods : {
    /* 확인 용 */
    selectDep($event){
      /* send data to store.js with $store.state */
      this.$store.state.departure = $event.target.value
      this.$store.state.depAirportId = $event.target.name
      this.$store.state.airport_dep = $event.target.id
      /* display airport`s short */
      this.$store.state.shortDep = $event.target.value.slice(-4,-1)
      /* display translate to Eng (depairportNm)*/
      this.$store.state.depNm = $event.target.value.slice(-4, -1)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.departure)
      //document.getElementById('fli_text').innerText = this.arrival
      // eslint-disable-next-line no-console
      console.log(this.$store.state.depAirportId)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.shortDep)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.depNm)
      // innertext 에 넣으면 상자가 없어짐. value는 인식을 못받음 아래것만 바뀌게 해야됨.
    },

    selectArr($event){
      /* send data to store.js with $store.state */
      this.$store.state.arrival = $event.target.value
      this.$store.state.arrAirportId = $event.target.name
      this.$store.state.airport_arr = $event.target.id
      /* display airport`s short */
      this.$store.state.shortArr = $event.target.value.slice(-4,-1)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.arrival)
      //document.getElementById('fli_text').innerText = this.arrival
      // eslint-disable-next-line no-console
      console.log(this.$store.state.arrAirportId)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.shortArr)
    }
  },
  mounted() {
  }
}


</script>

<style lang="scss">
@import '../UI/scss/main.scss';
@import '../UI/scss/_variable.scss';

/* bootstrap modal customed */

.neu-modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: $base;
  background-clip: padding-box;
  //border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: $shadow-concave;
  border-radius: 0.7rem;
  outline: 0;
}

/* bootstrap neu-accordion customed */
.neu-accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: $base;
  //border-radius: 10px;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .neu-accordion-button {
    transition: none;
  }
}

/* activating neu-accordion button*/
.neu-accordion-button:not(.collapsed) {
  color: black;
  font-size: 1.2rem;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.neu-accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.neu-accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .neu-accordion-button::after {
    transition: none;
  }
}
.neu-accordion-button:hover {
  z-index: 2;
}
.neu-accordion-button:focus {
  z-index: 3;
  //border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.neu-accordion-header {
  margin-bottom: 0;
}

.neu-accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: $shadow-accordion;
}
.neu-accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.neu-accordion-item:first-of-type .neu-accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.neu-accordion-item:not(:first-of-type) {
  border-top: 0;
}
.neu-accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.neu-accordion-item:last-of-type .neu-accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.neu-accordion-item:last-of-type .neu-accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.neu-accordion-body {
  padding: 1rem 1.25rem;
}

.neu-accordion-flush .neu-accordion-collapse {
  border-width: 0;
}
.neu-accordion-flush .neu-accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.neu-accordion-flush .neu-accordion-item:first-child {
  border-top: 0;
}
.neu-accordion-flush .neu-accordion-item:last-child {
  border-bottom: 0;
}
.neu-accordion-flush .neu-accordion-item .neu-accordion-button {
  border-radius: 0;
}

/* bootstrap neu-list customed */

.neu-list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.neu-list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.neu-list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.neu-list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
  background-color: $base;
}
.neu-list-group-item-action:hover, .neu-list-group-item-action:focus {
  z-index: 1;
  color: #212529;
  text-decoration: none;
  background-color: $base;
  box-shadow: $shadow-concave;
}
.neu-list-group-item-action:active {
  color: #212529;
  background-color: $base;
  box-shadow: $shadow-concave;
  transition: background-color 1s ease;
}

/* list design */
.neu-list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: $text-main;
  text-decoration: none;
  background-color: #f5f5f5;
  border-bottom: 0.05rem solid rgba(148, 147, 147, 0.4);
}
.neu-list-group-item:first-child {
  /* border-top-left-radius: inherit;
  border-top-right-radius: inherit; */
  border-bottom: 0.05rem solid rgba(148, 147, 147, 0.4);
}
.neu-list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  border: none;
}
.neu-list-group-item.disabled, .neu-list-group-item:disabled {
  color: #6c757d;
  font-style: italic;
  pointer-events: none;
  background-color: #fff;
}
.neu-list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.neu-list-group-item + .neu-list-group-item {
  border-top-width: 0;
}
.neu-list-group-item + .neu-list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}
</style>

