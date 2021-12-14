<!--App.vue-->

<template>
<Modal/>
<div class="App">
<span>John, I gotta go🛫</span>
<Search/>
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
      picked_from: new Date(),
      picked_to: '',
      person: [1, 0, 0],
      selectClass: 'economy',
      openModal : false,
      btnActive: false,
      unfold: false,//처음에는 fold 되어있는 상태이니 초기값은 false
      Departure : 'Incheon',
      Arrival : 'Jeju',
      DepartureDate : 'September 17th', 
      ArrivalDate : 'October 15th',
      
      airplane_img_inactive : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto'},
      airplane_img_active : 
      { width: '30px', height: '30px', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto'},
     
     /* datePicker Elements */
      selected: null,
      from: null,
      to: null,
      yearSelected: null,
      monthSelected: null,
    }
  },
setup() {

  
},

  methods: {

  },
  
  computed: {

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
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  }

</style>