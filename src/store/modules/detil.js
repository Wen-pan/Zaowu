
import Mack from 'mockjs'
const Random = Mack.Random
var array = []
for (var i = 0; i <12; i++) {
  array.push({
    id: Random.guid(),
    cname: Random.name(),
    ename: Random.ctitle(3, 7),
    money: Random.natural(99, 999),
    Postage:Random.natural(10, 20),
    img: Random.image('129x129', Random.color()),
  })
}
var state = {
    array:array
}
var mutations = {

}
var getters = {

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
