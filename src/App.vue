<!--App.vue-->

<template>
<Modal/>
<div class="App">
<Search/>
<div v-if="loading" class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<TicketBox/>

</div>


</template>

<script>
import TicketBox from './components/ticketBox.vue';
import Modal from './components/modal.vue'
import Search from './components/Search.vue';
//import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
//import axios from 'axios'
// eslint-disable-next-line no-unused-vars
const picked = ref(new Date()) 
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { enUS } from 'date-fns/locale'
// eslint-disable-next-line no-unused-vars
import { isSameDay } from 'date-fns'




export default defineComponent({   // 데이터 저장하는 곳  {{데이터바인딩}}
  
  props: {
  
  },
  name: 'App',
  components: {
   TicketBox : TicketBox,
   Modal : Modal,
   //ToggleButton: ToggleButton,
   Search: Search,
   //Button: Button,
   //Icon: Icon,
   //Datepicker
 
  },
  
  data(){
    
    return{
      
    }
  },
setup() {

  
},

  methods: {

  },
  
  computed: {
    tickets() {
      return this.$store.state.tickets;
    }
  },

  watch: {

  }

 
})
</script>
 
<style lang="scss" scoped>
@import './UI/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  perspective: 700px; 
}
html{
  font-size: 16px;
}

.App{
  font-family: sans-serif;
  background: $base;
}

.ticketContainer{
  margin-left: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  }

</style>