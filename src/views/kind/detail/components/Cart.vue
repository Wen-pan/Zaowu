<template>
  <div class="Cart-main">
    <div class="headr-bar">
      <p @click="$router.go(-1)" class="btn">&lt;</p>
      <p class="title">内衣</p>
      <div>
        <p>编辑</p>
      </div>
    </div>
    <ul>
      <li class="container" v-for="m in list" :key="m.id">
        <span class="choice" :class="{ active:isActive==true }" @click="changeValue"></span>
        <img class="showing-img" :src="m.img" alt>
        <div class="shop-title">
          <p>{{m.cname}}</p>
          <p>{{m.ename}}</p>
          <p class="shop-money">¥{{m.money}}</p>
        </div>
        <div class="numbers">
          <span @click="reduce" class="btn">-</span>
          <span class="btn">{{m.count}}</span>
          <span @click="add" class="btn">+</span>
        </div>
      </li>
    </ul>
    <div>
      <div class="like">
        <p>你可能还会喜欢</p>
      </div>
    </div>
    <div class="probably">
      <div>
        <img src="@/assets/imgs/kind/detail2.png" alt>
        <p>TRIUMPU</p>
        <p>文胸内裤套装</p>
      </div>
      <div>
        <img src="@/assets/imgs/kind/detail3.png" alt>
        <p>ESSENCE</p>
        <p>女士Cozy圆领吊带性感</p>
      </div>
    </div>
    <div class="footer">
      <span></span>
      <p class="all">全选</p>
      <p class="total">总计</p>
      <p class="money">¥{{todal}}</p>
      <p class="purchase">立即购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",

  data() {
    return {
      isActive:false,
    };
  },
  computed: {
    list() {
      return this.$store.getters["cart/buyList"];
    },
    todal(){
      return this.$store.getters["cart/addbuy"];
    }
  },
  methods: {
   changeValue(){
     if(this.isActive==true){
       this.isActive=false
     }else{
       this.isActive=true
     }
     
    },
    reduce(){

    },
    add(){
      this.count++;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common.scss";
.Cart-main {
  background-color: #f4f4f4;
  .headr-bar {
    width: 100%;
    height: 51px;
    display: flex;
    padding: 0 $BasePadding;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    background-color: #f9f9f9;
    font-size: 16px;
    .btn {
      font-size: 30px;
    }
    .title {
      font-size: 20px;
    }
  }
  .container {
    position: relative;
    margin-top: 16px;
    width: 333px;
    height: 114px;
    margin: 0 auto;
    background-color: white;
    border-radius: 4px;
    font-size: 12px;
    text-align: left;
    overflow: hidden;
    .choice {
      position: absolute;
      left: 0;
      top: 40%;
      width: 17px;
      height: 17px;
      border-radius: 100%;
      border: 1px solid #e5e5e5;
    }
    .active {
      background-color: lightseagreen;
    }
    .showing-img {
      float: left;
      margin-top: 19px;
      margin-left: 24.5px;
      width: 76px;
      height: 76px;
    }
    .shop-title {
      margin-top: 20px;
      line-height: 25px;
      margin-left: 120px;
      color: #494949;
      .shop-money {
        font-weight: bold;
      }
    }
    .shop-number {
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: block;
    }
  }
  .numbers {
    position: absolute;
    right: 0;
    bottom: 0;
    .btn {
      display: block;
      float: left;
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      box-shadow: 1px 1px 5px #e9e9e9;
    }
  }
  .like {
    width: 200px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    margin-top: 200px;
  }
  .probably {
    margin-top: 22.5px;
    width: 100%;
    display: flex;
    padding: 0 $BasePadding;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }
  .footer {
    position: fixed;
    bottom: 0;
    
    width: 100%;
    display: flex;
    padding: 0 $BasePadding;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    span {
      width: 19px;
      height: 19px;
      border-radius: 100%;
      border: 2px solid #999999;
    }
    .all {
      font-size: 18px;
    }
    .total {
      font-size: 14px;
    }
    .money {
      font-size: 16px;
      font-weight: bold;
    }
    .purchase {
      width: 113px;
      height: 40px;
      font-size: 15px;
      background-color: #1c4b47;
      color: #ffffff;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
