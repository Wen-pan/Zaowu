import Mack from 'mockjs'
const Random = Mack.Random
function information(){
   var array =[]
   for(var i = 0;i < 12;i ++){
       array.push({
           id:Random.guid(),
           cname:Random.name(),
           ename:Random.ctitle(3, 7),
           money:Random.natural(99, 999 ),
           img: Random.image('129x129',Random.color()),
       })
   }
   return array;
}
export default {
    information
}