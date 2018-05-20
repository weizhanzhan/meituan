import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import defaultMutations from './mutations/mutations'
import getters from './getters/getters'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:defaultState,
    getters,
    mutations:defaultMutations,
    actions:{
        //应用mutations
    }
})