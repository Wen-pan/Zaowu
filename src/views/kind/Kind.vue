<template>
  <div class="Kind-main">
    <div class="headr-bar">
      <p @click="back" class="btn">&lt;</p>
      <p class="title">ZAOWU造物</p>
      <div>
        <img src="@/assets/imgs/icons/chat.png" alt class="icon icon-chat">
        <img src="@/assets/imgs/icons/cart.png" alt class="icon icon-cart">
      </div>
    </div>
    <div class="list" v-for="m in kindimg" :key="m.id">
      <img @click="Listshow(m.id)" :src="m.img" alt>
      <ul>
        <router-link v-show="hidelist==m.id" tag="li" :to="{name:'Goosdetail',params:{Goosdetailid:subKind.id}}" class="list-details" v-for="subKind in m.subKinds" :key="subKind.id">
          <p>{{subKind.cname}}</p>
          <p>&gt;</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import kindImgapi  from '@/assets/api/kind'
export default {
  name: "Kind",
  data() {
    return {
      hidelist:'',
      kindimg:[]
    };
  },
  components: {},
  created () {
    kindImgapi.getListimgs().then(res=>{
        this.kindimg=res;
        console.log(this.kindimg)
    })
  },
  methods: {
    Listshow(id){
      if(this.hidelist!=id){
        this.hidelist=id
      }else if(this.hidelist==id){
        this.hidelist='';
      }
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.Kind-main {
  .headr-bar {
    width: 100%;
    height: 28px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    .btn{
      font-size:30px;
    }
    .title {
      font-size: 20px;
    }
    .icon {
      width: 20px;
      height: 20px;
      &.icon-chat {
        margin-right: 20px;
      }
    }
  }
  .list{
    margin-top: 9px;
    .list-details{
      width: 337.7px;
      padding: 0 $BasePadding;
      margin:0 auto;
      display: flex;
      justify-content:space-between;
      box-sizing: border-box;
      font-size:16px;
      line-height: 44px;
      color:#494949;
      border-bottom:2px solid #D8D6D6;
    }
  }
}
</style>
