<!--App.vue-->

<template>
<Modal/>
<div class="App">
<Search/>
<TicketBox/>

</div>


</template>

<script>
import TicketBox from './components/ticketBox.vue';
import Modal from './components/modal.vue'
import Search from './components/Search.vue';
import { ref } from 'vue'
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
   Search: Search,
  },
  
  data(){
    
    return{
      
    }
  },
created() {
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
@import './src/UI/scss/main.scss';
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
  min-height: 100rem;
  background: $base;
  padding-top: 1rem;
}

</style>