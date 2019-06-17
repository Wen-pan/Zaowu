import Vue from 'vue'
import Vuex from 'vuex'
import detil from './modules/detil'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        detil
    }
})