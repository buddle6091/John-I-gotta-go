<template>
<transition appear :name="modal-effect">
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-3">
      <div class="col-md-auto">
        <label for="validationServer03" class="form-label">Departure</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="text">
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="col-md-auto">
        <label for="validationServer03" class="form-label">arrival</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required
        data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
        <div id="validationServer03Feedback" class="invalid-feedback">
         Please provide a valid city or state. </div>
        <div class="collapse" id="collapseExample2">
          <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
</form>
      </div>
  <!-- button container -->
      <div class="modal-footer">
        <div class="g-col-6"><Button size="small" type="reset" style: marginRight=10px> reset </Button></div>
         <div class="g-col-6"><Button size="small" type="submit"> ok </Button></div>
      </div>
    </div>
  </div>
</div>
</transition>
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
    
    }
    
  }
  
}


</script>

<style lang="scss">
@import './components/scss/main.scss';

body{
  margin: 0
}

div {
  box-sizing: border-box;
}

.modal-effect-leave-from, .modal-effect-enter-to{
  opacity: 1;
}
.modal-effect-enter-from, .modal-effect-leave-to{
  opacity: 0;
}

.background_B{
     position: fixed;
        top: 40px;
        left: auto;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
      /*   align-items: center; */
}
.white{
  width: 80%;
  height: 50%;
  background: $base;
  border-radius: 8px;
  padding: 20px;
}

</style>

