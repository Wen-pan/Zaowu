<template>
  <div class="KindBlock.vue">
    <ul>
        <li v-for="m in obj" :key="m.id">
            <p>{{m.id}}</p>
            <p>{{m.title}}</p>
        </li>
    </ul>
  </div>
</template>
<script>
import Mock from 'mockjs'
const Random = Mock.Random
export default {
  name: 'KindBlock.vue',

  data () {
    return {
        obj:[]
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
