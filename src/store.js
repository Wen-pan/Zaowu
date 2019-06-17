import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  //用于保存需要共享的数据
  state: {
    count: 219,
  },
  //用来修改共享的数据
  // mutations都有一个state的回调对象
  mutations: {
    inCount(state) {
      state.count++;
    }
  },
  //vueX的计算属性
  getters: {
    mulcount(state) {
      return state.count + 219;
    }
  },
  //用于处理异步操作，可以调用mutations中的方法，从而修改state中的数据
  actions: {

  }
})
