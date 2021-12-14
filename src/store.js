import { createStore } from 'vuex'

const store = createStore({
    /* store the data */
    state(){
        return {
            totalPerson: '',
            selectClass: '',
            departure: '',
            arrival: '',           
        }
    },
})

export default store