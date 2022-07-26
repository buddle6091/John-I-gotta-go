<!--App.vue-->
<template>
<div>
  <Modal/>
  <div class="App">
    <Search/>
    <TicketBox/>
  </div>
</div>


</template>

<script>
import TicketBox from './components/ticketBox.vue';
import Modal from './components/modal.vue'
import Search from './components/Search.vue';
/* import { ref } from 'vue' */
// eslint-disable-next-line no-unused-vars
/* const picked = ref(new Date())  */
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

})
</script>
 
<style lang="scss" scoped>
@import './src/UI/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


.App{
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  background: $base;
  padding-top: 1rem;
}

</style>