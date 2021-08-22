<template>
<div class="background_B">
  <div class="modal">
   <h4> 가는날 / 오는날 </h4>>
   <p> 상세페이지 </p>
   
  </div>
</div>
</template>


<script>



export default {   // 데이터 저장하는 곳  {{데이터바인딩}}


  props : {
    
  },
  name: 'Modal',

  methods: {  
   modaling: function()
   {
     this.openModal = !this.openModal;
   }
  },
  
  data(){
    
    return{    
      openModal : true
   
     
    }
    
  }
  
}


</script>

<style>
body{
  margin : 0;
}
div {
  box-sizing: border-box;

}
.background_B{
  
  width: 10%;
  height: 10%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.modal{
  width: 340px;
  height: 300px;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>

