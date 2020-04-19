import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    session:''
  },
  mutations:{
    changeSession(state,payload){
      state.session=payload
    }
  }
})

export default store
