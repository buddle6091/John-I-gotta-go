<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
  :style="{backgroundColor: 'rgba(255, 255, 255, 0)'}">
  <div class="modal-dialog">
    <div class="modal-content" :style="modal_neu">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">John, where are you going to 🛫</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-3">
      <div class="col-md-auto">
        <label for="validationServer03" class="form-label">Departure</label>
        <TextField class="is-invalid" aria-describedby="validationServer03Feedback" required data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text" placeholder="search country or city"> search </TextField>
        <!-- <input type="text" class="neu-search is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text" placeholder="search country or city"> -->
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample">
          
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Domestic (South Korea)
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">Seoul(ICN)</button> <!-- Incheon (NAARKSI) -->
                <button type="button" class="list-group-item list-group-item-action">Seoul(GMP)</button> <!-- Gimpo (NAARKSS) -->
                <button type="button" class="list-group-item list-group-item-action">Jeju(CJU)</button> <!-- Jeju (NAARKPC) -->
                <button type="button" class="list-group-item list-group-item-action">Gwangju(KWJ)</button> <!-- Gwangju (NAARKJJ) -->
                <button type="button" class="list-group-item list-group-item-action">Muan(MWX)</button> <!-- Muan (NAARKJB) -->
                <button type="button" class="list-group-item list-group-item-action">Gunsan(KUV)</button> <!-- Gunsan (NAARKJK) -->
                <button type="button" class="list-group-item list-group-item-action">Daegu(TAE)</button> <!-- Daegu (NAARKTN) -->
                <button type="button" class="list-group-item list-group-item-action">Sichuan(HIN)</button> <!-- Sichuan (NAARKPS) -->
                <button type="button" class="list-group-item list-group-item-action">Yeosu(RSU)</button> <!-- Yeosu (NAARKJY) -->
                <button type="button" class="list-group-item list-group-item-action">Ulsan(USN)</button> <!-- Ulsan (NAARKPU) -->
                <button type="button" class="list-group-item list-group-item-action">Wonju(WJU)</button> <!-- Wonju (NAARKNW) -->
                <button type="button" class="list-group-item list-group-item-action">Cheongju(CJJ)</button> <!-- Cheongju (NAARKTU) -->
                <button type="button" class="list-group-item list-group-item-action">Pohang(KPO)</button> <!-- Pohang (NAARKTH) -->
                <button type="button" class="list-group-item list-group-item-action">Yangyang(YNY)</button> <!-- Yangyang (NAARKNY) -->
                <button type="button" class="list-group-item list-group-item-action" disabled>Busan(Pus)</button> <!-- Busan -->
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Japan      
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">A second item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                China
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">A second item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="col-md-auto">
        <label for="validationServer03" class="form-label">arrival</label>
        <TextField class="is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" placeholder="search country or city"/>
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample2">
          <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Domestic (South Korea )
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="neu-list-group-item list-group-item-action">Seoul(ICN)</button> <!-- Incheon (NAARKSI) -->
                <button type="button" class="list-group-item list-group-item-action">Seoul(GMP)</button> <!-- Gimpo (NAARKSS) -->
                <button type="button" class="list-group-item list-group-item-action" disabled>Busan(Pus)</button> <!-- Busan -->
                <button type="button" class="list-group-item list-group-item-action">Jeju(CJU)</button> <!-- Jeju (NAARKPC) -->
                <button type="button" class="list-group-item list-group-item-action">Gwangju(KWJ)</button> <!-- Gwangju (NAARKJJ) -->
                <button type="button" class="list-group-item list-group-item-action">Muan(MWX)</button> <!-- Muan (NAARKJB) -->
                <button type="button" class="list-group-item list-group-item-action">Gunsan(KUV)</button> <!-- Gunsan (NAARKJK) -->
                <button type="button" class="list-group-item list-group-item-action">Daegu(TAE)</button> <!-- Daegu (NAARKTN) -->
                <button type="button" class="list-group-item list-group-item-action">Sichuan(HIN)</button> <!-- Sichuan (NAARKPS) -->
                <button type="button" class="list-group-item list-group-item-action">Yeosu(RSU)</button> <!-- Yeosu (NAARKJY) -->
                <button type="button" class="list-group-item list-group-item-action">Ulsan(USN)</button> <!-- Ulsan (NAARKPU) -->
                <button type="button" class="list-group-item list-group-item-action">Wonju(WJU)</button> <!-- Wonju (NAARKNW) -->
                <button type="button" class="list-group-item list-group-item-action">Cheongju(CJJ)</button> <!-- Cheongju (NAARKTU) -->
                <button type="button" class="list-group-item list-group-item-action">Pohang(KPO)</button> <!-- Pohang (NAARKTH) -->
                <button type="button" class="list-group-item list-group-item-action">Yangyang(YNY)</button> <!-- Yangyang (NAARKNY) -->
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Japan
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">A second item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                China
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">A second item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  <!-- button container -->
          <div class="modal-footer">
            <div class="g-col-6"><Button size="small" type="reset" style: marginRight=10px> reset </Button></div>
            <div class="g-col-6"><Button size="small" type="submit"> ok </Button></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Button from './components/UI/neumorphism/button/Button.vue';
import TextField from './components/UI/neumorphism/singleline-text-field/SinglelineTextField.vue';

export default {   // 데이터 저장하는 곳  {{데이터바인딩}}
  props : {
    openModal: Boolean,
  },
  name: 'Modal',
  components: {
   TextField: TextField,
   Button: Button,

  },
  methods: {  

  },
  
  data(){
    
    return{    
      modal_neu: 
      {borderRadius: '0.6rem', backgroundColor: '#eff1f6'},
      
    }
    
  }
  
}


</script>

<style lang="scss">
@import './components/scss/main.scss';
@import './components/scss/_variable.scss';

/* bootstrap accordion customed */
.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: $base;
  border: 1px solid  ;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}

/* activating accordion button*/
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
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
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

/* bootstrap list customed */

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.neu-list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: $base;
  border: 1px solid rgba(0, 0, 0, 0.125) {
    radius: 0px;
  }

}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}
</style>

