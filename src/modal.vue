<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
  :style="{backgroundColor: 'rgba(255, 255, 255, 0.2)'}">
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
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text" placeholder="search country or city">
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
      <div class="col-md-auto">
        <label for="validationServer03" class="form-label">arrival</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" placeholder="search country or city">
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample2">
          <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Domestic
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">Seoul(ICN)</button> <!-- Incheon (NAARKSI) -->
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

export default {   // 데이터 저장하는 곳  {{데이터바인딩}}
  props : {
    openModal: Boolean,
  },
  name: 'Modal',
  components: {
   //Search: Search,
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

</style>

