
var state = {
    count:1,
    buy:[]
}
var mutations = {
    insBuy(state,id){
      if(!state.buy.some(item=>item.id==id)){
          state.buy.push({
              id,
              count:1
          })
      }else{
          var item = state.buy.find(item=>item.id==id);
          item.count++;
      }
    },
   
}
var getters = {
    buyList(state, getters, rootState, rootGetters){
        return state.buy.map(item=>{
            var Pitem = rootState.detil.array.find(obj=>obj.id==item.id);
            Object.assign(item,Pitem);
            return item;
        })
    },
    addbuy(state){
        for(var i = 0;i < state.buy.length;i ++){
            var Totalprice=state.buy[i].count*state.buy[i].money;
        }
        return Totalprice
    },
    plusbuy(state){
        for(var i = 0;i < state.buy.length;i ++){
            var Totalprices=state.buy[i].count*state.buy[i].money+state.buy[i].Postage;
        }
        return Totalprices
    }
}
var actions = {

}
export default {
    // 命名空间 用于区分不同的modules
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
